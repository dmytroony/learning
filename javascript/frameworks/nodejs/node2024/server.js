import http from 'http';
const PORT = 5237;

const server = http.createServer((req, res) => {
  // res.write("Hello, NodeJS!");
  // res.end("Hello, NodeJS!");
  // res.setHeader('Content-Type', 'text/plain');
  // res.setHeader('Content-Type', 'text/html');
  // res.statusCode = 404;
  // res.end("<h1>Hello, NodeJS!</h1>");

  res.writeHead(500, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify( { message: 'Server Error' }, null, 2));
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});