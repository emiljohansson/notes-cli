"use strict";

var ls = require('./ls');

function listNotes() {
    ls(printLn);
}

function printLn(content) {
    console.log(content);
}

module.exports = listNotes;
