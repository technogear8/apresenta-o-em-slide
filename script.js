document.addEventListener('DOMContentLoaded', () => {

    // Scroll suave no menu
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Aparecer seções ao rolar
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(sec => observer.observe(sec));

    // Botão interativo
    const btn = document.getElementById('btn-interativo');
    const msg = document.getElementById('mensagem');

    if (btn && msg) {
        btn.addEventListener('click', () => {
            msg.style.display = 'block';
            btn.textContent = 'Mudança Ativada! ⚡';
            setTimeout(() => {
                alert('Parabéns Arthur! Seu site ficou incrível! Vai ser o melhor da sala!');
            }, 1000);
        });
    }
});