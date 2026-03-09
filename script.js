// Aqui começa o arquivo JavaScript. Este adiciona interatividade, como efeitos ao clicar.

// Efeito simples: ao clicar no botão, mostra uma mensagem oculta e muda a cor do botão.
// Selecionamos os elementos pelo ID.
const botao = document.getElementById('botao-interativo');
const mensagem = document.getElementById('mensagem-oculta');

// Adiciona um evento de clique ao botão.
botao.addEventListener('click', function() {
    // Mostra a mensagem que estava oculta (muda display de none para block).
    mensagem.style.display = 'block';
    // Muda a cor de fundo do botão para preto como efeito visual.
    botao.style.backgroundColor = '#000000';
    // Muda o texto do botão para indicar que foi clicado.
    botao.textContent = 'Mensagem Mostrada!';
});

// Isso é um exemplo básico de interatividade. Você pode adicionar mais efeitos em outras partes se quiser expandir.