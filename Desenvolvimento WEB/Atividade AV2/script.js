function carregarDrinkPorNome() {
  const nomeDrink = document.getElementById("nomeDoDrink").value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nomeDrink}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.drinks) {
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

    item.addEventListener("click", () => exibirDrink(drink));
    listaDrinks.appendChild(item);
  });
}

function exibirDrink(drink) {
  // Adicionar a classe para exibir a seção de detalhes
  document.body.classList.add("mostrar-detalhes");

  const detalhesDiv = document.getElementById("detalhesDrink");
  detalhesDiv.innerHTML = "";

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

  const fecharBotao = document.createElement("button");
  fecharBotao.textContent = "Fechar";
  fecharBotao.classList.add("botao");
  fecharBotao.id = "fecharDetalhes";

  fecharBotao.addEventListener("click", () => {
    document.body.classList.remove("mostrar-detalhes");
    detalhesDiv.innerHTML = "";
  });

  detalhesDiv.appendChild(nome);
  detalhesDiv.appendChild(imagem);
  detalhesDiv.appendChild(categoria);
  detalhesDiv.appendChild(tipo);
  detalhesDiv.appendChild(copo);
  detalhesDiv.appendChild(instrucoes);
  detalhesDiv.appendChild(ingredientes);
  detalhesDiv.appendChild(fecharBotao);
}

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

function listarDrinksPorInicial(drinks) {
  const listaDrinksPorInicial = document.getElementById(
    "listaDrinksPorInicial"
  );
  listaDrinksPorInicial.innerHTML = "";

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

    item.addEventListener("click", () => exibirDrink(drink));
    listaDrinksPorInicial.appendChild(item);
  });
}

document
  .getElementById("btnBuscarDrinksPorInicial")
  .addEventListener("click", carregarDrinksPorInicial);
