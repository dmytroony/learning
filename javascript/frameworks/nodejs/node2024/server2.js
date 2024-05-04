import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "John",  },
  { id: 2, name: "Jane",  },
  { id: 3, name: "Bill",  },
];

// logger middleware(a func or a module that has access to the req-res objects)
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// JSON middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
};

const server = createServer((req, res) => {
  // wrapping in the callback and getting access to the req-res objects
  logger(req, res, () => {
    if (req.url === '/api/users' && req.method === 'GET') {
      res.setHeader('Content-Type', 'application/json');
      res.write(JSON.stringify(users));
      res.end();
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
      const id = req.url.split('/')[3];
      const user = users.find((user) => user.id === parseInt(id));
      res.setHeader('Content-Type', 'application/json');
      if (user) {
        res.write(JSON.stringify(user));
      } else {
        res.statusCode = 404;
        res.write(JSON.stringify({ message: "User not found!" }));
      }
      res.end();
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "Route not found!" }));
      res.end();
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});