// Selecionando os elementos que vamos usar
const botao = document.getElementById('btnInterativo');
const mensagem = document.getElementById('mensagemOculta');

// Função que roda quando o botão é clicado
botao.addEventListener('click', function() {
    
    // 1. Muda o texto da mensagem
    mensagem.innerText = "MY BESTO FRIENDO! Você ativou o Boogie Woogie!";
    
    // 2. Muda a cor da fonte da mensagem para Ciano
    mensagem.style.color = "#00ffff";
    mensagem.style.marginTop = "20px";
    mensagem.style.fontSize = "1.5rem";

    // 3. Efeito Visual: Muda a cor de fundo do corpo do site temporariamente
    document.body.style.backgroundColor = "#220000"; // Vermelho escuro
    
    setTimeout(() => {
        document.body.style.backgroundColor = "#000"; // Volta para o preto após 1 segundo
    }, 1000);

    // Alerta no navegador
    alert("Técnica Ativada: Sangue e Aço!");
});