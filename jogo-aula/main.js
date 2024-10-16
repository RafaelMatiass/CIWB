var acertou = false;
function Adivinhe(){
  var numero_entrada = parseInt(prompt('Digite um número de 1 a 100: '));
  let num = 47;
  if (numero_entrada < 0 || numero_entrada > 100){
    alert("Número inválido!");
  } else {
    if (numero_entrada == 47){
      alert("Acertou!");
      acertou = true;
    } else if (numero_entrada < num){
      alert("É menor");
    } else {
      alert("É maior");
    }
  }
  
}
while(!acertou){
  Adivinhe();
}