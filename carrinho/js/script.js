const conteudoTable = document.querySelector("#tabela-produtos");

document.addEventListener("DOMContentLoaded", carregarCarrinho);

function carregarCarrinho() {
  let conteudoCarrinho = localStorage.getItem("conteudoCarrinho");

  if (!conteudoCarrinho || conteudoCarrinho === "") {
    conteudoTable.innerHTML = "<p>Carrinho vazio</p>";
  } else {
    conteudoTable.innerHTML = conteudoCarrinho;
  }

  botoesRemover();
}

let btnAdicionar = document.querySelectorAll(".botao-add");
btnAdicionar.forEach(btn => btn.addEventListener("click", adicionarCarrinho));

function adicionarCarrinho(e) {
  let li = e.target.closest("li");
  let produtoNome = li.querySelector("h3").textContent;
  let produtoPreco = li.querySelector("p").textContent;

  if (conteudoTable.innerHTML === "<p>Carrinho vazio</p>") {
    conteudoTable.innerHTML = "";
    gerarTabela();
  }

  let tbody = conteudoTable.querySelector("tbody");
  let produtoExistente = tbody.querySelector(`tr[data-nome="${produtoNome}"]`);

  if (produtoExistente) {
    let qtdInput = produtoExistente.querySelector("td:nth-child(3) input");
    let novaQuantidade = parseInt(qtdInput.value, 10) + 1;

    qtdInput.value = Math.min(novaQuantidade, 99);
  } else {
    let tr = document.createElement("tr");
    tr.setAttribute("data-nome", produtoNome);
    tr.innerHTML = `
      <td>${produtoNome}</td>
      <td>${produtoPreco}</td>
      <td><input type="number" value="1" step="1" min="1" max="99"></td>
      <td><button class="btn-remover">Remover</button></td>
    `;
    tbody.appendChild(tr);
  }

  botoesRemover();
  calcularTotal();
  localStorage.setItem("conteudoCarrinho", conteudoTable.innerHTML);
}

function botoesRemover() {
  document.querySelectorAll(".btn-remover").forEach(btn => {
    btn.addEventListener("click", remover);
  });

  let esvaziarCarrinhoBtn = document.querySelector("#esvaziar_carrinho");
  if (esvaziarCarrinhoBtn) {
    esvaziarCarrinhoBtn.addEventListener("click", esvaziarCarrinho);
  }

  document.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", calcularTotal);
  });
}

function gerarTabela() {
  let carrinhoTable = document.createElement("table");
  conteudoTable.appendChild(carrinhoTable);

  let thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>Produto</th>
      <th>Preço</th>
      <th>Quantidade</th>
      <th>Remover</th>
    </tr>
  `;
  carrinhoTable.appendChild(thead);

  let tbody = document.createElement("tbody");
  carrinhoTable.appendChild(tbody);

  let tfoot = document.createElement("tfoot");
  tfoot.innerHTML = `
    <tr>
      <td colspan="2">Subtotal:</td>
      <td colspan="2">R$ 0,00</td>
    </tr>
  `;
  carrinhoTable.appendChild(tfoot);

  let esvaziarCarrinho = document.createElement("button");
  esvaziarCarrinho.textContent = "Esvaziar carrinho";
  esvaziarCarrinho.id = "esvaziar_carrinho";
  conteudoTable.appendChild(esvaziarCarrinho);
}

function calcularTotal() {
  let tbody = conteudoTable.querySelector("tbody");
  let items = tbody.querySelectorAll("tr");
  let tfoot = conteudoTable.querySelector("tfoot");

  let total = 0;
  let totalItens = 0;

  items.forEach(item => {
    let price = parseFloat(item.querySelector("td:nth-child(2)").textContent.replace("R$", "").replace(",", "."));
    let quantity = parseInt(item.querySelector("td:nth-child(3) input").value, 10);
    total += price * quantity;
    totalItens += quantity;
  });

  tfoot.querySelector("td:nth-child(2)").textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
  localStorage.setItem("conteudoCarrinho", conteudoTable.innerHTML);
}

function remover(e) {
  let conteudoCarrinho = document.querySelector("#tabela-produtos");
  let btnRemover = e.target.closest(".btn-remover");
  let td = btnRemover.parentElement;
  let tr = td.parentElement;
  let tbody = tr.parentElement;

  tbody.removeChild(tr);

  if (tbody.children.length === 0) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute("colspan", 3);
    td.textContent = "Carrinho Vazio";
    tr.appendChild(td);
    tbody.appendChild(tr);
  }

  calcularTotal();
  localStorage.setItem("conteudoCarrinho", conteudoCarrinho.innerHTML);
}

function esvaziarCarrinho() {
  let conteudoCarrinho = document.querySelector("#tabela-produtos");
  conteudoCarrinho.innerHTML = '<p>Carrinho vazio</p>';

  localStorage.setItem("conteudoCarrinho", conteudoCarrinho.innerHTML);  
}


