let cliente = {
  nome: 'João',
  email: 'joao@zipmail.com',
  isAdmin: true,


};

let produtos = [
  {
    nome: 'Sabão',
    preco: 2.40
  },
  {
    nome: 'Arroz',
    preco: 40.00
  },
  {
    nome: 'Café',
    preco: 20.00
  },
  {
    nome: 'Óleo',
    preco: 8.60
  },
  {
    nome: 'Feijão',
    preco: 12.50
  },
  {
    nome: 'Vinagre',
    preco: 9.90
  },
]

// 1 forma
let nomes = [];
for (let prod of produtos) {
  nomes.push(prod.nome);
}
console.log(nomes);

// 2 forma
let precos = produtos.map(p => p.preco);
console.log(precos);

// 1 forma
let caros = [];
for (let prod of produtos) {
  if (prod.preco > 10) {
    caros.push(prod);
  }
}
console.log(caros);

// 2 forma
let caross = produtos.filter(p => p.preco > 20);
console.log(caross);