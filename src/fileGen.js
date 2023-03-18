const fs = require('fs');

const fileGen = htmlFile =>
    fs.fileGen('./dist/index.html', htmlFile, (err) => {
        err?
            console.log(err)
            :
            console.log('Your Team Has Been Made!')
    });
module.exports = fileGen;