let num = {
  valor: parseInt(prompt('Digite um número: ')),
  proxPar() {
    return this.valor + 2 - (this.valor%2);
  },
  parAnt() {
    return this.valor - 2 + (this.valor%2);
  }
}

console.log(`O par anterior é ${num.parAnt()}.
O próximo par é ${num.proxPar()}`);
