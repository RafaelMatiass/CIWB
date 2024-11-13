var img = document.createElement('img');

function carregarImg() {
  let opcao = select.value;
  img.src = opcao + '.png';
  img.alt = opcao;
  img.height = 200;
  let div = document.querySelector('#main');
  div.appendChild(img);
}

var select = document.querySelector("#marca");
select.addEventListener('change', carregarImg);