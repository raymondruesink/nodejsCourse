const fs = require('fs');

//fs.writeFileSync('notes.txt', 'My name is Raymond.');

fs.appendFileSync('notes.txt', '\nThis is the second line.');