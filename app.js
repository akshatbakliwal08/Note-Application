/*const fs = require('fs')

fs.writeFileSync('notes.txt','Sab kuch Nepal hai aur teri maa ka bhosda hai')
fs.appendFileSync('notes.txt',' Ab maa chuda')*/
/*const add=require('./utils.js');
const sum = add(4,-2);

console.log(sum);*/
const fs=require('fs');
const chalk =require('chalk');
const notes=require('./notes');
const yargs=require('yargs');
//const notes=getNotes();
yargs.version('1.1.0');
//Adding a new note
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title: {
            describe: 'Note Title',
            demandOption:true,
            type:'string'
        },
        body: {
            describe: 'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
});
//Removing the note
yargs.command({
    command:'remove',
    describe:'remove the node',
    handler(argv){
       notes.removeNote(argv.title);
        // console.log('Removing the node');
    }
});
//Listing Notes
yargs.command({
    command:'list',
    describe: 'listing the notes',
    handler(){
        notes.listNotes();
    }
});
yargs.command({
    command:'read',
    describe: 'reading the notes',
    handler(argv){
        notes.readNote(argv.title);
    }
});

yargs.parse();
//console.log(yargs.argv);
