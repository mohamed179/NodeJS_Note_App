const fs = require('fs');
const chalk = require('chalk');

const loadNotes = () => {
  try {
  	const datasBuffer = fs.readFileSync('notes.json');
    const dataJSON = datasBuffer.toString();
    const notes = JSON.parse(dataJSON);
    return notes;
  } catch (error) {
  	return [];
  }
};

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesJSON);
};

const getNotes = () => "Your notes...";

const addNote = (title, body) => {
  const notes = loadNotes();
  const dublicatedNote = notes.find(note => note.title == title);

  debugger;

  if(! dublicatedNote) {
  	notes.push({
  		title: title,
  		body: body
  	});
  	saveNotes(notes);
  	console.log(chalk.green.inverse('Note added!'));
  } else {
  	console.log(chalk.red.inverse('A note with the same title already exist!'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);
  if (notesToKeep.length < notes.length) {
  	saveNotes(notesToKeep);
  	console.log(chalk.green.inverse('Note removed!'));
  } else {
  	console.log(chalk.red.inverse('No note found!'));
  }
}

const listNotes = () => {
  console.log(chalk.inverse('Your notes'));
  const notes = loadNotes();
  notes.forEach(note => console.log(note.title));
}

const readNote =  (title) => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);
  if(note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};