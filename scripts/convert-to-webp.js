// scripts/convert-to-webp.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// تحديد المجلدات المسموحة
const ALLOWED_FOLDERS = [
  path.resolve('./public/assets'),
  path.resolve('./public/v1_assets'),
  path.resolve('./public/portfolio')
];

// التحقق من أن المسار آمن
function isPathSafe(filePath) {
  const resolvedPath = path.resolve(filePath);
  return ALLOWED_FOLDERS.some(folder => resolvedPath.startsWith(folder));
}

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
  if (!fs.existsSync(dir) || !isPathSafe(dir)) return results;
  
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (!isPathSafe(filePath)) return;
    
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
  if (!isPathSafe(imgPath)) {
    console.error('Unsafe path detected:', imgPath);
    return;
  }
  
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
