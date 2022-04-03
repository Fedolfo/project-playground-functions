// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// Desafio 4
function concatName(phrase) {
  let concatenacao = `${phrase[phrase.length - 1]}, ${phrase[0]}`;
  return concatenacao;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitory = 3 * wins;
  let empate = 1 * ties;
  let result = vitory + empate;
  return result;
}

// Desafio 6
// Bianca Caetano me ajudou!
function biggerNumber(array) {
  let maiorNumero = array[0];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] >= maiorNumero) {
      maiorNumero = array[i];
    }
  }
  return maiorNumero;
}

function highestCount(array1) {
  let maiorNumero = biggerNumber(array1);
  let counter = 0;

  for (let j = 0; j < array1.length; j += 1) {
    if (array1[j] === maiorNumero) {
      counter += 1;
    }
  }
  return counter;
}
console.log(highestCount([1, 2, 3, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gatoA = Math.abs(cat1 - mouse);
  let gatoB = Math.abs(cat2 - mouse);

  if (gatoA < gatoB) {
    return 'cat1';
  } if (gatoB < gatoA) {
    return 'cat2';
  } if (gatoA === gatoB) {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8

function recoverStringFizzBuzz(s) {
  if (s % 3 === 0) {
    return 'fizz';
  }
  if (s % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(phraseArray) {
  let response = [];
  for (let index = 0; index < phraseArray.length; index += 1) {
    if (phraseArray[index] % 3 === 0 && phraseArray[index] % 5 === 0) {
      response.push('fizzBuzz');
    } else {
      response.push(recoverStringFizzBuzz(phraseArray[index]));
    }
  }
  return response;
}

// Desafio 9

function encode(name) {
  let saida = '';
  let obje = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let i = 0; i < name.length; i += 1) {
    if (obje[name[i]]) {
      saida += obje[name[i]];
    } else {
      saida += name[i];
    }
  }
  return saida;
}

function decode(string) {
  let saida = '';
  let obje = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (const chaveValor of string) {
    if (obje[chaveValor]) { /* verifica se existe */
      saida += obje[chaveValor]; /* adiciona o valor da chave */
    } else {
      saida += chaveValor; /* letra */
    }
  }

  return saida;
}
module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
