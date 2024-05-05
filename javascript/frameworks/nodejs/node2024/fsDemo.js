// import fs from 'fs'; // async/sync version
// 
// // (async version: default): readFile() - callback, it's non-blocking
// fs.readFile('./dataTxt.txt', 'utf8', (err, data) => { // (fileLocation, encodingMethod, callbackFn)
//   if (err) throw err;
//   console.log(data);
// });
// // (sync version): readFileSync() - it's blocking
// const data = fs.readFileSync('./dataTxt.txt', 'utf8');
// console.log(data);

// (promise version): readFile() - Promise .then()
// import fs from 'fs/promises';
//
// fs.readFile('./dataTxt.txt', 'utf8')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
// 
// (async/await version): readFile()
// 
import fs from 'fs/promises';
const readFile = async () => {
  try {
    const data = await fs.readFile('./dataTxt.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const writeFile = async () => {
  try {
    await fs.writeFile('./dataTxt.txt', 'Hello from writeFile function');
    console.log('File written to...');
  } catch (error) {
    console.error(error);
  }
};

// appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile('./dataTxt.txt', '\nHello from appendFile func');
    console.log('Additional info appended to data file...');
  } catch (error) {
    console.error(error);
  }
};

writeFile();
appendFile();
readFile();
