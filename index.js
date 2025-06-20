const http = require('http');
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'Development';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`
==============================
Node.js App Running in Docker  
Environment: ${ENV}
Port: ${PORT}
Made by: Rahul Joshi
GitHub: github.com/rahuljoshi-dev
==============================
`);
});

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
