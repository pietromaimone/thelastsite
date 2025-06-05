const translations = {
  pt: {
    tituloPagina: "Highlights",
    alternarTema: "Alternar Tema",
    cabecalho: "Highlights by maiSpy",
    menu_home: "HOME",
    menu_cs: "CS:GO",
    menu_valorant: "VALORANT",
    menu_r6: "Rainbow Six",
    menu_minecraft: "Minecraft",
    menu_contato: "contato",
    cs_titulo: "Counter-Strike: Global Offensive (CS:GO)",
    cs_descricao: "Counter-Strike: Global Offensive (CS:GO) é um jogo de tiro tático lançado em 2012 pela Valve e Hidden Path Entertainment. No jogo, equipes de terroristas e contra-terroristas competem para completar objetivos como plantar ou desarmar uma bomba ou eliminar o time adversário. Famoso por sua ênfase em estratégia, precisão e trabalho em equipe, CS:GO tornou-se um dos maiores jogos de eSports, com uma vasta base de jogadores e torneios de alto nível.",
    valorant_titulo: "VALORANT",
    valorant_descricao: "aonde quem não consegue jogar cs vai parar",
    r6_titulo: "Tom Clancy's Rainbow Six Siege",
    r6_descricao: "Tom Clancy's Rainbow Six Siege é um jogo de tiro tático lançado em 2015 pela Ubisoft. No jogo, equipes de operadores de forças especiais competem em ambientes fechados para completar objetivos como desarmar bombas ou resgatar reféns. Com ênfase em estratégia, trabalho em equipe e destruição ambiental, Rainbow Six Siege é conhecido por sua abordagem realista e tática, além de ter uma cena competitiva ativa.",
    minecraft_titulo: "Minecraft",
    minecraft_descricao: "Considerado um dos maiores jogos já feitos, Minecraft apresenta uma proposta totalmente distinta dos jogos no estilo FPS. Em vez de se focar em ação frenética, ele oferece uma experiência mais tranquila, permitindo aos jogadores explorar um vasto mundo gerado de forma procedimental e expressar sua criatividade sem limites. A liberdade para construir, criar e viver aventuras únicas transforma Minecraft em uma verdadeira obra-prima que cativa jogadores de todas as idades ao redor do mundo.",
    contato_titulo: "contato",
    fale_conosco: "Fale Conosco",
    descricao_contato: "Entre em contato pelas redes sociais abaixo:",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    email: "E-mail",
    inscrever: "se inscreva no canal!",
    cookie_text: "Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa Política de Privacidade.",
    aceitar_cookie: "Aceitar",
    rodape: "© 2025 hihglithgs. Todos os direitos reservados."
  },
  en: {
    tituloPagina: "Highlights",
    alternarTema: "Toggle Theme",
    cabecalho: "Highlights by maiSpy",
    menu_home: "HOME",
    menu_cs: "CS:GO",
    menu_valorant: "VALORANT",
    menu_r6: "Rainbow Six",
    menu_minecraft: "Minecraft",
    menu_contato: "Contact",
    cs_titulo: "Counter-Strike: Global Offensive (CS:GO)",
    cs_descricao: "Counter-Strike: Global Offensive (CS:GO) is a tactical shooter released in 2012 by Valve and Hidden Path Entertainment. In the game, teams of terrorists and counter-terrorists compete to complete objectives such as planting or defusing a bomb or eliminating the opposing team. Famous for its emphasis on strategy, precision, and teamwork, CS:GO has become one of the biggest eSports games, with a vast player base and high-level tournaments.",
    valorant_titulo: "VALORANT",
    valorant_descricao: "where people go when they can't play CS",
    r6_titulo: "Tom Clancy's Rainbow Six Siege",
    r6_descricao: "Tom Clancy's Rainbow Six Siege is a tactical shooter game released in 2015 by Ubisoft. In the game, teams of special forces operators compete in close quarters environments to complete objectives such as defusing bombs or rescuing hostages. Emphasizing strategy, teamwork, and environmental destruction, Rainbow Six Siege is known for its realistic and tactical approach, and it has an active competitive scene.",
    minecraft_titulo: "Minecraft",
    minecraft_descricao: "Considered one of the greatest games ever made, Minecraft offers a completely different approach compared to FPS-style games. Instead of focusing on intense action, it provides a more peaceful experience, allowing players to explore a vast procedurally generated world and express their creativity without limits. The freedom to build, create, and live unique adventures makes Minecraft a true masterpiece that captivates players of all ages around the world.",
    contato_titulo: "Contact",
    fale_conosco: "Contact Us",
    descricao_contato: "Get in touch via the social networks below:",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    linkedin: "LinkedIn",
    email: "Email",
    inscrever: "subscribe to the channel!",
    cookie_text: "We use cookies to improve your experience. By continuing to browse, you agree to our Privacy Policy.",
    aceitar_cookie: "Accept",
    rodape: "© 2025 hihglithgs. All rights reserved."
  }
};

const langToggle = document.getElementById("lang-toggle");
let lang = localStorage.getItem("lang") || "pt";

function traduzirPagina() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const chave = el.getAttribute("data-i18n");
    const texto = translations[lang][chave];
    if (texto) el.textContent = texto;
  });

  if (langToggle) {
    langToggle.textContent = lang === "pt" ? "EN" : "PT";
  }
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    lang = lang === "pt" ? "en" : "pt";
    localStorage.setItem("lang", lang);
    traduzirPagina();
  });
}

traduzirPagina();
