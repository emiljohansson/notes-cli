"use strict";

var fs = require('fs');
var makeList = require('./makelist');

function ls(callback) {
    if (typeof callback !== 'function') {
        throw 'Must pass a function';
    }
    fs.readFile(fileName, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            return;
        }
        callback(makeList(data));
    });
}

module.exports = ls;
