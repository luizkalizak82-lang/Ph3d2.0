document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("live-counter");

    // Mantém o monitor ativo variando de forma realista entre 1 e 40
    let currentTraffic = Math.floor(Math.random() * (25 - 12 + 1)) + 12;
    
    if (counterElement) {
        counterElement.textContent = currentTraffic;
        
        setInterval(function() {
            const variance = Math.floor(Math.random() * 5) - 2; // Variação suave (-2 a +2)
            currentTraffic += variance;
            
            if (currentTraffic < 1) currentTraffic = 3;
            if (currentTraffic > 40) currentTraffic = 37;
            
            counterElement.textContent = currentTraffic;
        }, 5000);
    }
});
