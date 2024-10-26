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

let prods_preco = produtos.filter(p => parseFloat(p.Preco.replace('R$', '').replace(',', '.')) < 10);

let dados_preco = [];
for (let prod of prods_preco) {
  dados_preco.push(prod.Nome);
  dados_preco.push(prod.Preco);
}

console.log(dados_preco);

prods_nome = produtos.filter(p => p.Desconto == 0)
let dados_nome = [];
for (let prod of prods_nome) {
  dados_nome.push(prod.Nome);
  dados_nome.push(prod.Preco);
}
console.log(dados_nome);