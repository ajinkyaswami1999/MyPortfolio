const fs = require('fs');
const path = require('path');

console.log("=========================================");
console.log("🤖 RUNNING CANONICAL SEO & SITEMAP AUDIT");
console.log("=========================================");

const sitemapPath = path.join(process.cwd(), 'public/sitemap.xml');
const robotsPath = path.join(process.cwd(), 'public/robots.txt');

const dynamicSitemapPath = path.join(process.cwd(), 'src/app/sitemap.ts');
const dynamicRobotsPath = path.join(process.cwd(), 'src/app/robots.ts');

let errors = 0;
let warnings = 0;

// 1. Audit Sitemap
if (fs.existsSync(dynamicSitemapPath)) {
  console.log("✅ Found dynamic Next.js sitemap at src/app/sitemap.ts");
  const sitemapContent = fs.readFileSync(dynamicSitemapPath, 'utf8');
  if (sitemapContent.includes('https://ajinkyaswami.in') && !sitemapContent.includes('ajinkyaswami1999.github.io')) {
    console.log(`   └─ ✅ Dynamic sitemap correctly targets https://ajinkyaswami.in custom domain.`);
  } else {
    console.log(`   └─ ❌ Error: Dynamic sitemap contains incorrect domain configuration.`);
    errors++;
  }
} else if (fs.existsSync(sitemapPath)) {
  console.log("✅ Found public/sitemap.xml");
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const domainCount = (sitemapContent.match(/https:\/\/ajinkyaswami\.in/g) || []).length;
  const legacyCount = (sitemapContent.match(/ajinkyaswami1999\.github\.io/g) || []).length;

  if (domainCount > 0 && legacyCount === 0) {
    console.log(`   └─ ✅ Sitemap contains ${domainCount} correct custom domain links.`);
  } else {
    console.log(`   └─ ❌ Error: Sitemap contains ${legacyCount} legacy github.io links.`);
    errors++;
  }
} else {
  console.log("❌ Error: sitemap (sitemap.ts or public/sitemap.xml) is missing!");
  errors++;
}

// 2. Audit robots.txt
if (fs.existsSync(dynamicRobotsPath)) {
  console.log("✅ Found dynamic Next.js robots at src/app/robots.ts");
  const robotsContent = fs.readFileSync(dynamicRobotsPath, 'utf8');
  if (robotsContent.includes('https://ajinkyaswami.in/sitemap.xml')) {
    console.log("   └─ ✅ Dynamic robots config references correct custom sitemap.");
  } else {
    console.log("   └─ ❌ Error: Dynamic robots does not reference correct custom sitemap.");
    errors++;
  }
} else if (fs.existsSync(robotsPath)) {
  console.log("✅ Found public/robots.txt");
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  if (robotsContent.includes('Sitemap: https://ajinkyaswami.in/sitemap.xml')) {
    console.log("   └─ ✅ Robots.txt contains correct sitemap reference.");
  } else {
    console.log("   └─ ❌ Error: Robots.txt does not reference correct custom sitemap.");
    errors++;
  }
} else {
  console.log("❌ Error: robots (robots.ts or public/robots.txt) is missing!");
  errors++;
}

// 3. Scan pages for SEO Metadata & Schema Integrations
const corePages = [
  { name: 'Home Page', path: 'src/app/page.tsx' },
  { name: 'Asset Manifest Page', path: 'src/app/asset-manifest/page.tsx' },
  { name: 'Personnel File Page', path: 'src/app/personnel-file/page.tsx' },
  { name: 'Transmission Tower Page', path: 'src/app/transmission-tower/page.tsx' },
  { name: 'Blog List', path: 'src/app/blog/page.tsx' },
  { name: 'Blog Detail Dynamic Route', path: 'src/app/blog/[id]/page.tsx' },
  { name: 'Project Detail Dynamic Route', path: 'src/app/projects/[id]/page.tsx' }
];

console.log("\n🔍 Checking Static/Dynamic Page Configurations:");
corePages.forEach(page => {
  const fullPath = path.join(process.cwd(), page.path);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    const hasMetadata = content.includes('export const metadata') || content.includes('generateMetadata');
    const hasSchema = content.includes('ld+json') || content.includes('jsonLd');

    if (hasMetadata && hasSchema) {
      console.log(`   └─ ✅ ${page.name} (${page.path}): exports Metadata & feeds JSON-LD Schema.`);
    } else {
      console.log(`   └─ ⚠️ ${page.name} (${page.path}): missing metadata or schema elements.`);
      warnings++;
    }
  } else {
    console.log(`   └─ ❌ Error: ${page.name} file not found at ${page.path}`);
    errors++;
  }
});

console.log("\n=========================================");
console.log(`⚙️ AUDIT COMPLETE: ${errors} Error(s), ${warnings} Warning(s)`);
console.log("=========================================");

if (errors > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
