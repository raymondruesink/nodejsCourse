const chalk = require('chalk');
const fs =require('fs');
const getNotes = (a) => {
    console.log(a)
};

//add a note

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
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
    const duplicateNotes = notes.filter((note) => note.title === title )
    

    if (duplicateNotes.length ===0) {
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



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};