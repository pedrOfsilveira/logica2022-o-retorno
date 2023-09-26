let notas = {
  nota1: Number(prompt('Digite a primeira nota:')),
  nota2: Number(prompt('Digite a segunda nota:')),
  julgamentoEstouTeJulgando() {
    let media = (this.nota1 + this.nota2) / 2;
    if (media >= 7) {
      return 'aprovado';
    } else {
      return 'reprovado';
    }
  }
};

console.log(notas.julgamentoEstouTeJulgando());
