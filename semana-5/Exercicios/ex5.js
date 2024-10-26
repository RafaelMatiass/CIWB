let produtos = [
  {
    ID: '1',
    Nome: 'Caneta BIC Cristal 0.7mm',
    Preco: 'R$ 6,60',
    Desconto: '10%',
  },
  {
    ID: '2',
    Nome: 'Caneta Esferográfica Trilux',
    Preco: 'R$ 5,50',
    Desconto: '0',
  },
  {
    ID: '3',
    Nome: 'Lapiseira 0.5mm Pentel',
    Preco: 'R$ 27,90',
    Desconto: '15%',
  },
  {
    ID: '4',
    Nome: 'Grafite Fino 0.5mm HB 2 Faber-Castell',
    Preco: 'R$ 10,90',
    Desconto: '5%',
  },
  {
    ID: '5',
    Nome: 'Pincel quadro branco recarregável',
    Preco: 'R$ 9,80',
    Desconto: '0',
  },
]

let prods = produtos.filter(p => parseInt(p.Preco.replace('R$ ')) < 10);
// let dados = [];
// for (let prod of prods1) {
//   dados.push(prod.Nome);
//   dados.push(prod.Preco);
// }
console.log(prods);

prods2 = produtos.filter(p => p.Desconto == 0)
let dados2 = [];
for (let prod of prods2) {
  dados2.push(prod.Nome);
  dados2.push(prod.Preco);
}
console.log(prods2);