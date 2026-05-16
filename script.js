document.addEventListener("DOMContentLoaded", function() {
    
    const auroraCursor = document.getElementById("aurora-glow");
    const counterElement = document.getElementById("live-counter");

    // 1. Aciona a luz da Aurora Boreal seguindo o movimento do ponteiro
    if (auroraCursor) {
        window.addEventListener("mousemove", function(e) {
            auroraCursor.style.left = e.clientX + "px";
            auroraCursor.style.top = e.clientY + "px";
        });
    }

    // 2. Lógica estável do contador dinâmico (Faixa controlada entre 1 e 40)
    let currentTraffic = Math.floor(Math.random() * (28 - 14 + 1)) + 14; // Inicia estável no meio da faixa
    
    if (counterElement) {
        counterElement.textContent = currentTraffic;
        
        setInterval(function() {
            // Gera pequenas oscilações (-3, -2, -1, 0, 1, 2, 3) para parecer real
            const variance = Math.floor(Math.random() * 7) - 3;
            currentTraffic += variance;
            
            // Garante estritamente que os limites fiquem travados na faixa de 1 a 40
            if (currentTraffic < 1) currentTraffic = 4;
            if (currentTraffic > 40) currentTraffic = 35;
            
            counterElement.textContent = currentTraffic;
        }, 4000); // Atualiza suavemente a cada 4 segundos
    }
});
