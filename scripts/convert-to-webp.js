// scripts/convert-to-webp.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const exts = ['.jpg', '.jpeg', '.png'];
const folders = [
  './public/assets',
  './public/v1_assets',
  './public/portfolio',
  './public/assets/landing',
  './public/v1_assets/banner',
  './public/v1_assets/about',
  './public/portfolio',
];

function getAllImages(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllImages(filePath));
    } else if (exts.includes(path.extname(file).toLowerCase())) {
      results.push(filePath);
    }
  });
  return results;
}

async function convertToWebP(imgPath) {
  const outPath = imgPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  if (fs.existsSync(outPath)) return;
  // Resize: إذا كانت الصورة أعرض من 500px، صغّرها إلى 500px عرض
  const metadata = await sharp(imgPath).metadata();
  let pipeline = sharp(imgPath);
  if (metadata.width && metadata.width > 500) {
    pipeline = pipeline.resize(500);
  }
  await pipeline
    .webp({ quality: 80 })
    .toFile(outPath);
  console.log('Converted:', outPath);
}

(async () => {
  for (const folder of folders) {
    const images = getAllImages(folder);
    for (const img of images) {
      try {
        await convertToWebP(img);
      } catch (e) {
        console.error('Error converting', img, e);
      }
    }
  }
})();
