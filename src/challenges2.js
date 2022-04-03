// Desafio 10
function techList(array, name) {
  let response = [];
  for (let index = 0; index < array.length; index += 1) {
    response.push({
      name,
      tech: array[index],
    });
  }
  return response.sort(function (a, b) {
    if (a.tech < b.tech) {
      return -1;
    }
    if (a.tech > b.tech) {
      return 1;
    }
    return 0;
  });
}
// Desafio 11
function validLessZeroAndBiggerThenNine(array) {
  let validateArray = array;
  for (let index = 0; index < validateArray.length; index += 1) {
    const element = validateArray[index];
    if (element < Number('0') || element >= Number('9')) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return validateArray;
}

function validateLengthNumberAndNumberRepeated(array) {
  let validateArray = array;
  for (let index = 0; index < validateArray.length; index += 1) {
    const element = validateArray[index];
    if (element > Number('11')) return 'Array com tamanho incorreto';
    if (new Set(array).size !== array.length) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return validateArray;
}

function generatePhoneNumber(array) {
  const validations = validateLengthNumberAndNumberRepeated(array)
    || validLessZeroAndBiggerThenNine(array);
  if (validations) return validations;
  let phoneNumber = '';
  for (let index = 0; index < array.length; index += 1) {
    phoneNumber += array[index];
  }
  return phoneNumber;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
