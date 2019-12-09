const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


//create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'The contents of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
});

//Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
});

//Create read command

yargs.command({
    command: 'read',
    describe: 'Display a note.',
    handler() {
        console.log('This is your note')
    }
});

// Create list command

yargs.command({
    command: 'list',
    describe: 'Display a list of all the notes.',
    handler() {
        console.log('All your notes!')
    }
});


yargs.parse();