let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let pares = valores.filter(function (x) {
  return x % 2 === 0;
});

let total = valores
  .filter(function (p) {
    return p % 2 === 0;
  })
  .reduce(function (acumulador, valorTotal) {
    return acumulador + valorTotal;
  }, 0);

console.log(pares);
console.log("Soma dos pares é " + total);
