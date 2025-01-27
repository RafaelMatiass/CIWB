async function buscarListaDePokemon() {
  const sectionPokemonList = document.getElementById("pokemon-list");

  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
  const data = await response.json();

  const pokemons = data.results; 

  const ul = document.createElement('ul');
  pokemons.forEach(pokemon => {
    const li = document.createElement('li');
    li.textContent = pokemon.name;  
    ul.appendChild(li);
  });

  sectionPokemonList.appendChild(ul);
}

window.onload = buscarListaDePokemon;


async function buscarDadosPokemon(nomePokemon) {
  const sectionPerfil = document.getElementById("perfil-pokemon");

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon.toLowerCase()}`);

  if (response.ok) {
    const data = await response.json();

    sectionPerfil.innerHTML = `
      <h3>${data.name.toUpperCase()}</h3>
      <img src="${data.sprites.front_default}" alt="Imagem de ${data.name}">
      <p><strong>Altura:</strong> ${data.height / 10} m</p>
      <p><strong>Peso:</strong> ${data.weight / 10} kg</p>
      <p><strong>Tipos:</strong> ${data.types.map(type => type.type.name).join(", ")}</p>
      <p><strong>Habilidades:</strong> ${data.abilities.map(ability => ability.ability.name).join(", ")}</p>
      <p><strong>Estatísticas Base:</strong></p>
      <ul>
        ${data.stats
          .map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`)
          .join("")}
      </ul>
      <p><strong>Lista de Movimentos:</strong></p>
      <ul>
        ${data.moves
          .slice(0, 5)
          .map(move => `<li>${move.move.name}</li>`)
          .join("")}
      </ul>
      <p><strong>Sprites Adicionais:</strong></p>
      <div>
        <img src="${data.sprites.front_shiny}" alt="Shiny ${data.name}">
        <img src="${data.sprites.back_default}" alt="Back ${data.name}">
        <img src="${data.sprites.back_shiny}" alt="Shiny Back ${data.name}">
      </div>
    `;
  } else {
    sectionPerfil.innerHTML = `<h3 style="color: red;">Pokémon não encontrado. Verifique o nome e tente novamente.</h3>`;
  }
}

document.getElementById("buscar-pokemon").addEventListener("click", () => {
  const pokemonNome = document.getElementById("nome-pokemon").value.trim();

  if (pokemonNome) {
    buscarDadosPokemon(pokemonNome).catch(error => {
      const sectionPerfil = document.getElementById("perfil-pokemon");
      sectionPerfil.innerHTML = `<p style="color: red;">Erro ao buscar dados.</p>`;
      console.error("Erro na requisição:", error);
    });
  } else {
    const sectionPerfil = document.getElementById("perfil-pokemon");
    sectionPerfil.innerHTML = `<p style="color: red;">Por favor, insira o nome de um Pokémon.</p>`;
  }
});
