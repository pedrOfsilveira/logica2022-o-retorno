let segundos_informados = parseInt(prompt('Digite os segundos a serem convertidos:'));

let tempo = {};

tempo.hora = Math.floor(segundos_informados/3600);
segundos_informados %= 3600;

tempo.minuto =  Math.floor(segundos_informados/60);
segundos_informados %= 60;

tempo.segundos = segundos_informados;
