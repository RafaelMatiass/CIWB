async function buscar(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  let response = await fetch(url);
  if (response.ok) {
    let data = await response.json();
    console.log(data['name'] + data['username']);
    console.log(data['email']);
  }
}

function main() {
  let btn = document.querySelector('#carregar');
  btn.addEventListener('click', function() {
    let txtId = document.querySelector('#id');
    let id = txtId.value;
    buscar(id);
  });
}
main();
