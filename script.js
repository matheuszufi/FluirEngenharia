// Animações profissionais para os cards de serviço

document.addEventListener('DOMContentLoaded', function () {
    const serviceCards = document.querySelectorAll('.card');
    serviceCards.forEach((card, idx) => {
        // Aparecer com fade e slide
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px) scale(0.96)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.7s cubic-bezier(.6,.2,.2,1), transform 0.7s cubic-bezier(.6,.2,.2,1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, 200 + idx * 180);

        // Hover animado com JS para efeito extra
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'box-shadow 0.3s, transform 0.3s';
            card.style.boxShadow = '0 16px 48px rgba(0,34,88,0.18)';
            card.style.transform = 'translateY(-10px) scale(1.04)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 4px 24px rgba(0,34,88,0.10)';
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Outras animações podem ser adicionadas aqui para outros elementos

// Animação dos depoimentos - mostrar 1 por vez no mesmo lugar em loop infinito
document.addEventListener('DOMContentLoaded', function() {
    const depoimentoCards = document.querySelectorAll('.depoimento-card');
    
    if (depoimentoCards.length === 0) return;
    
    let currentIndex = 0;
    const animationDuration = 3000; // 3 segundos cada depoimento
    
    // Inicialmente esconder todos os cards e posicionar
    depoimentoCards.forEach((card, index) => {
        card.classList.add('hidden');
        card.style.transform = 'translate(-50%, -50%) translateY(30px) scale(0.9)';
    });
    
    function showNextDepoimento() {
        // Esconder todos os cards primeiro
        depoimentoCards.forEach(card => {
            card.classList.remove('visible');
            card.classList.add('hidden');
        });
        
        // Mostrar o depoimento atual após um pequeno delay
        setTimeout(() => {
            depoimentoCards[currentIndex].classList.remove('hidden');
            depoimentoCards[currentIndex].classList.add('visible');
        }, 300); // Delay para suavizar a transição
        
        // Avançar para o próximo depoimento
        currentIndex = (currentIndex + 1) % depoimentoCards.length;
    }
    
    // Mostrar o primeiro depoimento imediatamente
    showNextDepoimento();
    
    // Continuar o loop infinito
    setInterval(showNextDepoimento, animationDuration);
});
