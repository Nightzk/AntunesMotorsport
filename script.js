// Função para abrir o modal
function abrirModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex'; // Flex para centralizar o conteúdo
    modal.classList.add('fade-in');
    setTimeout(() => modal.classList.remove('fade-in'), 500); // Remove a classe após a animação
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('fade-out');
    }, 500); // Sincroniza com a duração da animação
}

// Função do carrossel
let slideIndex = 0;

function moveCarousel(n) {
    const slides = document.querySelectorAll('.carousel-images img');
    slideIndex = (slideIndex + n + slides.length) % slides.length;

    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
        slide.classList.remove('fade-in'); // Remove a animação existente
        if (index === slideIndex) slide.classList.add('fade-in'); // Adiciona animação ao slide atual
    });
}

// Inicializar carrossel
document.addEventListener('DOMContentLoaded', () => {
    moveCarousel(0); // Exibe o primeiro slide
    setInterval(() => moveCarousel(1), 5000); // Avança automaticamente a cada 5 segundos
});

// Validação do formulário de agendamento
document.getElementById('form-agendamento').addEventListener('submit', (e) => {
    e.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const servico = document.getElementById('servico').value;

    if (!nome || !email || !servico) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!validarEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    alert(`Obrigado, ${nome}! Seu agendamento para o serviço de ${servico} foi enviado com sucesso.`);
    fecharModal();
    document.getElementById('form-agendamento').reset(); // Limpa os campos do formulário
});

// Validação básica de e-mail
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validação do formulário de contato
document.getElementById('form-contato').addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome-contato').value.trim();
    const email = document.getElementById('email-contato').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!validarEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
    document.getElementById('form-contato').reset(); // Limpa os campos do formulário
});

// Animações ao rolar a página
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
            }
        });
    },
    { threshold: 0.2 } // Ativa quando 20% do elemento está visível
);

document.querySelectorAll('section').forEach((section) => observer.observe(section));
