import http from 'http';
// const PORT = 5237;
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
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
      if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Homepage</h1>');
      } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Us</h1>');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404</h1><h2>Not found</h2>');
      }
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