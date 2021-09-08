const path = require('path');

// gets the system separtor symbol: here, it's '/'
console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolutePath);
