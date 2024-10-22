function potencia(a, b){
  var retorno;

  if(b > 0){
    retorno = a ** b;
  } else {
    retorno = "Valor negativo"
  }

  return retorno;
}

console.log(potencia(3,2))