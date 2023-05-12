// The fs module provides a way to work with the file system.

const fs = require('fs');

fs.readFile('/path/to/file', (err, data) => {
  if (err) throw err;
  console.log(data);
});
