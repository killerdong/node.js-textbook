const crypto = require('crypto');

console.log(crypto.createHash('sha512').update('sdw1q2w3e4').digest('base64'));
console.log(crypto.createHash('sha512').update('sdw1q2w3e4').digest('hex'));
console.log(crypto.createHash('sha512').update('1111wdqwdqwd').digest('base64'));

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');

    console.log(salt);

    crypto.pbkdf2('wdwqdqwdqwdqd', salt, 100000, 64, 'sha512', (err, key) => {
        console.log(key.toString('base64'));
    });
});