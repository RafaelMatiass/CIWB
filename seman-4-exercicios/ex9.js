const word = 'interestelar';

function e_vogal(letra) {
  const vogais = "aeiouAEIOU";
  
  for (let i = 0; i < vogais.length; i++) {
    if (vogais[i] === letra) {
      return true;
    }
  }
  
  return false;
}

const numVogais = Array.from(word).filter(e_vogal).length;

console.log(numVogais); 
