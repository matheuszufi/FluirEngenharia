// ALTERNATIVA SIMPLES - MAILTO
// Se preferir uma solução mais simples, substitua a função initContactForm() por esta:

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter dados do formulário
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Criar email
            const subject = `Nova mensagem do site - ${name}`;
            const body = `
Olá Fluir Engenharia,

Você recebeu uma nova mensagem através do site:

Nome: ${name}
Email: ${email}
Telefone: ${phone}

Mensagem:
${message}

---
Enviado através do formulário de contato do site.
            `.trim();
            
            // Criar link mailto
            const mailtoLink = `mailto:vinicius@fluirengenharia.onmicrosoft.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Abrir cliente de email
            window.location.href = mailtoLink;
            
            // Mostrar mensagem
            showMessage('Abrindo seu cliente de email...', 'success');
            
            // Limpar formulário após 2 segundos
            setTimeout(() => {
                contactForm.reset();
            }, 2000);
        });
    }
}
