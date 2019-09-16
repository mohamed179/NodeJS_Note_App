const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add new note',
  handler: () => {
  	console.log('Adding the new note!');
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => {
  	console.log('Removing the note!')
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => {
  	console.log('Listing out all notes!');
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note!',
  handler: () => {
  	console.log('Reading the note!');
  }
});

console.log(yargs.argv);