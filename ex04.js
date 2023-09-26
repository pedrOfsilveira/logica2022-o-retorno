let terreno = {
  altura: Number(prompt('Digite a altura do terreno:')),
  largura: Number(prompt('Digite a largura do terreno:')),
  area() {
    return this.altura*this.largura;
  }
};

terreno.area();