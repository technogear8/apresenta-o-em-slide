document.addEventListener('DOMContentLoaded', () => {

    // Scroll suave
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animações ao scroll
    const sections = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => observer.observe(section));

    // Botão épico
    const btn = document.getElementById('btn-interativo');
    const msg = document.getElementById('mensagem');

    btn.addEventListener('click', () => {
        msg.style.display = 'block';
        btn.textContent = 'Energia Máxima Ativada! ⚡🔥';
        btn.style.animation = 'none';
        setTimeout(() => { btn.style.animation = 'btnGradient 3s ease infinite'; }, 100);

        setTimeout(() => {
            alert('Arthur, seu site tá MUITO top top agora! Vai gabaritar o trabalho! 🚀💥');
        }, 1800);
    });
});