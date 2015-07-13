"use strict";

function makeList(content) {
    return content.split('\n\n')
        .filter(function(list) {
            return list.length > 1;
        })
        .map(function(note, i) {
            var list = note.split('\n');
            return {
                index: i,
                date: list[0],
                note: list[1]
            };
        });
}

module.exports = makeList;
