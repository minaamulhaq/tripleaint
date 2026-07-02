const fs = require('fs');
const path = require('path');

const directory = 'e:\\WebCourse\\car-sale\\components\\landing';
const files = fs.readdirSync(directory).filter(f => f.endsWith('.tsx'));

const rules = [
  // Switch brand-black and brand-carbon to light mode backgrounds
  { regex: /bg-brand-black/g, replace: 'bg-white' },
  { regex: /bg-brand-carbon/g, replace: 'bg-brand-off-white' },
  
  // Convert main text colors
  { regex: /text-white/g, replace: 'text-brand-black' },
  { regex: /text-white\/([0-9]+)/g, replace: 'text-brand-muted' },
  
  // Borders
  { regex: /border-white\/([0-9]+)/g, replace: 'border-black/5' },
  { regex: /border-brand-white\/([0-9]+)/g, replace: 'border-black/5' },

  // Specific components modifications to ensure visibility
  { regex: /bg-brand-off-white\/90/g, replace: 'bg-white/90' }, // For floating cards
  { regex: /bg-brand-silver\/10 text-brand-silver/g, replace: 'bg-brand-silver/20 text-brand-black' },
  { regex: /text-brand-silver/g, replace: 'text-brand-muted' }, // Text on white should be darker
];

for (const file of files) {
  const filePath = path.join(directory, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const rule of rules) {
    content = content.replace(rule.regex, rule.replace);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
}
console.log('Light mode transition script finished.');
