# notes-cli

> Command line based notes.

Add, remove, update and list notes.

## Install

```
git clone https://github.com/emiljohansson/notes-cli

cd /path/to/notes-cli

npm link
```

## Usage

```
notes-cli add My first note.

notes-cli add My second note.

notes-cli ls
//=> [ { index: 0,
    date: 'Mon Jul 13 2015 10:02:48 GMT-0600 (MDT)',
    text: 'My first note.' },
  { index: 1,
    date: 'Mon Jul 13 2015 10:04:19 GMT-0600 (MDT)',
    text: 'My second note.' }]

notes-cli update 0 Update my first note.

notes-cli ls
//=> [ { index: 0,
    date: 'Mon Jul 13 2015 10:04:19 GMT-0600 (MDT)',
    text: 'My second note.' },
  { index: 1,
    date: 'Mon Jul 13 2015 10:04:48 GMT-0600 (MDT)',
    text: 'Update my first note.' }]

notes-cli remove 1.

notes-cli ls
//=> [ { index: 0,
    date: 'Mon Jul 13 2015 10:04:19 GMT-0600 (MDT)',
    text: 'My second note.' }]

notes-cli help
```

## License

MIT © [Emil Johansson](http://emiljohansson.se)
