function carregarLivros() {
  var livros = document.getElementById("book-list");
  livros.innerHTML = "";
  fetch("https://livros.acilab.com.br/api/livros")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        var id = data[i]["id"];
        var titulo = data[i]["titulo"];
        var autor = data[i]["autor"];
        livros.innerHTML +=
          "<p>" + id + " - " + titulo + " - " + autor + "</p>";
      }
      var test = document.getElementById("tituloNovo");
      test.value = data[0]["titulo"];
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

var btnListar = document.getElementById("btnListar");
btnListar.addEventListener("click", carregarLivros);

function adicionarLivros() {
  var titulo = document.getElementById("titulo").value;
  var autor = document.getElementById("autor").value;
  fetch("https://livros.acilab.com.br/api/livros", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ titulo: titulo, autor: autor }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Livro adicionado com sucesso:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

var btnAdicionar = document.getElementById("btnAdicionar");
btnAdicionar.addEventListener("click", adicionarLivros);

function atualizarLivrosPorId(id) {
  var id = document.getElementById(id);
  var tituloNovo = documento.getElementById("tituloNovo").value;
  var autorNovo = documento.getElementById("autorNovo").value;

  fetch("https://livros.acilab.com.br/api/livros", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ titulo: tituloNovo, autor: autorNovo }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Livros:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

/*
  function deletarLivrosPorId(id) {
    var deletarLivro = document.getElementById("deletar-livro");
    fetch("https://livros.acilab.com.br/api/livros/" + id, {
      method: "DELETE",
    })
      .then((reponse) => {
        if (reponse.ok) {
          console.log("Livro com ID ${id} excluído com sucesso!");
          carregarLivros();
        } else {
          console.error("Erro ao excluir o livro:", reponse.status);
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }
  */
