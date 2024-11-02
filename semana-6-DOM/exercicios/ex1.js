const data = {
  "cep": "14802-000",
  "logradouro": "Avenida Padre Francisco Sales Colturato",
  "complemento": "lado par",
  "unidade": "",
  "bairro": "Centro",
  "localidade": "Araraquara",
  "uf": "SP",
  "estado": "São Paulo",
  "regiao": "Sudeste",
  "ibge": "3503208",
  "gia": "1818",
  "ddd": "16",
  "siafi": "6163"
};

function preencher() {
  let logradouro = document.querySelector('#logradouro');
  data_log = data.logradouro;
  logradouro.value = data_log;

  let bairro = document.querySelector('#bairro');
  data_bairro = data.bairro;
  bairro.value = data_bairro;

  let cidade = document.querySelector('#cidade');
  data_cidade = data.localidade;
  cidade.value = data_cidade;

  let estado = document.querySelector('#estado');
  data_estado = data.estado;
  estado.value = data_estado;
}

preencher();