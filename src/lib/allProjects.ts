const projectsData = [
  {
    id: 1,
    title: "Econsciente",
    description: "Site educativo que promove conscientização de alimentos de hortifruti",
    detailedDescription: "O projeto acadêmico centraliza dicas de conservação, manuseio e aproveitamento de frutas, legumes e verduras, além de oferecer um quiz interativo com resultados personalizados conforme o desempenho do usuário.",
    image: "econs.jpg",
    images: [ "econs.jpg" ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/israelsouza/ECONSciente",
    liveUrl: "https://israelsouza.github.io/ECONSciente/",
    featured: false 
  },
  {
    id: 2,
    title: "Buscapet",
    description: "Plataforma colaborativa que promove divulgação de pets que foram perdidos e encontrados na rua.",
    detailedDescription: "A plataforma colaborativa conecta pessoas que perderam seus animais de estimação com aquelas que os encontraram. Nela, você pode cadastrar animais perdidos e encontrados, buscar por localização e entrar em contato direto com outros usuários",
    image: "busca.png",
    images: [ "busca.png" ],
    technologies: ["React", "Node.JS", "Express", "WebSocket", "API REST", "POO", "Testes E2E"],
    githubUrl: "https://github.com/israelsouza/busca-pet",
    featured: true
  },
  {
    id: 3,
    title: "Encurtador de link",
    description: "Um encurtador de link com deploy na Vercel.",
    detailedDescription: "API para encurtamento de URLs, projetada para ser rápida e eficiente. A ferramenta recebe uma URL longa e retorna uma versão curta e única. O projeto foi construído com TypeScript e Node.js, com dados persistidos em um banco PostgreSQL e deploy automatizado via Vercel.",
    image: "link.jpg",
    images: [
      "link.jpg",
      "link1.jpg"
    ],
    technologies: ["NodeJS", "Integração de API", "TypeScript", "Postgresql", "Vercel"],
    githubUrl: "https://github.com/israelsouza/ts-link",
    liveUrl: "https://ts-link-blush.vercel.app/",
    featured: true
  },
  {
    id: 4,
    title: "Exército Brasileiro - Portal Informativo",
    description: "Site para divulgar a pesquisa realizada pela estudante e pesquisadora de iniciação cientifica.",
    detailedDescription: "Site academico com o intuito de divulgar a pesquisa realizada pela estudante e pesquisadora de iniciação cientifica(CNPq) Gabriela Orsi estudante de Gestão de Recursos Humanos da Fatec Zona Leste",
    image: "cmse.jpg",
    images: [
      "cmse.jpg",
      "cmse1.jpg",
      "cmse2.jpg"
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/Sofia-gith/estudoGaby",
    liveUrl: "https://sofia-gith.github.io/estudoGaby/",
    featured: false
  },
  {
    id: 5,
    title: "Desafio Meteor Madness - Hackathoon da Nasa",
    description: "Site para a resolução do desafio 'Meteor Madness' proposto no hackathoon da Nasa no ano de 2025.",
    detailedDescription: "",
    image: "nasa01.jpg",
    images: [
      "nasa01.jpg",
      "nasa02.jpg",
      "nasa03.jpg"
    ],
    technologies: ["React", "Tailwind CSS", "NodeJS", "Integração de API"],
    githubUrl: "https://github.com/israelsouza/NASA_Challenge-Meteor_Madness",
    liveUrl: "https://nasa-challenge-meteor-madness-web.vercel.app/",
    featured: true
  }
];

export default projectsData;