"use strict";

var ls = require('./ls');

function toJson() {
    ls(printLn);
}

function printLn(content) {
    var result = {
        notes: content
    };
    console.log(result);
}

module.exports = toJson;
