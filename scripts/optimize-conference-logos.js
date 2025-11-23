#!/usr/bin/env node

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputDir = 'public/static/images/conferenceLogos';
const outputDir = 'public/static/images/conferenceLogos';

async function convertToWebP(inputPath, outputPath) {
    try {
        const stats = await sharp(inputPath)
            .webp({
                quality: 90,
                effort: 6
            })
            .toFile(outputPath);

        const inputSize = fs.statSync(inputPath).size;
        const outputSize = stats.size;
        const reduction = ((1 - outputSize / inputSize) * 100).toFixed(1);

        console.log(`  ✅ ${path.basename(outputPath)} (${(outputSize / 1024).toFixed(2)} KB, -${reduction}%)`);

        return { inputSize, outputSize };
    } catch (error) {
        console.error(`  ❌ Erreur: ${error.message}`);
        return null;
    }
}

async function main() {
    console.log('🚀 Conversion des logos de conférences en WebP...\n');

    const files = fs.readdirSync(inputDir).filter(file => file.endsWith('.png'));

    if (files.length === 0) {
        console.log('⚠️  Aucun fichier PNG trouvé');
        return;
    }

    let totalInputSize = 0;
    let totalOutputSize = 0;

    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const basename = path.basename(file, '.png');
        const outputPath = path.join(outputDir, `${basename}.webp`);

        const result = await convertToWebP(inputPath, outputPath);

        if (result) {
            totalInputSize += result.inputSize;
            totalOutputSize += result.outputSize;
            fs.unlinkSync(inputPath);
            console.log(`  🗑️  ${path.basename(inputPath)} supprimé`);
        }
    }

    if (totalInputSize > 0) {
        const totalReduction = ((1 - totalOutputSize / totalInputSize) * 100).toFixed(1);
        console.log(`\n📊 Total: ${(totalInputSize / 1024 / 1024).toFixed(2)} MB → ${(totalOutputSize / 1024 / 1024).toFixed(2)} MB (-${totalReduction}%)`);
    }

    console.log('\n✨ Conversion terminée !');
}

main().catch(console.error);

