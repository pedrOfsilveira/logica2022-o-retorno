const num = {
  valorA: Number(prompt('Digite o valor de A:')),
  valorB: Number(prompt('Digite o valor de B:')),
  valorC: Number(prompt('Digite o valor de C:')),
  somaQuadrado() {
    return (
      Math.pow(this.valorA, 2) +
      Math.pow(this.valorB, 2) +
      Math.pow(this.valorC, 2)
    );
  }
};

num.somaQuadrado();
