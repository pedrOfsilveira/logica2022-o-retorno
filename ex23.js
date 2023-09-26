const vendedor = {
  nome: prompt('Digite o nome do vendedor:'),
  carros_vendidos: parseInt(prompt('Digite a quantidade de carros vendidos:')),
  valor_vendas: parseFloat(prompt('Digite o valor total de vendas:')).toFixed(2),
  salario() {
    return (500 + this.valor_vendas*0.05 + this.carros_vendidos*50).toFixed(2);
  }
};

console.log(salario());