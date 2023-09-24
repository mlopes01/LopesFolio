// Captura o botão e a lista de links
const mostrarLinksButton = document.getElementById("mostrar-links");
const listaLinks = document.getElementById("lista-links");

// Adiciona um ouvinte de evento de clique ao botão
mostrarLinksButton.addEventListener("click", function () {
    // Verifica se a lista de links está visível ou não
    if (getComputedStyle(listaLinks).display === "none") {
        // Se estiver oculta, mostra a lista de links
        listaLinks.style.display = "block";
    } else {
        // Se estiver visível, oculta a lista de links
        listaLinks.style.display = "none";
    }

});

if (getComputedStyle(mostrarLinksButton).display === "none") {

    listaLinks.style.display = "none";
}




