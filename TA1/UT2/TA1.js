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

function getOdds() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const odds = nums.filter((num) => num % 2 !== 0);
  let output = '';
  odds.forEach((num) => {
    output += `<span>${num}</span> `;
  });
  document.getElementById('oddsOutput').innerHTML = output;
}

const nums = [1, 2, 3, 2, 3, 5, 6, 7, 8, 3];
console.log('Array de numeros para la funcion duplicates: ');
console.log(nums);

function duplicates() {
  const duplicates = nums.reduce((acc, num, index, arr) => {
    if (arr.indexOf(num) !== index && !acc.includes(num)) {
      acc.push(num);
    }
    return acc;
  }, []);

  let output = '';
  duplicates.forEach((dup) => {
    const count = nums.filter((num) => num === dup).length;
    output += `<h4>Valor Duplicado: ${dup}</h4><p>Veces Duplicado: ${count}</p>`;
  });
  document.getElementById('duplicatesOutput').innerHTML = output;
}
