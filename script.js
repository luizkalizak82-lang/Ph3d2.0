document.addEventListener("DOMContentLoaded", function() {
    
    const auroraCursor = document.getElementById("aurora-glow");
    const counterElement = document.getElementById("live-counter");

    // 1. Aurora Boreal seguindo o cursor
    if (auroraCursor) {
        window.addEventListener("mousemove", function(e) {
            auroraCursor.style.left = e.clientX + "px";
            auroraCursor.style.top = e.clientY + "px";
        });
    }

    // 2. Contador Dinâmico travado rigorosamente entre 1 e 40
    let currentTraffic = Math.floor(Math.random() * (26 - 15 + 1)) + 15; // Início natural
    
    if (counterElement) {
        counterElement.textContent = currentTraffic;
        
        setInterval(function() {
            // Pequena variação na fila de atendimento (-3 a +3)
            const variance = Math.floor(Math.random() * 7) - 3;
            currentTraffic += variance;
            
            // Limitadores rígidos (Mínimo 1, Máximo 40)
            if (currentTraffic < 1) currentTraffic = 4;
            if (currentTraffic > 40) currentTraffic = 36;
            
            counterElement.textContent = currentTraffic;
        }, 4500); // Atualização suave a cada 4.5 segundos
    }
});
