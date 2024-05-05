import fs from 'fs'; // async/sync version

// (async version: default): readFile() - callback, it's non-blocking
fs.readFile('./dataTxt.txt', 'utf8', (err, data) => { // (fileLocation, encodingMethod, callbackFn)
  if (err) throw err;
  console.log(data);
});

// (sync version): readFileSync() - it's blocking
const data = fs.readFileSync('./dataTxt.txt', 'utf8');
console.log(data);
