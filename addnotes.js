"use strict";

var fs = require('fs');
var addNote = require('./addnote');

function addNotes(list) {
    emptyFileContent(function() {
        list.forEach(function(note) {
            addNote(note.note, note.date);
        });
    });
}

function emptyFileContent(callback) {
    fs.writeFile(fileName, '', function() {
        callback();
    });
}

module.exports = addNotes;
