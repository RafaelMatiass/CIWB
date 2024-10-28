function contarPares(sapatos) {
  let pares = {};

  for (let i = 0; i < sapatos.length; i++) {
    let tamanho = sapatos[i].tamanho;
    let lado = sapatos[i].lado;

    if (!pares[tamanho]) {
      pares[tamanho] = { E: 0, D: 0 };
    }

    pares[tamanho][lado]++;
  }

  let resultado = [];

  for (let tamanho in pares) {
    let numPares = Math.min(pares[tamanho].E, pares[tamanho].D);
    if (numPares > 0) {
      resultado.push(`${tamanho} ${numPares}`);
    }
  }

  resultado.sort((a, b) => parseInt(a.split(' ')[0]) - parseInt(b.split(' ')[0]));

  return resultado.join('\n');
}

let entrada = [
  { tamanho: 38, lado: 'E' },
  { tamanho: 42, lado: 'E' },
  { tamanho: 39, lado: 'E' },
  { tamanho: 40, lado: 'D' },
  { tamanho: 38, lado: 'D' },
  { tamanho: 40, lado: 'D' },
  { tamanho: 37, lado: 'E' },
  { tamanho: 44, lado: 'D' },
  { tamanho: 37, lado: 'D' },
  { tamanho: 42, lado: 'D' },
  { tamanho: 41, lado: 'E' },
  { tamanho: 44, lado: 'E' },
  { tamanho: 37, lado: 'E' },
  { tamanho: 42, lado: 'D' },
  { tamanho: 42, lado: 'E' }
];

console.log(contarPares(entrada));
