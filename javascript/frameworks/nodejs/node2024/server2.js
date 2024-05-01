import { createServer } from 'http';
const PORT = process.env.PORT;

console.log(PORT);

const users = [
  { id: 1, name: "John",  },
  { id: 3, name: "Jane",  },
  { id: 3, name: "Bill",  },
];

const server = createServer((req, res) => {
  if (req.url === '/api/users' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(users));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});