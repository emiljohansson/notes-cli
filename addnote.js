"use strict";

var fs = require('fs');

function addNote(text, date) {
    date = date || new Date();
    text = text + '\n\n';
    text = date.toString() + '\n' + text;
    fs.appendFile(fileName, text, function(err) {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = addNote;
