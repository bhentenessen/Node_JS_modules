// The dns module provides a way to perform DNS lookups. 

const dns = require('dns');

dns.lookup('example.com', (err, address) => {
  console.log(address);
});
