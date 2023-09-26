let media = parseInt(prompt('Digite a média trimestral:'))*3;

let nota = {
  atual: Number(prompt('Digite a nota atual:')),
};
nota.restante = ((21 - nota.atual)/2).toFixed(1);

console.log(`Você precisa de ${nota.restante} nos próximos 2 trimestres.`);