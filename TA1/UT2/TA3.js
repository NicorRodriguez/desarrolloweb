function repeatString() {
  const text = document.getElementById('stringInput').value;
  const repetitions = document.getElementById('repeatInput').value;
  let output = '';
  for (let i = 0; i < repetitions; i++) {
    output += `<p>${text}</p>`;
  }
  document.getElementById('stringOutput').innerHTML = output;
}

function reverseString() {
  const text = document.getElementById('stringInput').value;
  const reversed = text.split('').reverse().join('');
  document.getElementById('stringOutput').innerHTML = `<p>${reversed}</p>`;
}

const array = ['elemento1', 'elemento2', 'elemento3', 'elemento4'];
console.log('Elementos disponibles para eliminar: ');
console.log(array);

function removeFromArray() {
  const item = document.getElementById('itemToRemove').value;
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
  console.log('Arreglo resultante:', array);
  document.getElementById('arrayOutput').innerText = `Arreglo resultante: ${array.join(', ')}`;
}

function getTheTitles() {
  const books = [
    { title: 'El Principito', author: 'Antoine de Saint-Exupéry' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Cien Años de Soledad', author: 'Gabriel García Márquez' },
  ];
  const titles = books.map((book) => book.title);
  let output = '';
  titles.forEach((title) => {
    output += `<h1>${title}</h1>`;
  });
  document.getElementById('titlesOutput').innerHTML = output;
}

const numsOdds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Array de numeros para la funcion getOdds: ');
console.log(numsOdds);

function getOdds() {
  const odds = numsOdds.filter((num) => num % 2 !== 0);
  let output = '';
  odds.forEach((num) => {
    output += `<span>${num}</span> `;
  });
  document.getElementById('oddsOutput').innerHTML = output;
}

const numsDuplicate = [1, 2, 3, 2, 3, 5, 6, 7, 8, 3];
console.log('Array de numeros para la funcion duplicates: ');
console.log(numsDuplicate);

function duplicates() {
  const duplicates = numsDuplicate.reduce((acc, num, index, arr) => {
    if (arr.indexOf(num) !== index && !acc.includes(num)) {
      acc.push(num);
    }
    return acc;
  }, []);

  let output = '';
  duplicates.forEach((dup) => {
    const count = numsDuplicate.filter((num) => num === dup).length;
    output += `<h4>Valor Duplicado: ${dup}</h4><p>Veces Duplicado: ${count}</p>`;
  });
  document.getElementById('duplicatesOutput').innerHTML = output;
}

function sumAll() {
  const start = parseInt(document.getElementById('startRange').value);
  const end = parseInt(document.getElementById('endRange').value);
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  document.getElementById('rangeSumOutput').innerText = `La suma de los números entre ${start} y ${end} es: ${sum}`;
}

function convertToCelsius() {
  const temp = parseFloat(document.getElementById('tempInput').value);
  const celsius = (((temp - 32) * 5) / 9).toFixed(1);
  document.getElementById('tempOutput').innerText = `${temp}°F es equivalente a ${celsius}°C`;
}

function convertToFahrenheit() {
  const temp = parseFloat(document.getElementById('tempInput').value);
  const fahrenheit = ((temp * 9) / 5 + 32).toFixed(1);
  document.getElementById('tempOutput').innerText = `${temp}°C es equivalente a ${fahrenheit}°F`;
}

function leapYears() {
  const year = parseInt(document.getElementById('yearInput').value);
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  document.getElementById('leapYearOutput').innerText = isLeap ? `${year} es un año bisiesto` : `${year} no es un año bisiesto`;
}

const nums2 = [10, 20, 30, 40, 50];
console.log('Arreglo para la funcion getSum:');
console.log(nums2);

function getSum() {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  console.log('La suma de los elementos del arreglo es:', sum);
  document.getElementById('arraySumOutput').innerText = `La suma de los elementos del arreglo es: ${sum}`;
}

function generatePassword() {
  const length = parseInt(document.getElementById('passwordLength').value);
  if (length < 8) {
    alert('La longitud mínima de la contraseña debe ser de 8 caracteres.');
    return;
  }
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  document.getElementById('passwordOutput').innerText = `Contraseña generada: ${password}`;
}

const people = [
  { name: 'Juan', yearOfBirth: 1975 },
  { name: 'María', yearOfBirth: 1980 },
  { name: 'Pedro', yearOfBirth: 1960 },
  { name: 'Ana', yearOfBirth: 1990 },
];

console.log('Arreglo de personas:');
console.log(people);

function findTheOldest() {
  const currentYear = new Date().getFullYear();
  let oldestPerson = people[0];
  let maxAge = currentYear - people[0].yearOfBirth;

  for (let i = 1; i < people.length; i++) {
    const age = currentYear - people[i].yearOfBirth;
    if (age > maxAge) {
      oldestPerson = people[i];
      maxAge = age;
    }
  }
  document.getElementById('oldestPersonOutput').innerText = `La persona más vieja es ${oldestPerson.name}, con ${maxAge} años.`;
}

function runCompleteProgram() {
  repeatString();
  removeFromArray();
  getTheTitles();
  getOdds();
  duplicates();
  sumAll();
  convertToCelsius();
  leapYears();
  generatePassword();
  findTheOldest();

  const output = `
        <p>Contraseña generada y persona más vieja se han calculado.</p>
    `;
  document.getElementById('completeProgramOutput').innerHTML = output;
}
