<<<<<<< HEAD
function carregarDrinkPorNome() {
  const nomeDrink = document.getElementById("nomeDoDrink").value;

=======
// Função para carregar o drink pelo nome
function carregarDrinkPorNome() {
  const nomeDrink = document.getElementById("nomeDoDrink").value;

  // Fazendo uma requisição à API para buscar o drink pelo nome
>>>>>>> cccee728b21fc6ae837dfed7bf8dd794d22dd371
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nomeDrink}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.drinks) {
<<<<<<< HEAD
        listarDrinks(data.drinks);
      } else {
        document.getElementById("listaDrinks").innerHTML =
          "<p>Drink não encontrado.</p>";
        document.getElementById("detalhesDrink").innerHTML = "";
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}

function listarDrinks(drinks) {
  const listaDrinks = document.getElementById("listaDrinks");
  listaDrinks.innerHTML = "";

=======
        listarDrinks(data.drinks);  // Se encontrar, lista os drinks
      } else {
        document.getElementById("listaDrinks").innerHTML =
          "<p>Drink não encontrado.</p>";  // Caso não encontre, exibe mensagem
        document.getElementById("detalhesDrink").innerHTML = "";  // Limpa detalhes do drink
      }
    })
    .catch((error) => {
      console.error("Erro:", error);  // Caso haja erro na requisição, exibe o erro
    });
}

// Função para listar os drinks encontrados
function listarDrinks(drinks) {
  const listaDrinks = document.getElementById("listaDrinks");
  listaDrinks.innerHTML = "";  // Limpa a lista existente

  // Cria um item de lista para cada drink encontrado
>>>>>>> cccee728b21fc6ae837dfed7bf8dd794d22dd371
  drinks.forEach((drink) => {
    const item = document.createElement("li");
    item.style.cursor = "pointer";
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.marginBottom = "10px";

    const imagem = document.createElement("img");
    imagem.src = drink.strDrinkThumb;
    imagem.alt = drink.strDrink;
    imagem.style.width = "50px";
    imagem.style.height = "50px";
    imagem.style.marginRight = "10px";

    const nomeDrink = document.createElement("span");
    nomeDrink.textContent = drink.strDrink;

    item.appendChild(imagem);
    item.appendChild(nomeDrink);

<<<<<<< HEAD
    item.addEventListener("click", () => exibirDrink(drink));
    listaDrinks.appendChild(item);
  });
}

function exibirDrink(drink) {
  // Adicionar a classe para exibir a seção de detalhes
  document.body.classList.add("mostrar-detalhes");

  const detalhesDiv = document.getElementById("detalhesDrink");
  detalhesDiv.innerHTML = "";

=======
    // Adiciona evento de clique para exibir detalhes do drink
    item.addEventListener("click", () => exibirDrink(drink));
    listaDrinks.appendChild(item);  // Adiciona o item à lista
  });
}

// Função para exibir os detalhes de um drink
function exibirDrink(drink) {
  document.body.classList.add("mostrar-detalhes");  // Exibe a área de detalhes

  const detalhesDiv = document.getElementById("detalhesDrink");
  detalhesDiv.innerHTML = "";  // Limpa os detalhes anteriores

  // Cria os elementos de detalhes do drink
>>>>>>> cccee728b21fc6ae837dfed7bf8dd794d22dd371
  const nome = document.createElement("h2");
  nome.textContent = drink.strDrink;

  const categoria = document.createElement("p");
  categoria.textContent = `Categoria: ${drink.strCategory}`;

  const tipo = document.createElement("p");
  tipo.textContent = `Tipo: ${drink.strAlcoholic}`;

  const copo = document.createElement("p");
  copo.textContent = `Copo: ${drink.strGlass}`;

  const instrucoes = document.createElement("p");
  instrucoes.textContent = `Instruções: ${drink.strInstructions}`;

  const imagem = document.createElement("img");
  imagem.src = drink.strDrinkThumb;
  imagem.alt = drink.strDrink;

<<<<<<< HEAD
=======
  // Lista os ingredientes do drink
>>>>>>> cccee728b21fc6ae837dfed7bf8dd794d22dd371
  const ingredientes = document.createElement("ul");
  ingredientes.textContent = "Ingredientes:";

  for (let i = 1; i <= 15; i++) {
    const ingrediente = drink[`strIngredient${i}`];
    const medida = drink[`strMeasure${i}`];

    if (ingrediente) {
      const item = document.createElement("li");
      item.textContent = `${ingrediente} - ${medida || ""}`;
      ingredientes.appendChild(item);
    }
  }

<<<<<<< HEAD
  const fecharBotao = document.createElement("button");
  fecharBotao.textContent = "Fechar";
  fecharBotao.classList.add("botao");
  fecharBotao.id = "fecharDetalhes";

=======
  // Cria botão de fechar os detalhes
  const fecharBotao = document.createElement("button");
  fecharBotao.textContent = "Fechar";
  fecharBotao.classList.add("botao", "fechar-botao");
  fecharBotao.id = "fecharDetalhes";

  // Adiciona evento de clique para fechar os detalhes
>>>>>>> cccee728b21fc6ae837dfed7bf8dd794d22dd371
  fecharBotao.addEventListener("click", () => {
    document.body.classList.remove("mostrar-detalhes");
    detalhesDiv.innerHTML = "";
  });

<<<<<<< HEAD
=======
  // Adiciona os elementos ao div de detalhes
>>>>>>> cccee728b21fc6ae837dfed7bf8dd794d22dd371
  detalhesDiv.appendChild(nome);
  detalhesDiv.appendChild(imagem);
  detalhesDiv.appendChild(categoria);
  detalhesDiv.appendChild(tipo);
  detalhesDiv.appendChild(copo);
  detalhesDiv.appendChild(instrucoes);
  detalhesDiv.appendChild(ingredientes);
  detalhesDiv.appendChild(fecharBotao);
}

<<<<<<< HEAD
document
  .getElementById("btnPorNome")
  .addEventListener("click", carregarDrinkPorNome);

function carregarIngrediente() {
  const nomeIngrediente = document.getElementById("nomeDoIngrediente").value;

  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${nomeIngrediente}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.ingredients && data.ingredients.length > 0) {
        const ingrediente = data.ingredients[0];
        exibirIngrediente(ingrediente);
      } else {
        document.getElementById("detalhesIngrediente").innerHTML =
          "<p>Ingrediente não encontrado.</p>";
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}

function exibirIngrediente(ingrediente) {
  const detalhesDiv = document.getElementById("detalhesIngrediente");

  detalhesDiv.innerHTML = "";

  const nome = document.createElement("h2");
  nome.textContent = ingrediente.strIngredient;

  const descricao = document.createElement("p");
  descricao.textContent = `Descrição: ${
    ingrediente.strDescription || "Nenhuma descrição disponível."
  }`;

  const tipo = document.createElement("p");
  tipo.textContent = `Tipo: ${ingrediente.strType || "Tipo não especificado"}`;

  const teorAlcoolico = document.createElement("p");
  teorAlcoolico.textContent = `Teor alcoólico: ${
    ingrediente.strABV ? ingrediente.strABV + "%" : "Não especificado"
  }`;

  detalhesDiv.appendChild(nome);
  detalhesDiv.appendChild(descricao);
  detalhesDiv.appendChild(tipo);
  detalhesDiv.appendChild(teorAlcoolico);
}

document
  .getElementById("btnBuscarIngrediente")
  .addEventListener("click", carregarIngrediente);

function carregarDrinksPorInicial() {
  const letraDrink = document.getElementById("letraDoDrink").value;

  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letraDrink}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.drinks) {
        listarDrinksPorInicial(data.drinks);
      } else {
        document.getElementById("listaDrinksPorInicial").innerHTML =
          "<p>Não há drinks com essa inicial.</p>";
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
}

=======
// Evento para buscar o drink por nome ao clicar no botão
document.getElementById("btnPorNome").addEventListener("click", carregarDrinkPorNome);

// Função para carregar drinks pela inicial
function carregarDrinksPorInicial() {
  const letraDrink = document.getElementById("letraDoDrink").value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letraDrink}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.drinks) {
        listarDrinksPorInicial(data.drinks);  // Lista drinks encontrados pela inicial
      } else {
        document.getElementById("listaDrinksPorInicial").innerHTML =
          "<p>Não há drinks com essa inicial.</p>";  // Exibe mensagem caso não encontre
      }
    })
    .catch((error) => {
      console.error("Erro:", error);  // Caso haja erro na requisição, exibe o erro
    });
}

// Função para listar drinks encontrados pela inicial
>>>>>>> cccee728b21fc6ae837dfed7bf8dd794d22dd371
function listarDrinksPorInicial(drinks) {
  const listaDrinksPorInicial = document.getElementById(
    "listaDrinksPorInicial"
  );
<<<<<<< HEAD
  listaDrinksPorInicial.innerHTML = "";

=======
  listaDrinksPorInicial.innerHTML = "";  // Limpa a lista anterior

  // Cria um item de lista para cada drink encontrado
>>>>>>> cccee728b21fc6ae837dfed7bf8dd794d22dd371
  drinks.forEach((drink) => {
    const item = document.createElement("li");
    item.style.cursor = "pointer";
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.marginBottom = "10px";

    const imagem = document.createElement("img");
    imagem.src = drink.strDrinkThumb;
    imagem.alt = drink.strDrink;
    imagem.style.width = "50px";
    imagem.style.height = "50px";
    imagem.style.marginRight = "10px";

    const nomeDrink = document.createElement("span");
    nomeDrink.textContent = drink.strDrink;

    item.appendChild(imagem);
    item.appendChild(nomeDrink);

<<<<<<< HEAD
    item.addEventListener("click", () => exibirDrink(drink));
    listaDrinksPorInicial.appendChild(item);
  });
}

document
  .getElementById("btnBuscarDrinksPorInicial")
  .addEventListener("click", carregarDrinksPorInicial);
=======
    // Adiciona evento de clique para exibir detalhes do drink
    item.addEventListener("click", () => exibirDrink(drink));
    listaDrinksPorInicial.appendChild(item);  // Adiciona o item à lista
  });
}

// Evento para buscar drinks pela inicial ao clicar no botão
document.getElementById("btnBuscarDrinksPorInicial").addEventListener("click", carregarDrinksPorInicial);

// Função para carregar ingrediente pela nome
function carregarIngrediente() {
  const nomeIngrediente = document.getElementById("nomeDoIngrediente").value;

  // Fazendo a requisição para a API para buscar o ingrediente
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${nomeIngrediente}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.ingredients && data.ingredients.length > 0) {
        const ingrediente = data.ingredients[0];
        exibirIngrediente(ingrediente);  // Exibe o ingrediente encontrado
      } else {
        document.getElementById("detalhesDrink").innerHTML =
          "<p>Ingrediente não encontrado.</p>";  // Caso não encontre, exibe mensagem
      }
    })
    .catch((error) => {
      console.error("Erro:", error);  // Caso haja erro, exibe o erro
    });
}

// Função para exibir os detalhes do ingrediente
function exibirIngrediente(ingrediente) {
  const detalhesDiv = document.getElementById("detalhesDrink");

  document.body.classList.add("mostrar-detalhes");  // Exibe a área de detalhes

  detalhesDiv.innerHTML = "";  // Limpa os detalhes anteriores

  // Cria os elementos de detalhes do ingrediente
  const nome = document.createElement("h2");
  nome.textContent = ingrediente.strIngredient;

  const descricao = document.createElement("p");
  descricao.textContent = `Descrição: ${
    ingrediente.strDescription || "Nenhuma descrição disponível."
  }`;

  const tipo = document.createElement("p");
  tipo.textContent = `Tipo: ${ingrediente.strType || "Tipo não especificado"}`;

  const teorAlcoolico = document.createElement("p");
  teorAlcoolico.textContent = `Teor alcoólico: ${
    ingrediente.strABV ? ingrediente.strABV + "%" : "Não especificado"
  }`;

  // Cria botão de fechar os detalhes
  const fecharBotao = document.createElement("button");
  fecharBotao.textContent = "Fechar";
  fecharBotao.classList.add("botao", "fechar-botao");
  fecharBotao.id = "fecharDetalhes";

  // Adiciona evento de clique para fechar os detalhes
  fecharBotao.addEventListener("click", () => {
    document.body.classList.remove("mostrar-detalhes");
    detalhesDiv.innerHTML = "";
  });

  // Adiciona os elementos ao div de detalhes
  detalhesDiv.appendChild(nome);
  detalhesDiv.appendChild(descricao);
  detalhesDiv.appendChild(tipo);
  detalhesDiv.appendChild(teorAlcoolico);
  detalhesDiv.appendChild(fecharBotao);
}

// Evento para buscar o ingrediente ao clicar no botão
document.getElementById("btnBuscarIngrediente").addEventListener("click", carregarIngrediente);
>>>>>>> cccee728b21fc6ae837dfed7bf8dd794d22dd371
