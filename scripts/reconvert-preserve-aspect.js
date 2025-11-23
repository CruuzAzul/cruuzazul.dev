#!/usr/bin/env node

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function convertPreservingAspect(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`\n📸 ${path.basename(inputPath)}`);
    console.log(`   Dimensions originales: ${metadata.width}×${metadata.height}`);
    console.log(`   Orientation EXIF: ${metadata.orientation || 1}`);
    
    const stats = await image
      .rotate()
      .webp({ 
        quality: 90,
        effort: 6
      })
      .toFile(outputPath);

    const outputMetadata = await sharp(outputPath).metadata();
    console.log(`   Dimensions finales: ${outputMetadata.width}×${outputMetadata.height} (aspect préservé)`);
    
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
  console.log('🔄 Reconversion des images en préservant l\'aspect ratio et la rotation...\n');
  
  let totalInputSize = 0;
  let totalOutputSize = 0;
  
  const tasks = [
    {
      input: 'public/static/images/micka.jpg',
      output: 'public/static/images/micka.webp'
    },
    {
      input: 'public/static/images/talks/coulisses-javascript-featured.jpg',
      output: 'public/static/images/talks/coulisses-javascript-featured.webp'
    },
    {
      input: 'public/static/images/talks/react-compiler-featured.jpg',
      output: 'public/static/images/talks/react-compiler-featured.webp'
    },
    {
      input: 'public/static/images/talks/remotion-featured.jpg',
      output: 'public/static/images/talks/remotion-featured.webp'
    }
  ];
  
  for (const task of tasks) {
    if (fs.existsSync(task.input)) {
      const result = await convertPreservingAspect(task.input, task.output);
      if (result) {
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
  
  console.log('\n✨ Reconversion terminée !');
  console.log('\n🗑️  Suppression des fichiers originaux...');
  
  for (const task of tasks) {
    if (fs.existsSync(task.input)) {
      fs.unlinkSync(task.input);
      console.log(`   ✅ ${path.basename(task.input)} supprimé`);
    }
  }
}

main().catch(console.error);

