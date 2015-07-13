"use strict";

var addNote = require('./addnote');

function addNotes(list) {
    list.forEach(function(note) {
        addNote(note.text, note.date);
    });
}

module.exports = addNotes;
