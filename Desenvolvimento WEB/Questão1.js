let produtos = [
  { nome: "Mac", preco: 2000.99 },
  { nome: "Óculos", preco: 999.99 },
  { nome: "Eduardo", preco: 2.99 },
  { nome: "Celta 2 porta injeção eletrônica", preco: 0.99 },
  { nome: "moto do nator", preco: 51.99 },
];

let total = produtos
  .filter(function (p) {
    return p.preco >= 50;
  })
  .reduce(function (acumulador, valorTotal) {
    return acumulador + valorTotal.preco;
  }, 0);

console.log("Total: R$" + total);
