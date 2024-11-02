let produtos = [
  { nome: "Régis", nota: 4 },
  { nome: "Valéria", nota: 20 },
  { nome: "Eduardo", nota: 2 },
  { nome: "Nator", nota: 10 },
  { nome: "Lucas", nota: 1.5 },
];

let total = produtos
  .filter(function (p) {
    return p.preco >= 50;
  })
  .reduce(function (acumulador, valorTotal) {
    return acumulador + valorTotal.preco;
  }, 0);

console.log("Total: R$" + total);
