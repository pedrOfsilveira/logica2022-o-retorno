let num = parseInt(prompt('Digite o número:'));
let posicao = parseInt(prompt('Digite a posição:'));
let numero_potencia = Math.pow(10,posicao);
let num_posicao = Math.floor((num/numero_potencia - Math.floor(num/numero_potencia)) * 10);

console.log(num_posicao);