document.getElementById('btnBoogieWoogie').addEventListener('click', function() {
    // Som de palma (simulado visualmente)
    const body = document.body;
    
    // Adiciona a classe de animação de "flash"
    body.classList.add('swap-animation');
    
    // Tira a animação depois de 400ms para poder repetir
    setTimeout(() => {
        body.classList.remove('swap-animation');
    }, 400);

    // EFEITO BOOGIE WOOGIE: Troca as posições dos títulos
    let titulos = document.querySelectorAll('h1, h2');
    let texto0 = titulos[0].innerText;
    titulos[0].innerText = titulos[1].innerText;
    titulos[1].innerText = texto0;

    // Muda a cor da energia
    const root = document.querySelector(':root');
    root.style.setProperty('--azul-energia', '#ff00ea'); // Muda para rosa/roxo Takada-chan

    // Mostra a mensagem final no slide 8
    document.getElementById('status-amizade').classList.remove('hidden');
    
    console.log("BOOGIE WOOGIE ATIVADO! 👏");
});