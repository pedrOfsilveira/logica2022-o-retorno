const media = {
  media1: Number(prompt('Digite a primeira nota:')),
  media2: Number(prompt('Digite a segunda nota:')),
  media3: Number(prompt('Digite a terceira nota:')),
  mediaPonderada() {
    return (this.media1+this.media2*2+this.media3*7)/10;
  }
};
console.log(media.mediaPonderada());