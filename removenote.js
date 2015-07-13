"use strict";

var addNotes = require('./addnotes');
var clearFileContent = require('./clearfilecontent');
var ls = require('./ls');

function removeNote(index) {
    ls(removeNoteAt(index));
}

function removeNoteAt(index) {
    return function(list) {
        if (index >= list.length) {
            throw 'Note at index not found.';
        }
        clearFileContent(fileName, function() {
            list.splice(index, 1);
            addNotes(list);
        });
    };
}

module.exports = removeNote;
