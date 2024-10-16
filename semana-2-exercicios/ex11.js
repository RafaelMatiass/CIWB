const offset = 4;
const secret = 'LIPPSASVPH';
let message = '';

for (let i = 0; i < secret.length; i++) {
  let caracter = secret.charCodeAt(i) - offset;

  if (caracter < 65) {
    caracter = 90 - (65 - caracter - 1); 
  }

  message += String.fromCharCode(caracter);
}

console.log(message);