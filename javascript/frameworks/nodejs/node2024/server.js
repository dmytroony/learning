import http from 'http';
const PORT = 5237;

const server = http.createServer((req, res) => {
  res.write("Hello, NodeJS!");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});