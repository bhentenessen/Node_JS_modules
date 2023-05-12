// Provides classes used by a text terminal

const tty = require('tty');

if (tty.isatty(process.stdout)) {
  console.log('\x1b[31m%s\x1b[0m', 'This message is in red!');
} else {
  console.log('This message is not in color.');
}
