// Desafio 10
function techList(array, name) {
  if (array.length === 0) return 'Vazio!';
  let response = [];
  for (let index = 0; index < array.length; index += 1) {
    response.push({
      name,
      tech: array[index],
    });
  }
  return response.sort((a, b) => {
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
  });
}

// Desafio 11
function numberRepeated(array, number) {
  let repeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    if (element === number) {
      repeat += 1;
    }
  }
  return repeat;
}

function validDoNotNumberRepeated(array) {
  for (let index = 0; index < array.length; index += 1) {
    let validate = numberRepeated(array, array[index]);
    if (validate >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return array;
}

function validLessZeroAndBiggerThenNine(array) {
  let validateArray = array;
  for (let index = 0; index < validateArray.length; index += 1) {
    const element = validateArray[index];
    if ((element < 0) || (element > 9)) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return validDoNotNumberRepeated(validateArray);
}

function generatePhoneNumber(a) {
  if (a.length !== 11) return 'Array com tamanho incorreto.';

  const validations = validLessZeroAndBiggerThenNine(a);

  if (typeof validations === 'string') return validations;

  return `(${a[0]}${a[1]}) ${a[2]}${a[3]}${a[4]}${a[5]}${a[6]}-${a[7]}${a[8]}${a[9]}${a[10]}`;
}
console.log(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0]));

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
