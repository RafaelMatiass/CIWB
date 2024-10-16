const xs = [5, 3, 6, 1, 2, 4];
var menor = xs[1];

for (let i=1; i < 6; i++) {
    if(xs[i] < menor){
        menor = xs[i];
    }
}
console.log(menor);