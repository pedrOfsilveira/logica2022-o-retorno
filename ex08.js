const cirilo = {
  raio: Number(prompt('Digite o raio do cirilo: ')),
  altura: Number(prompt('Digite a altura do cirilo: ')),
  volume() {
    return (Math.PI*Math.pow(this.raio, 2)*this.altura).toFixed(2);
  }
};

console.log(cirilo.volume());