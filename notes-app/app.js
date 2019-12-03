const validator = require('validator');
const getNotes = require('./notes.js');


getNotes('Your notes...');
console.log(validator.isURL('http://www.adp.nl'));

