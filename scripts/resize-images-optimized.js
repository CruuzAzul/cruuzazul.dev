#!/usr/bin/env node

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function resizeImage(inputPath, outputPath, maxWidth, maxHeight) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`\n📸 ${path.basename(inputPath)}`);
    console.log(`   Dimensions originales: ${metadata.width}×${metadata.height}`);
    console.log(`   Orientation EXIF: ${metadata.orientation || 1}`);
    
    const currentWidth = metadata.width;
    const currentHeight = metadata.height;
    const aspectRatio = currentWidth / currentHeight;
    
    let finalWidth = currentWidth;
    let finalHeight = currentHeight;
    
    if (currentWidth > maxWidth || currentHeight > maxHeight) {
      if (aspectRatio > (maxWidth / maxHeight)) {
        finalWidth = maxWidth;
        finalHeight = Math.round(maxWidth / aspectRatio);
      } else {
        finalHeight = maxHeight;
        finalWidth = Math.round(maxHeight * aspectRatio);
      }
    }
    
    console.log(`   Dimensions finales: ${finalWidth}×${finalHeight} (max: ${maxWidth}×${maxHeight}, aspect préservé)`);
    
    const stats = await image
      .rotate()
      .resize(finalWidth, finalHeight, {
        fit: 'inside',
        withoutEnlargement: true
      })
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
  console.log('🔄 Redimensionnement des images aux dimensions optimales...\n');
  
  let totalInputSize = 0;
  let totalOutputSize = 0;
  
  const tasks = [
    {
      name: 'Image micka',
      input: 'public/static/images/micka.webp',
      output: 'public/static/images/micka.webp',
      maxWidth: 672,
      maxHeight: 672
    },
    {
      name: 'Featured talk: coulisses-javascript',
      input: 'public/static/images/talks/coulisses-javascript-featured.webp',
      output: 'public/static/images/talks/coulisses-javascript-featured.webp',
      maxWidth: 800,
      maxHeight: 300
    },
    {
      name: 'Featured talk: react-compiler',
      input: 'public/static/images/talks/react-compiler-featured.webp',
      output: 'public/static/images/talks/react-compiler-featured.webp',
      maxWidth: 800,
      maxHeight: 300
    },
    {
      name: 'Featured talk: remotion',
      input: 'public/static/images/talks/remotion-featured.webp',
      output: 'public/static/images/talks/remotion-featured.webp',
      maxWidth: 800,
      maxHeight: 300
    }
  ];
  
  for (const task of tasks) {
    if (fs.existsSync(task.input)) {
      console.log(`\n📋 ${task.name}`);
      const tempPath = task.output.replace('.webp', '.temp.webp');
      const result = await resizeImage(task.input, tempPath, task.maxWidth, task.maxHeight);
      if (result) {
        fs.renameSync(tempPath, task.output);
        totalInputSize += result.inputSize;
        totalOutputSize += result.outputSize;
      }
    } else {
      console.log(`\n⚠️  Fichier non trouvé: ${task.input}`);
    }
  }
  
  if (totalInputSize > 0) {
    const totalReduction = ((1 - totalOutputSize / totalInputSize) * 100).toFixed(1);
    console.log(`\n📊 Total: ${(totalInputSize / 1024 / 1024).toFixed(2)} MB → ${(totalOutputSize / 1024 / 1024).toFixed(2)} MB (-${totalReduction}%)`);
  }
  
  console.log('\n✨ Redimensionnement terminé !');
}

main().catch(console.error);

