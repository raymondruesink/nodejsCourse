const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');


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
    handler: function (argv) {
        console.log(argv.title + ' says : ' + argv.body)
    }
});

//Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
});

//Create read command

yargs.command({
    command: 'read',
    describe: 'Display a note.',
    handler: function () {
        console.log('This is your note')
    }
});

// Create list command

yargs.command({
    command: 'list',
    describe: 'Display a list of all the notes.',
    handler: function () {
        console.log('All your notes!')
    }
});


yargs.parse();