const prompt = require('prompt-sync')({sigint: true});
const Field = require('./classField.js'); // Assuming Field.js is in the same directory

// // Function to prompt the user for input and move accordingly
// function move() {
//     const direction = prompt('Which direction would you like to move? (u/d/l/r): ');
//     switch (direction.toLowerCase()) {
//       case 'u':
//         // Move up
//         // Implement your logic here
//         break;
//       case 'd':
//         // Move down
//         // Implement your logic here
//         break;
//       case 'l':
//         // Move left
//         // Implement your logic here
//         break;
//       case 'r':
//         // Move right
//         // Implement your logic here
//         break;
//       default:
//         console.log('Invalid direction! Please enter u (up), d (down), l (left), or r (right).');
//         break;
//     }
//   }

// Example usage/testing
const height = 5;
const width = 5;
const holes = 4;
const generatedField = Field.generateField(height, width, holes);
const myField = new Field(generatedField);
  
myField.print();

// // Call the move function to prompt the user for input and move accordingly
// move();