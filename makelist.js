"use strict";

var createNote = require('./note');

function makeList(content) {
    return content.split('\n\n')
        .filter(moreThanOne)
        .map(makeNote);
}

function moreThanOne(list) {
    return list.length > 1;
}

function makeNote(note, i) {
    var list = note.split('\n');
    return createNote(i, list[0], list[1]);
}

module.exports = makeList;
