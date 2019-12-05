const getNotes = require('./notes.js');
const chalk = require('chalk');

getNotes('Your notes...');

const msg = chalk.blue.inverse('Success!');

console.log(msg);


