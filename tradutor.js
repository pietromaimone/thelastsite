// Espera o carregamento da página
document.addEventListener("DOMContentLoaded", function () {
    // Cria o botão de tradução
    const tradutorBtn = document.createElement("button");
    tradutorBtn.textContent = "Traduzir Página";
    tradutorBtn.id = "botao-traduzir";
    tradutorBtn.style.position = "fixed";
    tradutorBtn.style.top = "10px";
    tradutorBtn.style.left = "10px";
    tradutorBtn.style.zIndex = "9999";
    tradutorBtn.style.padding = "10px 15px";
    tradutorBtn.style.backgroundColor = "#222";
    tradutorBtn.style.color = "#fff";
    tradutorBtn.style.border = "none";
    tradutorBtn.style.borderRadius = "8px";
    tradutorBtn.style.cursor = "pointer";

    // Adiciona o botão ao corpo da página
    document.body.appendChild(tradutorBtn);

    // Área onde o widget do Google Translate será renderizado
    const googleTranslateDiv = document.createElement("div");
    googleTranslateDiv.id = "google_translate_element";
    googleTranslateDiv.style.position = "fixed";
    googleTranslateDiv.style.top = "50px";
    googleTranslateDiv.style.left = "10px";
    googleTranslateDiv.style.zIndex = "9999";
    document.body.appendChild(googleTranslateDiv);

    // Carrega o script do Google Translate
    tradutorBtn.addEventListener("click", function () {
        if (!window.google || !window.google.translate) {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
            document.body.appendChild(script);
        } else {
            googleTranslateElementInit();
        }
    });
});

// Função de inicialização do Google Translate
function googleTranslateElementInit() {
    if (!document.querySelector(".goog-te-combo")) {
        new google.translate.TranslateElement({
            pageLanguage: "pt",
            includedLanguages: "en,es,de,fr,it,ja,ko", // Idiomas disponíveis
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, "google_translate_element");
    }
}
