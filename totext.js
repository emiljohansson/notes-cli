"use strict";

var fs = require('fs');

function toText() {
    fs.readFile(fileName, 'utf8', function(err, data) {
        console.log(data);
    });
}

module.exports = toText;
