document.addEventListener('DOMContentLoaded', () => {

    // Scroll suave ao clicar nos links do menu
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animações aparecendo ao rolar a página
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => observer.observe(section));

    // Efeito do botão
    const btn = document.getElementById('btn-interativo');
    const msg = document.getElementById('mensagem');

    btn.addEventListener('click', () => {
        msg.style.display = 'block';
        btn.textContent = 'Energia Máxima Ativada! ⚡🔥';
        setTimeout(() => {
            alert('Arthur, seu site está top demais! Vai arrasar na apresentação! 🚀');
        }, 1500);
    });
});