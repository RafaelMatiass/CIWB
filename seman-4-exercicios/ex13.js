let palavras = ['ovo', 'cebola', 'sabão'];


let numCaracteres = palavras
  .filter(palavra => {
    let tem_vogal_a = false;
    
    if (palavra.indexOf('a') !== -1) {
      tem_vogal_a = true; 
    }
    return tem_vogal_a; 
  })
  .map(palavra => palavra.length);  

console.log(numCaracteres); 
