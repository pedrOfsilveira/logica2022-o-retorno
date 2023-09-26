const produto = {
  valor: Number(prompt('Digite o preço: ')).toFixed(2),
  codigo: parseInt(prompt('Digite o código de origem: ')),
  origem() {
    if (this.codigo == 1) {
      return 'Norte';
    } else if (this.codigo == 2 || this.codigo == 5 || this.codigo == 9) {
      return 'Sul';
    } else if (this.codigo == 3 || (this.codigo >= 10 && this.codigo <= 15)) {
      return 'Leste';
    } else if (this.codigo == 7 || this.codigo == 20) {
      return 'Oeste';
    } else {
      return'Importado';
    }
  },
};
console.log(produto.origem());