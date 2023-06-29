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
    }
}