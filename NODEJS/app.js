const fs  =    require('fs');
const poema = fs.readFileSync('poema.txt', 'utf-8');
const poemaModified = poema.replace(/Node.js/ig,'NODEJS')
fs.writeFileSync('poema-modified.txt', poemaModified);
