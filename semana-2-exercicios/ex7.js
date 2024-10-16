function contarVogais(palavra) {
    var vogais = "aeiouAEIOU";
    tam = palavra.length;
    var numVogais = 0;

    for (i = 0; i < tam; i++) {
      for (j = 0; j < 10; j++){
        if (vogais[j] == palavra[i]) {
          numVogais++;
        }
      }
    }

  return numVogais;
}

let qtde = contarVogais('Marcelo JAU');
console.log('Vogais:', qtde);