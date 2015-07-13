"use strict";

var ls = require('./ls');
var addNotes = require('./addnotes');

function removeNote(index) {
    ls(removeNoteAt(index));
}

function removeNoteAt(index) {
    return function(list) {
        if (index >= list.length) {
            throw 'Note at index not found.';
        }
        list.splice(index, 1);
        addNotes(list);
    };
}

module.exports = removeNote;
