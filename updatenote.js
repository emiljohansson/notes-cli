"use strict";

var moveToEnd = require('array-movetoend');
var addNotes = require('./addnotes');
var clearFileContent = require('./clearfilecontent');
var ls = require('./ls');

function updateNote(index, newContent) {
    ls(updateNoteAt(index, newContent));
}

function updateNoteAt(index, newContent) {
    return function(list) {
        if (index >= list.length) {
            throw 'Note at index not found.';
        }
        updateList(list, index, newContent);
    };
}

function updateList(list, index, newContent) {
    clearFileContent(fileName, function() {
        list[index].date = new Date();
        list[index].text = newContent;
        moveToEnd(list, index);
        addNotes(list);
    });
}

module.exports = updateNote;
