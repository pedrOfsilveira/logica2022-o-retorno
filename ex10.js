const conta = {
  valor: Number(prompt('Digite o valor da prestação:')),
  taxa: Number(prompt('Digite a taxa mensal de juros (em R$):')),
  atraso: parseInt(prompt('Digite a quantidade de meses em atraso:')),
  valorAtrasado() {
    return (this.valor+this.taxa*this.atraso).toFixed(2);
  }
};

console.log(`O valor em atraso é de R$${conta.valorAtrasado()}`)