import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

// const PORT = 5237;
const PORT = process.env.PORT;

// get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  // res.write("Hello, NodeJS!");
  // res.end("Hello, NodeJS!");
  // res.setHeader('Content-Type', 'text/plain');
  // res.setHeader('Content-Type', 'text/html');
  // res.statusCode = 404;
  // res.end("<h1>Hello, NodeJS!</h1>");
  // res.writeHead(500, { 'Content-Type': 'application/json' });
  // res.end(JSON.stringify( { message: 'Server Error' }, null, 2));
  // console.log(req.url);
  // console.log(req.method);
  
  // simple routing
  try {
    if(req.method === 'GET') {  //check if GET
      let filePath;

      if (req.url === '/') {
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.end('<h1>Homepage</h1>');
        filePath = path.join(__dirname, 'public', 'index.html');
      } else if (req.url === '/about') {
        // res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.end('<h1>About Us</h1>');
        filePath = path.join(__dirname, 'public', 'about.html');
      } else {
        // res.writeHead(404, { 'Content-Type': 'text/html' });
        // res.end('<h1>404</h1><h2>Not found</h2>');
        throw new Error("404: Not found");
      }

      const data = await fs.readFile(filePath);
      res.setHeader('Content-Type', 'text/html');
      res.write(data);
      res.end();

    } else {
      throw new Error("Method not allowed!");
    }
  } catch (error) {
    console.error(error); // check if another method such as POST etc.
    res.writeHead(500, { 'Content-Type': 'text/html' });
    res.end('<h1>500</h1><h2><b>ISE</b>: Internal Server Error</h2>');
  }

  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.end('<h1>Hello NodeJS!</h1>');
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // getting PORT from .env
});