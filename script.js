// Efeito interativo simples e legal: botão revela mensagem + muda cor
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn-revelar');
    const dica = document.getElementById('dica-oculta');

    btn.addEventListener('click', () => {
        if (dica.style.display === 'block') {
            dica.style.display = 'none';
            btn.textContent = 'Descubra o que podemos fazer!';
            btn.style.background = '#D32F2F';
        } else {
            dica.style.display = 'block';
            btn.textContent = 'Legal, né? Agora é com você!';
            btn.style.background = '#388E3C'; // muda para verde ao revelar
        }
    });
});