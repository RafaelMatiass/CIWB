const idades = [12, 14, 13, 15, 14, 16, 12, 13, 17, 14, 12, 15, 16, 14, 13, 17, 16, 14, 15, 16, 12, 14, 13, 14, 15, 16, 12, 13, 14, 16];
const alturas = [1.50, 1.60, 1.55, 1.80, 1.65, 1.70, 1.45, 1.50, 1.75, 1.60, 1.55, 1.80, 1.70, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1.70];

function contarAlunos(idades, alturas) {

  let somaAlt = 0;
    for (let i = 0; i < alturas.length; i++) {
      somaAlt += alturas[i];
    }
  
  let mediaAlt = somaAlt / alturas.length;

  let cont = 0;
  for (let i = 0; i < idades.length; i++) {
    if (idades[i] > 13 && alturas[i] < mediaAlt) {
      cont++;
    }
  }

  return cont;
}

console.log(contarAlunos(idades, alturas));
