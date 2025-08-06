const projetos = [
  {
    nome: "Econsciente",
    descricao:
      "O projeto acadêmico centraliza dicas de conservação, manuseio e aproveitamento de frutas, legumes e verduras, além de oferecer um quiz interativo com resultados personalizados conforme o desempenho do usuário.",
    tecnologias: ["HTML", "CSS", "JavaScript", "BootsTrap"],
    imagem: "./assets/econs.jpg",
    link_repo: "https://github.com/israelsouza/ECONSciente",
    link_demo: "https://israelsouza.github.io/ECONSciente/",
  },
  {
    nome: "Buscapet",
    descricao:
      "A plataforma colaborativa conecta pessoas que perderam seus animais de estimação com aquelas que os encontraram. Nela, você pode cadastrar animais perdidos e encontrados, buscar por localização e entrar em contato direto com outros usuários",
    tecnologias: ["React", "NodeJS", "Express", "WebSocket", "API REST", "POO", "Testes"],
    imagem: "./assets/busca.png",
    link_repo: "https://github.com/israelsouza/busca-pet",
    link_demo: "#",
  },
  {
    nome: "Encurtador de link",
    descricao:
      "API para encurtamento de URLs, projetada para ser rápida e eficiente. A ferramenta recebe uma URL longa e retorna uma versão curta e única. O projeto foi construído com TypeScript e Node.js, com dados persistidos em um banco PostgreSQL e deploy automatizado via Vercel.",
    tecnologias: ["NodeJS", "TypeScript", "Vercel", "Postgresql"],
    imagem: "./assets/link.jpg",
    link_repo: "https://github.com/israelsouza/ts-link",
    link_demo: "https://ts-link-blush.vercel.app/",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projetos-container");
  projetos.forEach((projeto) => {
    const projetoDiv = document.createElement("div");
    projetoDiv.className = "projeto";

    const tecnologiasHtml = projeto.tecnologias
      .map((tech) => `<span>${tech}</span>`)
      .join("");

    const demoLinkHtml =
      projeto.link_demo && projeto.link_demo !== "#"
        ? `<a href="${projeto.link_demo}" target="_blank">Ver Demo</a>`
        : "";

    projetoDiv.innerHTML = `
            <img src="${projeto.imagem}" alt="Imagem do projeto ${projeto.nome}" class="projeto-imagem">
            <div class="projeto-info">
                <h3>${projeto.nome}</h3>
                <p>${projeto.descricao}</p>
                <div class="projeto-tecnologias">
                    ${tecnologiasHtml}
                </div>
                <div class="projeto-links">
                    <a href="${projeto.link_repo}" target="_blank">Ver Repositório</a>
                    ${demoLinkHtml}
                </div>
            </div>
        `;
    container.appendChild(projetoDiv);
  });
});
