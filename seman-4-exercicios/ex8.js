function impares(value) {
  return value % 2 == 0;
}

const filtro = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(impares);
console.log(filtro);