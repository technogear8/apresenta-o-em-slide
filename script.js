// Espera o documento carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Pega o botão pelo ID
    const button = document.getElementById('interact-button');
    
    // Pega a mensagem escondida pelo ID
    const message = document.getElementById('message');
    
    // Adiciona um evento de clique ao botão
    button.addEventListener('click', function() {
        // Mostra a mensagem (muda display de none para block)
        message.style.display = 'block';
        
        // Muda a cor do botão para um vermelho mais escuro (efeito visual)
        button.style.backgroundColor = '#cc0000';
        
        // Exemplo de alerta opcional: alert('Você clicou! A IA é incrível!');
    });
});