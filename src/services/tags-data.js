export const CATEGORIES = {
  Tecnologia: {
    tvs: "TVs",
    smartphones: "Smartphones",
    tablets: "Tablets",
    notebooks: "Notebooks",
    computadores: "Computadores",
    monitores: "Monitores",
    perifericos: "Periféricos",
    componentes: "Componentes",
    armazenamento: "Armazenamento",
    redes: "Redes & Roteadores",
    "automacao-residencial": "Automação Residencial"
  },

  Games: {
    consoles: "Consoles",
    jogos: "Jogos",
    "acessorios-gamer": "Acessórios Gamer"
  },

  "Áudio e Vídeo": {
    audio: "Áudio",
    video: "Vídeo",
    projetores: "Projetores",
    cameras: "Câmeras",
    drones: "Drones"
  },

  "Casa e Eletrodomésticos": {
    eletrodomesticos: "Eletrodomésticos",
    moveis: "Móveis",
    iluminacao: "Iluminação",
    organizacao: "Organização",
    climatizacao: "Climatização",
    colchoes: 'Colchões'
  },

  Cozinha: {
    cozinha: "Cozinha",
    eletroportateis: 'Eletroportáteis',
    talheres: 'Talheres'
  },

  Moda: {
    roupas: "Roupas",
    calcados: "Calçados",
    "acessorios-moda": "Acessórios de Moda"
  },

  "Beleza e Saúde": {
    beleza: "Beleza",
    saude: "Saúde",
    cosmeticos: "Cosméticos"
  },

  "Esporte e Lazer": {
    esporte: "Esporte",
    fitness: "Fitness",
    musculacao: "Musculação",
    piscina: 'Piscina'
  },

  Automotivo: {
    automotivo: "Automotivo"
  },

  Ferramentas: {
    ferramentas: "Ferramentas",
    "ferramentas-eletricas": "Ferramentas Elétricas",
    "ferramentas-manuais": "Ferramentas Manuais"
  },

  "Música": {
    "instrumentos-musicais": "Instrumentos Musicais",
    "acessorios-musicais": "Acessórios Musicais"
  },

  Infantil: {
    brinquedos: "Brinquedos",
    infantil: "Infantil"
  },

  Pet: {
    petshop: "Pet Shop",
    "acessorios-pet": "Acessórios Pet"
  },

  "Papelaria e Educação": {
    papelaria: "Papelaria",
    "materiais-escolares": "Materiais Escolares",
    livros: "Livros",
    cursos: "Cursos"
  },

  Outros: {
    decoracao: "Decoração",
  },

  "Sem Categoria": {
    outros: "Outros"
  }

}

export const tags = Object.values(CATEGORIES)
  .flatMap(group => Object.entries(group))
  .reduce((acc, [value, label]) => {
      acc[value] = label
      return acc
}, {})