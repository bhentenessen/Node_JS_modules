// The https module works just like the http module, but it creates an HTTPS server instead of an HTTP server. It provides an encrypted connection between the server and the client, which is important for secure communication over the internet.

const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(8443, () => {
  console.log('Server running on https://localhost:8443/');
});
