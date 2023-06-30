const fs = require('fs');

module.exports = { 
    getNotes: function () {
        return 'your notes...'
    },

    addNote: function(title, body) {
        const notes = this.loadNotes();

        const duplicateNotes = notes.filter((note) => {
            return note.title === title
        })

        if (duplicateNotes.length === 0) {
            notes.push({
                title: title,
                body: body
            })

            this.saveNotes(notes);
            console.log('new note added')
        } else {
            console.log('note title taken')
        }
    },

    loadNotes: function () {
        try {
            const dataBuffer = fs.readFileSync('notes.json');
            const dataJSON = dataBuffer.toString();
            return JSON.parse(dataJSON);
        } catch (e) {
            return []
        }
    },

    saveNotes: function (notes) {
        const dataJSON = JSON.stringify(notes);
        fs.writeFileSync('notes.json', dataJSON);
    },

    removeNotes: function(title) {
        let notes = this.loadNotes();

        const removeNote = notes.filter((note) => { 
            return note.title !== title
        })

        if (removeNote < notes) {
            notes = removeNote;
            console.log('note removed');
            this.saveNotes(notes);
        } else {
            console.log('note does not exist')
        }
    },

    listNotes: function(title) {
        const notes = this.loadNotes();

        for (let i = 0; i < notes.length; i++) {
            console.log(notes[i])
        }
    },

    readNote: function(title) {
        const notes = this.loadNotes();

        const noteFound = notes.find((note) => note.title === title)

        if (!noteFound) {
            console.log('note not found')
        } else {
            console.log(noteFound)
        }
    }
}