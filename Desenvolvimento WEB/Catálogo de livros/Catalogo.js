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

function carregarLivroPorId() {
  var id = document.getElementById("livroId").value;
  fetch(`https://livros.acilab.com.br/api/livros/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Livro não encontrado");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("tituloAtual").innerText = data.titulo;
      document.getElementById("autorAtual").innerText = data.autor;

      document.getElementById("tituloNovo").value = data.titulo;
      document.getElementById("autorNovo").value = data.autor;

      document.getElementById("divAtualizarLivros").style.display = "block";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Livro não encontrado. Verifique o ID.");
    });
}

function deletarLivroPorId(){
  var id = document.getElementById('livroIdDeletar').value;

  fetch(`https://livros.acilab.com.br/api/livros/${id}`, {
    method: 'DELETE'
  })
  .then((response) =>{
    if(!response){
      throw new console.log("ID não encontrado");
    }

    return response.json();
  })
  .then((data) =>{
    alert(`Livro deletado: ${data.titulo} de ${data.autor}`);
    
  })
  .catch((error) =>{ 
    console.error("Error:", error);
  })
}

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

function atualizarLivrosPorId() {
  var id = document.getElementById("livroId").value;
  var tituloNovo = document.getElementById("tituloNovo").value;
  var autorNovo = document.getElementById("autorNovo").value;

  fetch(`https://livros.acilab.com.br/api/livros/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ titulo: tituloNovo, autor: autorNovo }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao atualizar o livro");
      }
      return response.json();
    })
    .then((data) => {
      alert("Livro atualizado com sucesso!");
      console.log("Livro atualizado:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Erro ao atualizar o livro.");
    });
}

