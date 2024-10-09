const fs = require('fs');
const path = require('path');

// Define your URLs with priority and last modified date (optional)
const urls = [
  { loc: 'https://parmaarth.in/', priority: '1.00' },
  { loc: 'https://parmaarth.in/content/हनुमान_चालीसा', priority: '0.80' },
  { loc: 'https://parmaarth.in/content/सुंदरकांड', priority: '0.80' },
  { loc: 'https://parmaarth.in/content/श्रीमद्भगवद्गीता', priority: '0.80' },
  { loc: 'https://parmaarth.in/content/वाल्मीकि_रामायण', priority: '0.80' },
  { loc: 'https://parmaarth.in/content/रामचरित_मानस', priority: '0.80' },
  { loc: 'https://parmaarth.in/content/महाभारत', priority: '0.80' },
  { loc: 'https://parmaarth.in/content/शिव_तांडव', priority: '0.80' },
  { loc: 'https://parmaarth.in/content/हनुमान_बाहुक', priority: '0.80' },
  { loc: 'https://parmaarth.in/content/दुर्गा_सप्तशती', priority: '0.80' },
  { loc: 'https://parmaarth.in/content/शिव_चालीसा', priority: '0.80' },
  { loc: 'https://parmaarth.in/content/ऋग्वेद', priority: '0.80' },
  { loc: 'https://parmaarth.in/content/यजुर्वेद', priority: '0.80' },
  { loc: 'https://parmaarth.in/content/सामवेद', priority: '0.80' },
  { loc: 'https://parmaarth.in/content/अथर्ववेद', priority: '0.80' },
  { loc: 'https://parmaarth.in/content/गरुड़_पुराण', priority: '0.80' },
  { loc: 'https://parmaarth.in/content/भविष्य_मालिका', priority: '0.80' },
];

// Create XML structure for sitemap
const sitemapTemplate = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => {
    return `<url>
      <loc>${url.loc}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>${url.priority}</priority>
    </url>`;
  })
  .join('')}
</urlset>`;

// Write the sitemap to the /public directory
fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemapTemplate);

console.log('✅ Sitemap generated successfully!');
