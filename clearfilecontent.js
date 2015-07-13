"use strict";

var fs = require('fs');

function clearFileContent(file, callback) {
    fs.writeFile(file, '', callback);
}

module.exports = clearFileContent;
