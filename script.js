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

// Portfolio Carousel com efeito de z-index
document.addEventListener('DOMContentLoaded', function() {
    
    // Função para inicializar carousel
    function initCarousel(carouselId, prevBtnId, nextBtnId, indicatorsId) {
        const carousel = document.getElementById(carouselId);
        if (!carousel) return;
        
        const slides = carousel.querySelectorAll('.portfolio-card');
        const prevBtn = document.getElementById(prevBtnId);
        const nextBtn = document.getElementById(nextBtnId);
        const indicators = document.getElementById(indicatorsId);
        const indicatorBtns = indicators ? indicators.querySelectorAll('.indicator') : [];
        
        if (slides.length === 0) return;
        
        let currentIndex = 0;
        
        function updateCarousel() {
            // Limpar todas as classes primeiro
            slides.forEach((slide, index) => {
                slide.classList.remove('active', 'prev', 'next');
            });
            
            // Definir posições baseadas no índice atual
            slides.forEach((slide, index) => {
                if (index === currentIndex) {
                    slide.classList.add('active');
                } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                    slide.classList.add('prev');
                } else if (index === (currentIndex + 1) % slides.length) {
                    slide.classList.add('next');
                }
            });
            
            // Atualizar indicadores
            indicatorBtns.forEach((btn, index) => {
                btn.classList.toggle('active', index === currentIndex);
            });
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }
        
        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        }
        
        function goToSlide(index) {
            if (index >= 0 && index < slides.length) {
                currentIndex = index;
                updateCarousel();
            }
        }
        
        // Event listeners apenas para interação manual
        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                nextSlide();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.preventDefault();
                prevSlide();
            });
        }
        
        indicatorBtns.forEach((btn, index) => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                goToSlide(index);
            });
        });
        
        // Inicializar com o primeiro slide sempre ativo
        currentIndex = 0;
        updateCarousel();
        
        // Garantir que sempre há uma imagem ativa após pequeno delay
        setTimeout(() => {
            if (!carousel.querySelector('.portfolio-card.active')) {
                currentIndex = 0;
                updateCarousel();
            }
        }, 100);
    }
    
    // Inicializar ambos os carousels
    initCarousel('portfolioCarousel', 'prevBtn', 'nextBtn', 'carouselIndicators');
    initCarousel('portfolioCarousel2', 'prevBtn2', 'nextBtn2', 'carouselIndicators2');
});
