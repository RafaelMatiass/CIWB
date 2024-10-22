function e_vogal(palavra) {
  var vogais = "aeiouAEIOU";
  var tem = false

  for (i = 0; i < 10; i++) {
    if (vogais[i] == palavra) {
      tem = true;
    }
  }

  return tem;
}

console.log(e_vogal('i'));