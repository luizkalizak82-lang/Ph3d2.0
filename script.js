document.addEventListener("DOMContentLoaded", function() {
    
    // Configuração do efeito de rastreamento da Aurora Boreal
    const cursorBg = document.getElementById("aurora-cursor");

    if (cursorBg) {
        window.addEventListener("mousemove", function(e) {
            // Atualiza a posição do efeito baseado na coordenada do mouse
            cursorBg.style.left = e.clientX + "px";
            cursorBg.style.top = e.clientY + "px";
        });
    }
});
