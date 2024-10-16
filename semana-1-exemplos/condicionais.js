let x = 10;
let y = 5;

if (x > 20) {
  console.log('maior');
} else {
  console.log('menor');
}

if (y < 10) {
  console.log('y menor do que 10');
} else if (y < 5) {
  console.log('y menor do que 5');
} else {
  console.log('y: ', y);
}

let res = x > 8 ? 10 : 100;
console.log('res:', res);