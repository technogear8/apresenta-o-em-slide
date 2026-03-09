// Espera o documento carregar
document.addEventListener('DOMContentLoaded', () => {
    
    const botao = document.getElementById('btnInterativo');
    const mensagem = document.getElementById('mensagemOculta');

    // Adiciona o evento de clique
    botao.addEventListener('click', () => {
        // Efeito 1: Mudar a cor de fundo do botão
        botao.style.backgroundColor = '#28a745'; // Muda para verde
        botao.innerText = 'Ativado!';

        // Efeito 2: Mostrar uma mensagem de agradecimento no último slide
        mensagem.classList.remove('hidden');
        
        // Efeito 3: Alerta simples para o usuário
        alert('Obrigado por interagir! O conteúdo foi desbloqueado no final da página.');
        
        // Scroll suave até a mensagem que apareceu
        mensagem.scrollIntoView({ behavior: 'smooth' });
    });
});