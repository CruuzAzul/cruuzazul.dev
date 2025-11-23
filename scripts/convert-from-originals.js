#!/usr/bin/env node

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function convertFromOriginal(inputPath, outputPath, maxWidth, maxHeight) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`\n📸 ${path.basename(inputPath)}`);
    console.log(`   Dimensions originales: ${metadata.width}×${metadata.height}`);
    console.log(`   Orientation EXIF: ${metadata.orientation || 1}`);
    
    let pipeline = image.rotate();
    
    if (maxWidth && maxHeight) {
      const currentWidth = metadata.width;
      const currentHeight = metadata.height;
      const aspectRatio = currentWidth / currentHeight;
      const targetAspectRatio = maxWidth / maxHeight;
      
      let finalWidth = currentWidth;
      let finalHeight = currentHeight;
      
      if (currentWidth > maxWidth || currentHeight > maxHeight) {
        if (aspectRatio > targetAspectRatio) {
          finalWidth = maxWidth;
          finalHeight = Math.round(maxWidth / aspectRatio);
        } else {
          finalHeight = maxHeight;
          finalWidth = Math.round(maxHeight * aspectRatio);
        }
      }
      
      console.log(`   Dimensions finales: ${finalWidth}×${finalHeight} (preserve aspect, no crop)`);
      
      pipeline = pipeline.resize(finalWidth, finalHeight, {
        fit: 'inside',
        withoutEnlargement: true
      });
    } else {
      console.log(`   Dimensions finales: ${metadata.width}×${metadata.height} (pas de redimensionnement)`);
    }
    
    const stats = await pipeline
      .webp({ 
        quality: 90,
        effort: 6
      })
      .toFile(outputPath);

    const inputSize = fs.statSync(inputPath).size;
    const outputSize = stats.size;
    const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);

    console.log(`   ✅ ${path.basename(outputPath)} (${(outputSize / 1024).toFixed(2)} KB, -${reduction}%)`);
    
    return { inputSize, outputSize };
  } catch (error) {
    console.error(`   ❌ Erreur: ${error.message}`);
    return null;
  }
}

async function main() {
  console.log('🔄 Conversion depuis les fichiers originaux...\n');
  console.log('📝 Placez vos fichiers originaux dans:');
  console.log('   - public/static/images/originals/micka.jpg (ou .png)');
  console.log('   - public/static/images/originals/talks/*featured*.jpg (ou .png)\n');
  
  const originalsDir = 'public/static/images/originals';
  
  if (!fs.existsSync(originalsDir)) {
    console.log('❌ Le dossier originals n\'existe pas. Créez-le et placez-y vos fichiers originaux.');
    return;
  }
  
  let totalInputSize = 0;
  let totalOutputSize = 0;
  
  const mickaOriginal = fs.readdirSync(originalsDir).find(f => f.startsWith('micka') && (f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg')));
  if (mickaOriginal) {
    const inputPath = path.join(originalsDir, mickaOriginal);
    const outputPath = 'public/static/images/micka.webp';
    const result = await convertFromOriginal(inputPath, outputPath, null, null);
    if (result) {
      totalInputSize += result.inputSize;
      totalOutputSize += result.outputSize;
    }
  } else {
    console.log('⚠️  Aucun fichier micka original trouvé');
  }
  
  const glob = require('glob');
  const featuredOriginals = glob.sync(path.join(originalsDir, 'talks', '*featured*.{jpg,jpeg,png}'));
  
  for (const original of featuredOriginals) {
    const basename = path.basename(original, path.extname(original));
    const outputPath = path.join('public/static/images/talks', `${basename}.webp`);
    const result = await convertFromOriginal(original, outputPath, null, null);
    if (result) {
      totalInputSize += result.inputSize;
      totalOutputSize += result.outputSize;
    }
  }
  
  if (totalInputSize > 0) {
    const totalReduction = ((1 - totalOutputSize / totalInputSize) * 100).toFixed(1);
    console.log(`\n📊 Total: ${(totalInputSize / 1024 / 1024).toFixed(2)} MB → ${(totalOutputSize / 1024 / 1024).toFixed(2)} MB (-${totalReduction}%)`);
  }
  
  console.log('\n✨ Conversion terminée !');
}

main().catch(console.error);

