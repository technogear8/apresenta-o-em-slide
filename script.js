// Selecionamos o botão e a área de saída
const btn = document.getElementById('btnComando');
const output = document.getElementById('terminal-output');

// Função que simula o processamento do Linux
btn.addEventListener('click', () => {
    // Limpa a saída anterior
    output.innerText = "Conectando aos servidores...";
    
    // Adiciona um delay para parecer real
    setTimeout(() => {
        output.innerHTML = `
            <span style="color: white;">[OK]</span> Lendo listas de pacotes...<br>
            <span style="color: white;">[OK]</span> Construindo árvore de dependências...<br>
            <span style="color: #00ffff;">SISTEMA ATUALIZADO!</span> Você está pronto para programar.
        `;
        
        // Efeito sonoro visual (muda a borda do terminal)
        output.style.border = "2px solid #00ffff";
    }, 1500);
});

});