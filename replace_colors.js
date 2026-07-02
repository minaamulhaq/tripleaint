const fs = require('fs');
const path = require('path');

const directory = 'e:\\WebCourse\\car-sale\\components\\landing';
const files = fs.readdirSync(directory).filter(f => f.endsWith('.tsx'));

const rules = [
  // Red (Amber -> Red)
  { regex: /(bg|text|border|ring|shadow|from|to|via)-\[#E8732E\]/g, replace: '$1-brand-red' },
  { regex: /hover:(bg|text|border|ring|shadow)-\[#E8732E\]/g, replace: 'hover:$1-brand-red' },
  { regex: /group-hover:(bg|text|border|ring|shadow)-\[#E8732E\]/g, replace: 'group-hover:$1-brand-red' },
  { regex: /group-hover\/item:text-\[#E8732E\]/g, replace: 'group-hover/item:text-brand-red' },
  
  // Dark Red (Amber dark -> Red dark)
  { regex: /hover:bg-\[#d65f1c\]/g, replace: 'hover:bg-brand-red-dark' },
  { regex: /hover:text-\[#d65f1c\]/g, replace: 'hover:text-brand-red-dark' },

  // Black / Carbon (Navy -> Black)
  { regex: /(bg|text|border|ring|shadow|from|to|via)-\[#0B1B2B\]/g, replace: '$1-brand-black' },
  { regex: /hover:(bg|text|border)-\[#0B1B2B\]/g, replace: 'hover:$1-brand-black' },
  
  { regex: /(bg|text|border|from|to|via)-\[#1A2A3A\]/g, replace: '$1-brand-carbon' },

  // Silver (Teal -> Silver)
  { regex: /(bg|text|border|from|to|via)-\[#3FA9A0\]/g, replace: '$1-brand-silver' },

  // Off White & Muted texts
  { regex: /bg-\[#F6F7F5\]/g, replace: 'bg-brand-off-white' },
  { regex: /text-\[#101417\]/g, replace: 'text-brand-black' },
  { regex: /text-\[#5C6670\]/g, replace: 'text-brand-muted' },
  { regex: /text-\[#6B7280\]/g, replace: 'text-brand-muted' },

  // Special linear gradients replacements requested in prompt
  { regex: /bg-gradient-to-r from-\[#E8732E\] to-\[#f3955d\]/g, replace: 'bg-gradient-to-r from-brand-red to-brand-red-light' },
  { regex: /bg-\[#E8732E\] hover:bg-\[#d65f1c\]/g, replace: 'bg-gradient-to-br from-brand-red to-brand-red-dark' },
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
console.log('Color replacement script finished.');
