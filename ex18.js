const salario = {
  valor: Number(prompt('Digite o valor atual do salário:')).toFixed(2),
  taxa: parseInt(prompt('Digite a taxa percentual do reajuste:')),
  reajuste() {
    return this.valor+this.valor*this.taxa/100;
  }
}

console.log(salario.reajuste());