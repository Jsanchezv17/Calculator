const store = require('./store');
// Expresión regular para validar que los datos no contenga letras, ni numeros negativos
const regex = /^(?!.*-)[0-9]+(\.[0-9]+)?$/;

/** 
 * Function that receives three parameters, validates that the data has a valid value and executes different basic operations
 * @param number1 - positive integer
 * @param number2 - positive integer
 * @param typrOperation - basic operation type
 * @return result of the operation
 */
function operations(number1, number2, typrOperation) {
  number1 = typeNumber(number1);
  number2 = typeNumber(number2);
  if (!regex.test(number1)) {
    return Promise.reject(`The number ${number1} is a invalid value.`);
  }
  if (!regex.test(number2)) {
    return Promise.reject(`The number ${number2} is a invalid value.`);
  }

  switch (typrOperation) {
    case 'addition':
      return store.Addition(number1, number2, typrOperation);
    case 'subtraction':
      return store.Subtraction(number1, number2, typrOperation);
    case 'multiplication':
      return store.Multiplication(number1, number2, typrOperation);
    case 'division':
      return store.Division(number1, number2, typrOperation);
    default:
        return Promise.reject(`Operation ${typrOperation} not invalid.`);
  }
}

// Validates the type of numeric value integer or float
function typeNumber(number) {
  if (!isNaN(number)) {  // Checks if the value is a valid number
    if (/^-?\d+$/.test(number)) {  // Check if it is an integer
      return parseInt(number, 10);  // Use parseInt for integers
    } else if (/^-?\d+\.\d+$/.test(number)) {  // Check if it is a decimal number
      return parseFloat(number);  // Use parseFloat for decimals
    }
  }
  return null;  // Returns null if not a valid number
}

module.exports = {
  operations,
}