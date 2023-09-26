const sala = {
  largura: parseInt(prompt('Digite a largura em metros:')),
  comprimento: parseInt(prompt('Digite o comprimento em metros:'))
};

let lajota = {
  tipo1: 0,
  tipo2: 0,
  tipo3: 4,
  total: 0,
  getLajotas() {
    this.tipo2 = (sala.largura-1)*2 + (sala.comprimento-1)*2;
    this.tipo1 = sala.largura*sala.comprimento + (sala.largura-1) * (sala.comprimento-1);
    this.total = this.tipo1 + this.tipo2 + this.tipo3;
  }
};

lajota.getLajotas();

console.log(`
${lajota.tipo1}
${lajota.tipo2}
${lajota.tipo3}
${lajota.total}
`);

