const fs    = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');
const argv  = yargs.argv;

var command = process.argv[2];
var title   = argv.title;
var body    = argv.body;
var number  = argv._[1];

switch(command) {
  case 'add':
    notes.addNote(title, body);
  break

  case 'read':
    notes.readNote(number);
  break;

  case 'delete':
    notes.deleteNote(number);
  break

  case 'list':
    notes.listNotes();
  break;

  default:
    console.log("\nCommand not recognized.\n==========\nValid commands are:\n  notes list\n  notes add --title=(title) --body=(body)\n  notes read (number)\n  notes delete (number)\n");
  break;
}
