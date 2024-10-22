let frutas = ['abacaxi', 'banana', 'maçã', 'laranja', 'abacate', 'limão', 'tamarindo'];

let abrev = frutas.map(fruta => fruta.substring(0, 3).toUpperCase());

console.log(abrev);