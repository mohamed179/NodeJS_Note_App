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
  builder: {
  	title: {
  		describe: 'Note title',
  		demandOption: true,
  		type: 'string'
  	},
  	body: {
  		describe: 'Note body',
  		demandOption: true,
  		type: 'string'
  	}
  },
  handler: (argv) => {
  	console.log('title: ' + argv.title);
  	console.log('body: ' + argv.body);
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

yargs.parse();