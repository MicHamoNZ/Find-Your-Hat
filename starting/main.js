const prompt = require('prompt-sync')({sigint: true});
const Field = require('./classField.js');

const height = Number(prompt('What height do you wnat your field? (A number between 5 & 10): '));
const width = Number(prompt('What width do you wnat your field? (A number between 5 & 10): '));
const holes = Math.floor(height * width * 0.33);
const generatedField = Field.generateField(height, width, holes);
const myField = new Field(generatedField);
  
// Function to prompt the user for input and move until the hat is found
function moveUntilHatFound() {
    let currentX = 0;
    let currentY = 0;
  
    while (true) {
      // Print the current state of the field
      myField.print();
  
      // Prompt the user for input
      const direction = prompt('Which direction would you like to move? (u/d/l/r): ');
  
      // Move the player character accordingly
      switch (direction.toLowerCase()) {
        case 'u':
          currentY--;
          break;
        case 'd':
          currentY++;
          break;
        case 'l':
          currentX--;
          break;
        case 'r':
          currentX++;
          break;
        default:
          console.log('Invalid direction! Please enter u (up), d (down), l (left), or r (right).');
          continue;
      }
  
      // Check if the player has fallen into a hole or moved out of bounds
      if (!myField.isValidPosition(currentX, currentY) || myField.getValueAtPosition(currentX, currentY) === '0') {
        console.log('Game over! You fell into a hole or moved out of bounds.');
        break;
      }
  
      // Check if the player has found the hat
      if (myField.getValueAtPosition(currentX, currentY) === '^') {
        console.log('Congratulations! You found the hat!');
        break;
      }
  
      // Update the player character position in the field
      myField.setValueAtPosition(currentX, currentY, '*');
    }
  }
  
  // Call the moveUntilHatFound function to start the game
  moveUntilHatFound();