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

const nums = [10, 20, 30, 40, 50];
console.log('Arreglo para la funcion getSum:');
console.log(nums);

function getSum() {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  console.log('La suma de los elementos del arreglo es:', sum);
  document.getElementById('arraySumOutput').innerText = `La suma de los elementos del arreglo es: ${sum}`;
}
