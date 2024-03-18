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

  // Static method to generate a randomized field with a hat and holes
  static generateField(height, width, holes) {

    const hat = '^';
    const hole = 'O';
    const fieldCharacter = '░';
    const pathCharacter = '*';

    const fieldArray = new Array(height).fill(null).map(() => new Array(width).fill(fieldCharacter));

    // Place the pathCharacter in starting postion
    fieldArray[0][0] = pathCharacter

    // Randomly place the hat
    const hatX = Math.floor(Math.random() * width);
    const hatY = Math.floor(Math.random() * height);
    fieldArray[hatY][hatX] = hat;

    // Randomly place holes
    for (let i = 0; i < holes; i++) {
      let holeX = Math.floor(Math.random() * width);
      let holeY = Math.floor(Math.random() * height);
      // Ensure the hole is not placed on the hat or start
      while (fieldArray[holeY][holeX] === hat && fieldArray[holeY][holex] === pathCharacter) {
        holeX = Math.floor(Math.random() * width);
        holeY = Math.floor(Math.random() * height);
      }
      fieldArray[holeY][holeX] = hole;
    }

    return fieldArray;
  }
}

module.exports = Field;