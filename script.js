const projetos = [];

[
  {
    id: 1,
    title: "Econsciente",
    description: "Site educativo que promove conscientização de alimentos de hortifruti",
    // detailedDescription: "Uma plataforma robusta de e-commerce desenvolvida com React e Node.js, featuring sistema completo de autenticação, carrinho de compras, processamento de pagamentos via Stripe, painel administrativo para gestão de produtos e pedidos, sistema de avaliações, notificações em tempo real e muito mais. A aplicação foi construída seguindo as melhores práticas de desenvolvimento, com testes automatizados e deploy contínuo.",
    image: "econs.jpg",
    images: [
      // "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/israelsouza/ECONSciente",
    liveUrl: "https://israelsouza.github.io/ECONSciente/",
    featured: false 
  },
  {
    id: 2,
    title: "Buscapet",
    description: "Plataforma colaborativa que promove divulgação de pets que foram perdidos e encontrados na rua.",
    // detailedDescription: "Sistema completo de gerenciamento de tarefas desenvolvido com Next.js e TypeScript. Inclui funcionalidades como criação de projetos, atribuição de tarefas, comentários, anexos, notificações em tempo real via WebSocket, integração com calendário, relatórios de produtividade e sistema de permissões por equipe. Interface intuitiva e responsiva para desktop e mobile.",
    image: "busca.png",
    images: [
      // "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      // "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
    ],
    technologies: ["React", "Node.JS", "Express", "WebSocket", "API REST", "POO", "Testes E2E"],
    githubUrl: "https://github.com/israelsouza/busca-pet",
    // liveUrl: "https://example.com",
    featured: false
  },
  {
    id: 3,
    title: "Encurtador de link",
    description: "Um encurtador de link com deploy na Vercel.",
    detailedDescription: "Painel financeiro completo desenvolvido em React com backend Python, oferecendo visualização avançada de dados financeiros através de gráficos interativos, análise preditiva, alertas automáticos, relatórios personalizáveis em PDF, integração com APIs bancárias, controle de orçamento e fluxo de caixa. Inclui sistema de backup automático e criptografia de dados sensíveis.",
    image: "link.jpg",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=600&fit=crop"
    ],
    technologies: ["NodeJS", "TypeScript", "Postgresql"],
    githubUrl: "https://github.com/israelsouza/ts-link",
    liveUrl: "https://ts-link-blush.vercel.app/",
    featured: false
  },
  {
    id: 4,
    title: "Exército Brasileiro - Portal Informativo",
    description: "Site para divulgar a pesquisa realizada pela estudante e pesquisadora de iniciação cientifica.",
    // detailedDescription: "Aplicação de rede social completa desenvolvida com React Native e Node.js, incluindo sistema de posts com fotos e vídeos, stories temporários, chat em tempo real, sistema de seguir/seguidores, feed personalizado por algoritmo, notificações push, sistema de moderação e muito mais. Suporte para tema claro/escuro e múltiplos idiomas.",
    image: "cmse.jpg",
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=600&fit=crop"
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/Sofia-gith/estudoGaby",
    liveUrl: "https://sofia-gith.github.io/estudoGaby/",
    featured: false
  }
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
