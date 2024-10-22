function definir_segundos(hr, min, seg){
  horas = hr * 3600;
  minutos = min * 60;

  segundos = horas + minutos + seg;

  return segundos;
}

function calcularTempoDecorrido(t1, t2) {
  let [h1, m1, s1] = t1.split(':').map(Number);
  let [h2, m2, s2] = t2.split(':').map(Number);

  let segT1 = definir_segundos(h1, m1, s1);
  let segT2 = definir_segundos(h2, m2, s2);

  return Math.abs(segT2 - segT1);
}

console.log(calcularTempoDecorrido('13:30:00', '13:31:00'));