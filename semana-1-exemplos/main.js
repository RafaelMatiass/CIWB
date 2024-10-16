// var nome = prompt('Seu nome: ');
// var idade = parseInt(prompt('Sua idade: '));
// var proxima = idade + 1;
// alert('Olá, ' + nome + '! Você terá ' + proxima + ' anos no ano que vem');

function escopoVar() {
   if (2 > 1) {
      let x = 10;
      console.log('[Dentro do if]', x);
   }

   console.log('[Fora do if]', x);
}

escopoVar();