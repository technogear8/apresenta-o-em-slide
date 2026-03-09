// Espera o documento carregar
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão pelo ID
    const botao = document.getElementById("btnInterativo");

    // Adiciona o evento de clique
    botao.addEventListener("click", function() {
        // 1. Mostra um alerta (interatividade simples)
        alert("Obrigado por se interessar pelo futuro do nosso planeta! 🌱");

        // 2. Muda a cor de fundo do site aleatoriamente (efeito visual)
        document.body.style.backgroundColor = "#e0f2fe"; // Muda para um tom de azul claro
        
        // 3. Muda o texto do botão
        botao.innerText = "Sustentabilidade Ativada! ✨";
        botao.style.backgroundColor = "#2d6a4f"; // Muda para verde escuro
    });
});