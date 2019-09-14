const fs = require('fs');

fs.writeFileSync('notes.txt', 'This is my first note');

fs.appendFileSync('notes.txt', ', and this is my second note.');