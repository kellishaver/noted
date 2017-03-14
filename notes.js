const fs    = require('fs');
const data  = "./data/notes.json";

var addNote = (title, body) => {
  var notes = _loadNotes();
  var note = { title, body };
  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    _saveNotes(notes);
    console.log("\nNote added.\n");
  } else {
    console.log(`\nA note with the name "${title}" already exists.\n`);
  }
};

var listNotes = () => {
  var notes = _loadNotes();
  console.log("\nAll Notes\n============");
  var n = 1
  for(let note of notes) {    
    console.log(`${n}: ${note.title}`);
    n++;
  }
  console.log("\n");
};

var readNote = (number) => {
  number--;
  var notes = _loadNotes();
  console.log(`\n${notes[number].title}\n----------\n${notes[number].body}\n`);
}

var deleteNote = (number) => {
  number--;
  var notes = _loadNotes();
  var title = notes[number].title;
  var filteredNotes = notes.filter((note) => note.title !== title);
  _saveNotes(filteredNotes);
  console.log("\nNote deleted.\n");
}

var _saveNotes = (notes) => {
  fs.writeFileSync(data, JSON.stringify(notes));
}

var _loadNotes = () => {
  try {
    var notes = JSON.parse(fs.readFileSync(data));
  } catch(err) {
    var notes = [];
  }
  return notes;  
}

module.exports = {
  addNote,
  listNotes,
  readNote,
  deleteNote
}