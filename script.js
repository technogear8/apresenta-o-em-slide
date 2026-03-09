// Selecionando os elementos
const clapBtn = document.getElementById('clapBtn');
const statusMsg = document.getElementById('status');
const body = document.body;

// Função que simula o Boogie Woogie
clapBtn.addEventListener('click', () => {
    
    // 1. Efeito visual de "Flash" na tela (como o estalo de dedos)
    body.style.filter = 'invert(1)';
    
    setTimeout(() => {
        body.style.filter = 'invert(0)';
        
        // 2. Troca as cores do tema (Azul para Roxo)
        const corAtual = getComputedStyle(document.documentElement).getPropertyValue('--azul-energia');
        document.documentElement.style.setProperty('--azul-energia', '#a200ff');
        
        // 3. Mostra a mensagem secreta no último slide
        statusMsg.style.display = 'block';
        
        // 4. Mensagem de Alerta ao estilo Todo
        alert("BROTHER! A técnica foi ativada. Agora somos um só time!");
        
        // Scroll automático para o final como se tivesse sido "teleportado"
        document.getElementById('slide8').scrollIntoView({ behavior: 'smooth' });

    }, 150); // O flash dura 150 milissegundos
});