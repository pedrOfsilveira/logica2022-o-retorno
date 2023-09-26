let tamanho = Number(prompt('Digite o tamanho da lista:'));
let posicao = Number(prompt('Digite a posição:'));

let proxima_posicao = (posicao + 1) % tamanho;
let posicao_anterior = (posicao - 1 + tamanho) % tamanho;

alert('Posição anterior:' + posicao_anterior + ' Posição posterior:' + proxima_posicao);
