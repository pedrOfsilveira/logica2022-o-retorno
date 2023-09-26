let num = parseInt(prompt('Digite um número a ser decomposto:'));


let centena = Math.floor(num/100);
let dezena = Math.floor((num - centena*100)/10);
let unidade = Math.floor(num - centena*100 - dezena*10);

console.log(centena);
console.log(dezena);
console.log(unidade);
