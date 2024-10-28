const alunos = [
  { idade: 12, altura: 1.50 },
  { idade: 14, altura: 1.60 },
  { idade: 13, altura: 1.55 },
  { idade: 15, altura: 1.80 },
  { idade: 14, altura: 1.65 },
  { idade: 16, altura: 1.70 },
  { idade: 12, altura: 1.45 },
  { idade: 13, altura: 1.50 },
  { idade: 17, altura: 1.75 },
  { idade: 14, altura: 1.60 },
  { idade: 12, altura: 1.55 },
  { idade: 15, altura: 1.80 },
  { idade: 16, altura: 1.70 },
  { idade: 14, altura: 2.0 },
  { idade: 13, altura: 1.2 },
  { idade: 17, altura: 1.9 },
  { idade: 16, altura: 1.2 },
  { idade: 14, altura: 2.0 },
  { idade: 15, altura: 1.7 },
  { idade: 16, altura: 1.5 },
  { idade: 12, altura: 1.2 },
  { idade: 14, altura: 1.7 },
  { idade: 13, altura: 1.5 },
  { idade: 14, altura: 1.8 },
  { idade: 15, altura: 1.6 },
  { idade: 16, altura: 1.4 },
  { idade: 12, altura: 1.5 },
  { idade: 13, altura: 1.6 },
  { idade: 14, altura: 1.7 },
  { idade: 16, altura: 1.8 }
];

function contarAlunos(alunos) {
  let somaAlt = 0;
  for (let i = 0; i < alunos.length; i++) {
    somaAlt += alunos[i].altura;
  }

  let mediaAlt = somaAlt / alunos.length;

  let cont = 0;
  for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].idade > 13 && alunos[i].altura < mediaAlt) {
      cont++;
    }
  }

  return cont;
}

console.log(contarAlunos(alunos));
