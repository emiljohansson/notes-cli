"use strict";

var fs = require('fs');

function clearFileContent(file, callback) {
    fs.writeFile(file, '', function() {
        callback();
    });
}

module.exports = clearFileContent;
