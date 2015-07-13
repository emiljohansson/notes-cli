#! /usr/bin/env node
"use strict";

global.fileName = __dirname + '/notes.txt';

var argv = require('minimist')(process.argv.slice(2));
var addNote = require('./addnote');
var removeNote = require('./removenote');
var listNotes = require('./listnotes');
var help = require('./help');

switch (argv._.splice(0, 1).toString()) {
    case 'add':
    case 'a':
        addNote(argv._.join(' '));
        break;
    case 'remove':
    case 'rm':
    case 'r':
        removeNote(argv._[0]);
        break;
    case 'list':
    case 'ls':
        listNotes();
        break;
    case 'help':
    case 'h':
        help();
        break;
}
