const num = {
  valorA: Number(prompt('Digite o valor de A:')),
  valorB: Number(prompt('Digite o valor de B:')),
  valorC: Number(prompt('Digite o valor de C:')),
  valorD: Number(prompt('Digite o valor de D:')),
  produtoAC() {
    return this.valorA*this.valorC;
  },
  somaBD() {
    return this.valorB+this.valorD;
  }
};

console.log(num.produtoAC());
console.log(num.somaBD());
