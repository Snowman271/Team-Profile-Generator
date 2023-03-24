const fs = require('fs');

const writeFile = htmlFile =>
    fs.writeFile('./dist/index.html', htmlFile, (err) => {
        err?
            console.log(err)
            :
            console.log('Your Team Has Been Made!')
    });
module.exports = writeFile;