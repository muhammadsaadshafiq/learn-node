const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

// writeFileSync('./content/merged.txt', first + second, {flag: 'a'},);

const merged = readFileSync('./content/merged.txt', 'utf8');

console.log(merged);