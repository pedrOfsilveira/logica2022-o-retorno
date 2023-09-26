const valor_quilo = Number(prompt('Preço por quilo:')).toFixed(2);
const valor_bebidas = Number(prompt('Preço por bebida:')).toFixed(2);

const cliente = {
  consumo: parseInt(prompt('Digite o consumo em gramas:')),
  bebidas: parseInt(prompt('Digite a quantidade de bebidas:')),
  valorPago() {
    return ((valor_quilo * this.consumo / 1000) + (valor_bebidas * this.bebidas)).toFixed(2);
  }
};

console.log(`O valor total a ser pago é de R$${cliente.valorPago()}`);
