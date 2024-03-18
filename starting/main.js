const prompt = require('prompt-sync')({sigint: true});
const Field = require('./classField.js'); // Assuming Field.js is in the same directory

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// Define your field array here or load it from somewhere

// Example usage:
const myFieldArray = [
    [fieldCharacter, fieldCharacter, fieldCharacter],
    [fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, pathCharacter, hat]
  ];
  
  const myField = new Field(myFieldArray);
  
  myField.print();