"use strict";

function createNote(index, date, text) {
    var note = {};
    note.index = index;
    note.date = date;
    note.text = text;
    return note;
}

module.exports = createNote;
