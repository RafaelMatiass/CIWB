function contarPares(sapatos) {
  let pares = {};
  let sapatosArray = sapatos.split(' ');

  for (let i = 0; i < sapatosArray.length; i += 2) {
    let tamanho = sapatosArray[i];
    let lado = sapatosArray[i + 1];

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

let entrada = '38 E 42 E 39 E 40 D 38 D 40 D 37 E 44 D 37 D 42 D 41 E 44 E 37 E 42 D 42 E';
console.log(contarPares(entrada));
