import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// OPTIMIZED DIMENSIONS FOR WEB - Based on common use cases
const CONFIG = {
  // DIFFERENT SIZES FOR DIFFERENT USE CASES
  SIZES: {
    // For hero/banner images (full width)
    HERO: { width: 1920, height: 1080 }, // 16:9 ratio

    // For popup/modal images
    POPUP: { width: 1200, height: 800 }, // 3:2 ratio

    // For card/thumbnail images
    CARD: { width: 800, height: 600 }, // 4:3 ratio

    // For small icons/avatars
    ICON: { width: 400, height: 400 }, // 1:1 ratio
  },

  // Auto-detect which size to use based on filename
  SIZE_MAPPINGS: {
    // Keywords in filename → Size profile
    hero: "HERO",
    banner: "HERO",
    cover: "HERO",

    popup: "POPUP",
    modal: "POPUP",
    poster: "POPUP",
    event: "POPUP",

    card: "CARD",
    thumbnail: "CARD",
    thumb: "CARD",
    preview: "CARD",

    icon: "ICON",
    avatar: "ICON",
    logo: "ICON",
    profile: "ICON",
  },

  // Default size if no keywords matched
  DEFAULT_SIZE: "POPUP",

  // WebP quality settings
  QUALITY: {
    HERO: 80, // Lower quality for large images (file size matters)
    POPUP: 85, // Balanced quality
    CARD: 90, // Higher quality for smaller images
    ICON: 95, // Highest quality for icons
  },

  // Folders to scan
  SOURCE_DIRS: [
    path.join(__dirname, "src", "assets"),
    path.join(__dirname, "public", "assets"),
  ],

  // Output folder
  OUTPUT_DIR: path.join(__dirname, "optimized-images"),

  // File extensions
  EXTENSIONS: [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff"],
};

// Determine which size to use based on filename
function getSizeProfile(filename) {
  const name = filename.toLowerCase();

  for (const [keyword, profile] of Object.entries(CONFIG.SIZE_MAPPINGS)) {
    if (name.includes(keyword)) {
      console.log(`   📏 Detected: "${keyword}" → ${profile} profile`);
      return profile;
    }
  }

  console.log(`   📏 Using default: ${CONFIG.DEFAULT_SIZE} profile`);
  return CONFIG.DEFAULT_SIZE;
}

async function processImage(filePath) {
  try {
    const fileName = path.basename(filePath);
    const nameWithoutExt = path.basename(filePath, path.extname(filePath));
    const sizeProfile = getSizeProfile(fileName);

    const { width, height } = CONFIG.SIZES[sizeProfile];
    const quality = CONFIG.QUALITY[sizeProfile];

    const outputPath = path.join(CONFIG.OUTPUT_DIR, `${nameWithoutExt}.webp`);

    console.log(`🔄 Processing: ${fileName}`);
    console.log(`   Size: ${width}x${height}px | Quality: ${quality}%`);

    // Get original image info
    const originalStats = await fs.stat(filePath);
    const image = sharp(filePath);
    const metadata = await image.metadata();

    const originalMB = (originalStats.size / 1024 / 1024).toFixed(2);
    console.log(
      `   Original: ${metadata.width}x${metadata.height} (${originalMB} MB)`
    );

    // Skip if already smaller than target
    if (metadata.width <= width && metadata.height <= height) {
      console.log(`   ⏭️  Already optimal size, converting to WebP only`);
    }

    // Resize and convert to WebP
    await image
      .resize({
        width,
        height,
        fit: "inside",
        withoutEnlargement: true,
        position: "center", // Center crop if needed
      })
      .webp({
        quality,
        effort: 6,
        alphaQuality: 90, // For PNG transparency
        nearLossless: true, // Better compression
      })
      .toFile(outputPath);

    // Get optimized file info
    const optimizedStats = await fs.stat(outputPath);
    const optimizedKB = (optimizedStats.size / 1024).toFixed(2);
    const savings = (
      ((originalStats.size - optimizedStats.size) / originalStats.size) *
      100
    ).toFixed(2);

    console.log(`   ✅ WebP: ${optimizedKB} KB (${savings}% smaller)`);
    console.log(`   📁 Saved: ${path.basename(outputPath)}\n`);

    return {
      fileName,
      profile: sizeProfile,
      originalSize: originalStats.size,
      optimizedSize: optimizedStats.size,
      savings: parseFloat(savings),
      dimensions: `${width}x${height}`,
      quality: `${quality}%`,
    };
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    return null;
  }
}

async function scanDirectory(dirPath) {
  const results = [];

  try {
    const items = await fs.readdir(dirPath);

    for (const item of items) {
      const fullPath = path.join(dirPath, item);

      try {
        const stats = await fs.stat(fullPath);

        if (stats.isDirectory()) {
          const subResults = await scanDirectory(fullPath);
          results.push(...subResults);
        } else if (stats.isFile()) {
          const ext = path.extname(item).toLowerCase();
          if (CONFIG.EXTENSIONS.includes(ext)) {
            results.push(fullPath);
          }
        }
      } catch (err) {
        // Skip inaccessible files
      }
    }
  } catch (error) {
    console.error(`Error scanning ${dirPath}:`, error.message);
  }

  return results;
}

async function main() {
  console.log("=".repeat(70));
  console.log("🚀 SMART IMAGE OPTIMIZER");
  console.log("=".repeat(70));

  console.log("\n📋 OPTIMIZATION PROFILES:");
  console.log("   HERO    (1920x1080) - For banners, covers");
  console.log("   POPUP   (1200x800)  - For events, posters (default)");
  console.log("   CARD    (800x600)   - For thumbnails, previews");
  console.log("   ICON    (400x400)   - For logos, avatars\n");

  console.log("🔍 Auto-detection based on filename keywords:");
  Object.entries(CONFIG.SIZE_MAPPINGS).forEach(([keyword, profile]) => {
    console.log(`   "${keyword}" → ${profile}`);
  });

  console.log(`\n📁 Source folders: ${CONFIG.SOURCE_DIRS.length}`);
  CONFIG.SOURCE_DIRS.forEach((dir) =>
    console.log(`   - ${path.relative(__dirname, dir)}`)
  );
  console.log(
    `📁 Output folder: ${path.relative(__dirname, CONFIG.OUTPUT_DIR)}`
  );
  console.log(`📊 Original files preserved for quality comparison\n`);

  // Create output directory
  try {
    await fs.mkdir(CONFIG.OUTPUT_DIR, { recursive: true });
  } catch (error) {
    if (error.code !== "EEXIST") {
      console.error(`Error: ${error.message}`);
      return;
    }
  }

  // Scan for images
  let allImageFiles = [];
  for (const sourceDir of CONFIG.SOURCE_DIRS) {
    try {
      await fs.access(sourceDir);
      const images = await scanDirectory(sourceDir);
      allImageFiles.push(...images);
      console.log(
        `✅ Found ${images.length} images in ${path.relative(
          __dirname,
          sourceDir
        )}`
      );
    } catch (error) {
      console.log(
        `⚠️  Skipping: ${path.relative(__dirname, sourceDir)} (not found)`
      );
    }
  }

  if (allImageFiles.length === 0) {
    console.log("\n❌ No images found!");
    console.log(
      "   Make sure your images are in src/assets/ or public/assets/"
    );
    console.log("   Or update SOURCE_DIRS in the script");
    return;
  }

  console.log(`\n🎯 Total images: ${allImageFiles.length}`);
  console.log("=".repeat(70) + "\n");

  // Process images
  const results = [];
  const profileCounts = { HERO: 0, POPUP: 0, CARD: 0, ICON: 0 };
  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const [index, file] of allImageFiles.entries()) {
    console.log(`[${index + 1}/${allImageFiles.length}]`);
    const result = await processImage(file);

    if (result) {
      results.push(result);
      profileCounts[result.profile]++;
      totalOriginal += result.originalSize;
      totalOptimized += result.optimizedSize;
    }
  }

  // Report
  console.log("=".repeat(70));
  console.log("📊 OPTIMIZATION REPORT");
  console.log("=".repeat(70));

  console.log(`\n✅ Processed: ${results.length} images`);

  console.log("\n📈 Profile Usage:");
  Object.entries(profileCounts).forEach(([profile, count]) => {
    if (count > 0) {
      const { width, height } = CONFIG.SIZES[profile];
      console.log(`   ${profile} (${width}x${height}): ${count} images`);
    }
  });

  const totalMBOriginal = (totalOriginal / 1024 / 1024).toFixed(2);
  const totalMBOptimized = (totalOptimized / 1024 / 1024).toFixed(2);
  const totalSavings = (
    ((totalOriginal - totalOptimized) / totalOriginal) *
    100
  ).toFixed(2);

  console.log(`\n💾 Size Reduction:`);
  console.log(`   Before: ${totalMBOriginal} MB`);
  console.log(`   After:  ${totalMBOptimized} MB`);
  console.log(`   Savings: ${totalSavings}% 🎉`);

  console.log(`\n📁 Output: ${path.relative(__dirname, CONFIG.OUTPUT_DIR)}/`);
  console.log("🔍 Compare WebP vs original for quality check");

  console.log("\n🔄 Update imports in your components:");
  console.log("   // Change:");
  console.log('   import img from "../assets/photo.jpg";');
  console.log("   ");
  console.log("   // To:");
  console.log('   import img from "../optimized-images/photo.webp";');

  console.log("\n" + "=".repeat(70));
}

main().catch(console.error);
