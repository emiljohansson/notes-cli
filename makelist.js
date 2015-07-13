"use strict";

var createNote = require('./note');

function makeList(content) {
    return content.split('\n\n')
        .filter(function(list) {
            return list.length > 1;
        })
        .map(function(note, i) {
            var list = note.split('\n');
            return createNote(i, list[0], list[1]);
        });
}

module.exports = makeList;
