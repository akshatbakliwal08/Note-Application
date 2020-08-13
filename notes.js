const chalk=require('chalk');
const fs=require('fs');
const { title } = require('process');
const getNotes = ()=>{
    return 'Your Notes...'+note;
}

const addNote=(title,body)=>{
    const notes=loadNotes();
    //const dupNote=notes.filter((note)=>note.title===title);
    const dupNotes=notes.find((note)=> note.title===title);
    
    //debugger;
    
    if(dupNotes===undefined){
        notes.push({
            title:title,
            body:body
        });
        saveNotes(notes);
        console.log(chalk.inverse.green('New Note Added!!!'));
    }else{
        console.log(chalk.inverse.red('Note Title Taken'));
    }
    //console.log(notes);
}

const saveNotes=(notes)=>{
    const datajson=JSON.stringify(notes);
    fs.writeFileSync('notes.json',datajson);
}
const removeNote=(title)=>{
    const notes=loadNotes();
    const noty=notes.filter((note)=>note.title!==title);
    if(noty.length===notes.length){
        console.log(chalk.inverse.red('Note not found!!!'));
    }else{
        saveNotes(noty);
        console.log(chalk.inverse.green('Note Removed!!!'));
    }
}

const listNotes=()=>{
    const notes=loadNotes();
    console.log(chalk.inverse.yellow('Your Notes...'));
    notes.forEach((note) => console.log(note.title));
}

const readNote=(title)=>{
    const notes=loadNotes();
    const note=notes.find((not)=>not.title===title);
    if(note===undefined){
        console.log(chalk.bold.red.inverse('Note not found!!!'));
    }
    else{
        console.log(chalk.bold.inverse(note.title));
        console.log(note.body);
    }
}

const loadNotes=()=>{
    try{
    const databuff=fs.readFileSync('notes.json');
    const datajson=databuff.toString();
    return JSON.parse(datajson);
    }
    catch(e){
        return [];
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,
    readNote:readNote
};