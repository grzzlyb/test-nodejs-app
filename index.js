// Load the HTTP module
const http = require('http');

// Configure our HTTP server to respond with "Hello, World!" to all requests
const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello! This is a sample node server. Testing Jenkins Job Build 1!!!');
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(3000);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:3000/');
