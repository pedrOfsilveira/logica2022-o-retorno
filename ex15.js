const num = {
  valorA: Number(prompt('Digite o valor de A:')),
  valorB: Number(prompt('Digite o valor de B:')),
  quadradoDiferenca() {
    return Math.pow((this.valorA-this.valorB),2);
  }
}

num.quadradoDiferenca();