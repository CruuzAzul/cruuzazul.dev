#!/usr/bin/env node

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function fixMickaImage(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`\n📸 ${path.basename(inputPath)}`);
    console.log(`   Dimensions originales: ${metadata.width}×${metadata.height}`);
    console.log(`   Orientation EXIF: ${metadata.orientation || 1}`);
    
    const stats = await image
      .rotate()
      .resize(672, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ 
        quality: 90,
        effort: 6
      })
      .toFile(outputPath);

    const outputMetadata = await sharp(outputPath).metadata();
    console.log(`   Dimensions finales: ${outputMetadata.width}×${outputMetadata.height} (aspect ratio préservé)`);
    
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
  console.log('🔧 Correction de l\'image micka (préservation de l\'aspect ratio portrait)...\n');
  
  const inputPath = 'public/static/images/micka.jpg';
  const outputPath = 'public/static/images/micka.webp';
  
  if (!fs.existsSync(inputPath)) {
    console.log('❌ Fichier original non trouvé:', inputPath);
    console.log('   Restaurez-le depuis git avec: git checkout HEAD -- public/static/images/micka.jpg');
    return;
  }
  
  const result = await fixMickaImage(inputPath, outputPath);
  
  if (result) {
    console.log('\n✨ Conversion terminée !');
    console.log('\n🗑️  Suppression du fichier original...');
    fs.unlinkSync(inputPath);
    console.log('   ✅ micka.jpg supprimé');
  }
}

main().catch(console.error);
