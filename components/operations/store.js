const { performance } = require('perf_hooks');
const misc = require('../../middelwares/misc');

function addition(number1, number2, type) {
  let data = {};
  let result = 0;
  const inicio = performance.now();  // Start ejecution
  result = number1 + number2;
  const fin = performance.now();  // End ejecution
  data = {
    Operation: type,
    Number1: number1,
    Number2: number2,
    Result: result,
    TimeEjecution: `${(fin - inicio).toFixed(3)}`,
    Timestamp: misc.logConTimestamp('es-CR', 'America/Costa_Rica')
  }
  return Promise.resolve(data);
}

function subtraction(number1, number2, type) {
  let data = {};
  let result = 0;
  const inicio = performance.now();  // Start ejecution
  result = number1 - number2;
  const fin = performance.now();  // End ejecution
  data = {
    Operation: type,
    Number1: number1,
    Number2: number2,
    Result: result,
    TimeEjecution: `${(fin - inicio).toFixed(3)}`,
    Timestamp: misc.logConTimestamp('es-CR', 'America/Costa_Rica')
  }
  return Promise.resolve(data);
}

function multiplication(number1, number2, type) {
  let data = {};
  let result = 0;
  const inicio = performance.now();  // Start ejecution
  result = number1 * number2;
  const fin = performance.now();  // End ejecution
  data = {
    Operation: type,
    Number1: number1,
    Number2: number2,
    Result: result,
    TimeEjecution: `${(fin - inicio).toFixed(3)}`,
    Timestamp: misc.logConTimestamp('es-CR', 'America/Costa_Rica')
  }
  return Promise.resolve(data);
}

function division(number1, number2, type) {
  if (number2 === 0) {
    return Promise.reject(`A division by zero has been found.`);
  } else {
    let data = {};
    let result = 0;
    const inicio = performance.now();  // Start ejecution
    result = number1 / number2;
    const fin = performance.now();  // End ejecution
    data = {
      Operation: type,
      Number1: number1,
      Number2: number2,
      Result: result,
      TimeEjecution: `${(fin - inicio).toFixed(3)}`,
      Timestamp: misc.logConTimestamp('es-CR', 'America/Costa_Rica')
    }
    return Promise.resolve(data);
  }
}

module.exports = {
  Addition: addition,
  Subtraction: subtraction,
  Multiplication: multiplication,
  Division: division
}