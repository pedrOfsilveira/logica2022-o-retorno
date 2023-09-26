const calculadora = {
  num1: parseInt(prompt('Digite o primeiro número:')),
  num2: parseInt(prompt('Digite o segundo número:')),
  resultado: {},
  soma() {
    return this.num1+this.num2;
  },
  subtracao() {
    return this.num1-this.num2;
  },
  divisao() {
    return this.num1/this.num2;
  },
  multiplicacao() {
    return this.num1*this.num2;
  },  
  potenciacao() {
    return this.num1**this.num2;
  }
};

console.log(`
Soma: ${calculadora.soma()};
Diferença: ${calculadora.subtracao()};
Quociente: ${calculadora.divisao()};
Produto: ${calculadora.multiplicacao()};
Potência: ${calculadora.potenciacao()}.`);