class Field {
    constructor(fieldArray) {
      this.fieldArray = fieldArray;
    }

    // Method to get the value at a specific position in the field
    getValueAtPosition(x, y) {
      if (this.isValidPosition(x, y)) {
        return this.fieldArray[y][x];
      } else {
        console.error('Invalid position provided.');
        return null;
      }
    }
  
    // Method to set the value at a specific position in the field
    setValueAtPosition(x, y, value) {
      if (this.isValidPosition(x, y)) {
        this.fieldArray[y][x] = value;
      } else {
        console.error('Invalid position provided.');
      }
    }
  
    // Method to check if a position is valid within the field
    isValidPosition(x, y) {
      return x >= 0 && x < this.fieldArray[0].length && y >= 0 && y < this.fieldArray.length;
    }
  
    // Method to get the size of the field
    getSize() {
      return {
        width: this.fieldArray[0].length,
        height: this.fieldArray.length
      };
    }
  
    // Method to print the current state of the field
    print() {
      for (let row of this.fieldArray) {
        console.log(row.join(' '));
      }
    }
  }

module.exports = Field;

// // Example usage:
// const myFieldArray = [
//     [0, 1, 0],
//     [1, 1, 1],
//     [0, 1, 0]
//   ];
  
// const myField = new Field(myFieldArray);

// myField.print();