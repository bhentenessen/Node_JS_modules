// The crypto module provides a way to handle cryptographic functionality.

const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');

console.log(hash); // 6f8db599de986fab7a21625b7916589c\
