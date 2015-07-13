"use strict";

var ls = require('./ls');

function listNotes(callback) {
    ls(printLn);
}

function printLn(content) {
    console.log(content);
}

module.exports = listNotes;
