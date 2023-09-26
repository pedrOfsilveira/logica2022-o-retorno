const pessoa = {
  idade: parseInt(prompt('Informe sua idade:')),
  nome: prompt('Informe seu nome:'),
  diasVida() {
    return (`Olá ${this.nome}, você já viveu ${this.idade*365} dias.`);
  }
}

console.log(pessoa.diasVida());