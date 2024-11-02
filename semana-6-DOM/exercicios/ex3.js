const response = `[
 {"id": 1, "nome": "Chai", "preco": 18.0000, "estoque": 39},
 {"id": 2, "nome": "Chang", "preco": 19.0000, "estoque": 17},
 {"id": 3, "nome": "Aniseed Syrup", "preco": 10.0000, "estoque": 13},
 {"id": 4, "nome": "Chef Anton's Cajun Seasoning", "preco": 22.0000, "estoque": 53},
 {"id": 5, "nome": "Chef Anton's Gumbo Mix", "preco": 21.3500, "estoque": 0},
 {"id": 6, "nome": "Grandma's Boysenberry Spread", "preco": 25.0000, "estoque": 120},
 {"id": 7, "nome": "Uncle Bob's Organic Dried Pears", "preco": 30.0000, "estoque": 15},
 {"id": 8, "nome": "Northwoods Cranberry Sauce", "preco": 40.0000, "estoque": 6},
 {"id": 9, "nome": "Mishi Kobe Niku", "preco": 97.0000, "estoque": 29},
 {"id": 10, "nome": "Ikura", "preco": 31.0000, "estoque": 31}
]`;

const objeto = JSON.parse(response);
// console.log(objeto);

function preencherTabela() {
  const trPai = document.getElementById('tabela'); 

  for(let i = 0; i < objeto.length; i++) {
    let tr = document.createElement('tr');
    tr.id = `produto-${objeto[i].id}`;

    let tdId = document.createElement('td');
    let tdNome = document.createElement('td');
    let tdPreco = document.createElement('td');

    tdId.textContent = objeto[i].id;
    tdNome.textContent = objeto[i].nome;
    tdPreco.textContent = objeto[i].preco;

    tr.appendChild(tdId);
    tr.appendChild(tdNome);
    tr.appendChild(tdPreco);

    trPai.appendChild(tr);
  }  
}

function removerLinha(id) {
  const linha = document.getElementById(`produto-${id}`); 
  // console.log(linha);

  if (linha) {
    linha.parentElement.removeChild(linha); 
    console.log("Linha removida.");
  } else {
    console.log("Linha não encontrada.");
  }
}

preencherTabela();
removerLinha("2");
