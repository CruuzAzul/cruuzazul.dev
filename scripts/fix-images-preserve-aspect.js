#!/usr/bin/env node

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const glob = require('glob');

async function convertToWebPPreserveAspect(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`\n📸 ${path.basename(inputPath)}`);
    console.log(`   Dimensions: ${metadata.width}×${metadata.height}`);
    console.log(`   Orientation EXIF: ${metadata.orientation || 1}`);
    
    const stats = await image
      .rotate()
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
  console.log('🔧 Correction de la rotation EXIF des images...\n');
  console.log('⚠️  Note: Ce script corrige uniquement la rotation.');
  console.log('   Si les images sont cropées, vous devez reconvertir depuis les fichiers originaux.\n');
  
  let totalInputSize = 0;
  let totalOutputSize = 0;
  
  const mickaPath = 'public/static/images/micka.webp';
  if (fs.existsSync(mickaPath)) {
    const tempPath = mickaPath.replace('.webp', '.temp.webp');
    const result = await convertToWebPPreserveAspect(mickaPath, tempPath);
    if (result) {
      fs.renameSync(tempPath, mickaPath);
      totalInputSize += result.inputSize;
      totalOutputSize += result.outputSize;
    }
  }
  
  const featuredFiles = glob.sync('public/static/images/talks/*featured*.webp');
  
  for (const file of featuredFiles) {
    const tempPath = file.replace('.webp', '.temp.webp');
    const result = await convertToWebPPreserveAspect(file, tempPath);
    if (result) {
      fs.renameSync(tempPath, file);
      totalInputSize += result.inputSize;
      totalOutputSize += result.outputSize;
    }
  }
  
  if (totalInputSize > 0) {
    const totalReduction = ((1 - totalOutputSize / totalInputSize) * 100).toFixed(1);
    console.log(`\n📊 Total: ${(totalInputSize / 1024 / 1024).toFixed(2)} MB → ${(totalOutputSize / 1024 / 1024).toFixed(2)} MB (-${totalReduction}%)`);
  }
  
  console.log('\n✨ Correction terminée !');
  console.log('\n💡 Pour corriger le crop, reconvertissez depuis les fichiers originaux avec:');
  console.log('   node scripts/convert-from-originals.js');
}

main().catch(console.error);
