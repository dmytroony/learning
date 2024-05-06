import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

// basename() - returns a file name
console.log(path.basename(filePath));

// dirname() - returns a directory path
console.log(path.dirname(filePath));

// extname() - returns an extension of file
console.log(path.extname(filePath));

// parse()
const parsedPath = path.parse(filePath);
console.log(parsedPath);

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// console.log(__filename);
// console.log(__dirname);

// join()
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

// resolve()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);