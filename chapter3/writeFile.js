const fs = require('fs');

fs.writeFile('./writefile.txt', '입력되나요?', err => {
    if (err) {
        throw err;
    }

    fs.readFile('./writefile.txt', (err, data) => console.log(data.toString()));
});