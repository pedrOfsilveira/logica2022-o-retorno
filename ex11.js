const peso = {
  valor: Number(prompt('Digite seu peso:')),
  pesoMenos20() {
    return this.valor*0.8;
  },
  pesoMais15() {
    return this.valor*1.15;
  }
};

console.log(peso.pesoMais15());
console.log(peso.pesoMenos20());