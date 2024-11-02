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

let totalSemDesconto = produtos.reduce((total, p) => total + parseFloat(p.Preco.replace('R$', '').replace(',', '.')), 0);
console.log(totalSemDesconto);

let totalDesconto = 0;
produtos.forEach(p => {
  let preco = parseFloat(p.Preco.replace('R$', '').replace(',', '.'));
  let desconto = p.Desconto === '0' ? 0 : (parseFloat(p.Desconto.replace('%', '')) / 100) * preco;
  totalDesconto += desconto;
});

let totalComDesconto = totalSemDesconto - totalDesconto;
console.log(totalComDesconto);
