const processo_seletivo = {
  eletro: {
    vagas: parseInt(prompt('Número de vagas Eletrotécnica:')),
    inscritos: parseInt(prompt('Número de inscritos Eletrotécnica:'))
  },
  refri: {
    vagas: parseInt(prompt('Número de vagas Refrigeração:')),
    inscritos: parseInt(prompt('Número de inscritos Refrigeração:'))
  },
  info: {
    vagas: parseInt(prompt('Número de vagas Informática para Internet:')),
    inscritos: parseInt(prompt('Número de inscritos Informática para Internet:'))
  },
  geo: {
    vagas: parseInt(prompt('Número de vagas Geoprocessamento:')),
    inscritos: parseInt(prompt('Número de inscritos Geoprocessamento:'))
  },
  auto: {
    vagas: parseInt(prompt('Número de vagas Automação Industrial:')),
    inscritos: parseInt(prompt('Número de inscritos Automação Industrial:'))
  },
  fabri: {
    vagas: parseInt(prompt('Número de vagas Fabricação Mecânica:')),
    inscritos: parseInt(prompt('Número de inscritos Fabricação Mecânica:'))
  },
  totalInscritos() {
    let total_inscritos = 0;
    for(const key in processo_seletivo) {
      if (key !== 'totalInscritos' && key !== 'percentualCurso') {
        total_inscritos += this[key].inscritos;
      }
    };
    return total_inscritos;
  },
  percentualCurso() {
    for(const key in processo_seletivo) {
      this[key].percentual = (this[key].inscritos/this.totalInscritos()*100).toFixed(2);
    }
  }
};

