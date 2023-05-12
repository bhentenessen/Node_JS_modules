// To handle unhandled errors

const http = require('http');
const domain = require('domain');

const server = http.createServer((req, res) => {
  const reqDomain = domain.create();

  reqDomain.on('error', (err) => {
    console.error(`Error processing request: ${err.message}`);
    res.statusCode = 500;
    res.end('Internal Server Error');
  });

  reqDomain.run(() => {
    // Your request handling code here
    throw new Error('Something went wrong!');
  });
});

server.listen(8000);
