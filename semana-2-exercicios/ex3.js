const vetor = [25, 27, 32, 7 , 6, 8];
vetor.sort();
console.log(vetor);

if(vetor.length % 2 == 0){
    var soma = 0;
    for (let i = vetor.length / 2 - 1; i < (vetor.length / 2 + 1); i++) {
        soma = soma + vetor[i];
    }
    mediana = soma / 2;
} else {
    tam = Math.floor(vetor.length / 2);
    mediana = vetor[tam];

}

console.log('A mediana eh: ' + mediana);