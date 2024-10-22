function definir_segundos(hr, min, seg){
  horas = hr * 3600;
  minutos = min * 60;

  segundos = horas + minutos + seg;

  return segundos;
}

console.log(definir_segundos(2, 3, 10));