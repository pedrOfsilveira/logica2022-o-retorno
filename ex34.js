const ano = {
  valor: parseInt(prompt('Digite um ano: ')),
  bissexto() {
    if (
      (this.valor > 1584 && this.valor % 400 == 0) ||
      (this.valor % 4 == 0 && this.valor % 100 != 0)
    ) {
      return true;
    } else {
      return false;
    }
  },
};

ano.bissexto();