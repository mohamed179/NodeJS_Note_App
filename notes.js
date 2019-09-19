const fs = require('fs');

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
  const dublicatedNote = notes.filter(note => note.title == title);
  if(dublicatedNote.length == 0) {
  	notes.push({
  		title: title,
  		body: body
  	});
  	saveNotes(notes);
  	console.log(loadNotes());
  } else {
  	console.log('A note with the same title already exist!');
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote
};