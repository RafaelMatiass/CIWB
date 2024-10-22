function multiplo(a, b){
  ehMultiplo = false;

  if(a % b == 0 || b % a == 0){
    ehMultiplo = true;
  }

  return ehMultiplo;
}

console.log(multiplo(35,7))