const circle = {
  radius: Number(prompt('Digite o raio:')),
  validNotValid() {
    if(this.radius > 0) {
      let area = (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
      console.log(`A área é ${area}.`);
    } else {
      console.log(`NEGATIVO😩🈶?!?!?!??!?!?!!!?!????`);
    }
  }
};