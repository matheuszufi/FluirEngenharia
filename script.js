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
