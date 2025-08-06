const projetos = [
  {
    nome: "Plataforma de E-commerce",
    descricao:
      "Uma plataforma de e-commerce completa com carrinho de compras, checkout e painel administrativo.",
    tecnologias: ["React", "Node.js", "Express", "MongoDB"],
    imagem: "https://via.placeholder.com/400x200.png?text=E-commerce",
    link_repo: "https://github.com/israelsouza/ecommerce",
    link_demo: "#",
  },
  {
    nome: "Aplicativo de Tarefas",
    descricao:
      "Um aplicativo de gerenciamento de tarefas com autenticação de usuários e sincronização em tempo real.",
    tecnologias: ["Vue.js", "Firebase", "Vuetify"],
    imagem: "https://via.placeholder.com/400x200.png?text=App+de+Tarefas",
    link_repo: "https://github.com/israelsouza/todo-app",
    link_demo: "#",
  },
  {
    nome: "Blog Pessoal",
    descricao:
      "Um blog pessoal com sistema de gerenciamento de conteúdo (CMS) para publicação de artigos.",
    tecnologias: ["Next.js", "Markdown", "Tailwind CSS"],
    imagem: "https://via.placeholder.com/400x200.png?text=Blog",
    link_repo: "https://github.com/israelsouza/blog",
    link_demo: "#",
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
                    <a href="${projeto.link_demo}" target="_blank">Ver Demo</a>
                </div>
            </div>
        `;
    container.appendChild(projetoDiv);
  });
});
