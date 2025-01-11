async function buscar(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  let response = await fetch(url);
  if (response.ok) {
    let data =  await response.json();
    console.log(data['logradouro'] + ' -', data['bairro']);
  }
}

function main() {
  let btn = document.querySelector('#carregar');
  btn.addEventListener('click', function() {
    let txtCep = document.querySelector('#cep');
    let cep = txtCep.value;
    buscar(cep);
  })
}
main();