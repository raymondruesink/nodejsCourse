const chalk = require('chalk');
const fs =require('fs');
const getNotes = (a) => {
    console.log(a)
};

//add a note

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(
        function (note) {
            return note.title === title
        }
    )

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



const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }
    
};

//remove a note

const removeNote = function (title) {
    const notes=loadNotes();
    const notesToKeep = notes.filter(
        function (note) {
            return note.title !== title
        }
    );

    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse('No note found!'));
    } else {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep);
    }

    

   

}


const destroyNote = function (title) {
    console.log(title)
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};