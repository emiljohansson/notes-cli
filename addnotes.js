"use strict";

var addNote = require('./addnote');

function addNotes(list) {
    list.forEach(iterateNote);
}

function iterateNote(note) {
    addNote(note.text, note.date);
}

module.exports = addNotes;
