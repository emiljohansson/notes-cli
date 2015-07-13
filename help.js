"use strict";

var fs = require('fs');

function help() {
    fs.readFile('help.txt', 'utf8', function(err, data) {
        console.log(data);
    });
}

module.exports = help;
