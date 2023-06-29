const yargs = require('yargs');
const command = process.argv[2];

// creating a note
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note description',
            demandOption: true, 
            type: 'string'
        }
    },
    handler: (argv) => console.log(`title: ${argv.title}\n` + `body: ${argv.body}`)
})

// removing a note
yargs.command ({
    command: 'remove',
    describe: 'remove a note', 
    handler: () => console.log('removing a note')
})
yargs.command ({
    command: 'list',
    describe: 'list a note', 
    handler: () => console.log('listing a note')
})

yargs.command ({
    command: 'read',
    describe: 'read a note', 
    handler: () => console.log('reading a note')
})

yargs.parse();