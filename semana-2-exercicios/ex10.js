function corrigirTexto(texto) {

 let palavras = texto.split(' ');

  const corrigirPalavra = (palavra) => {
    if (palavra.length > 2) {
        
      let primeiraSilaba = palavra.slice(0, 2);  
      if (palavra.startsWith(primeiraSilaba + primeiraSilaba)) {
        return palavra.slice(2);
      }
    }
    return palavra;
  };
 
  let textoCorrigido = palavras.map(corrigirPalavra).join(' ');
  return textoCorrigido;

}

const texto1 = 'Juca comprou fafarinha na memercearia e papagou 4 reais o quilo. A mamae de Juca pediu para ele comprar mamais 2 quilos.';
const texto2 = 'O papassarinho vovoou para bem longe.';

console.log(corrigirTexto(texto1));
console.log(corrigirTexto(texto2));