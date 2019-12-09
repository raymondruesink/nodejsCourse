const chalk = require('chalk');
const fs =require('fs');


//add a note

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJsON);
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
    
};


const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title )

    debugger


    if (!duplicateNote) {
        notes.push(
            {
                title: title,
                body: body
            }
        );
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('note title taken'));
    }

    
    saveNotes(notes);
};

//remove a note

const removeNote = (title) => {
    const notes=loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse('No note found!'));
    } else {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep);
    }


}
   

const listNotes = () => {
    const notes=loadNotes();
    console.log('Your notes : ')
    notes.forEach(note => {
        console.log(chalk.blue(note.title))
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const foundNote = notes.find((note) => note.title === title )

    if (!foundNote) {
        console.log(chalk.red('Note not found!'))
    } else {
        console.log((chalk.blue(foundNote.title)) + ' : ' + foundNote.body)
    }}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};