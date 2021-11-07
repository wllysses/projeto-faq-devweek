 // BUSCAR OS ITENS DA TELA
 const itensPerguntas = document.querySelectorAll('.item')
// ENTENDER QUE O ITEM FOI CLICADO
itensPerguntas.forEach(function(item) {
    item.addEventListener('click', function() {
        // VERIFICAR SE A PERGUNTA CLICADA ESTÁ ATIVA
        const estaAtiva = item.classList.contains('ativo')

        // FECHAR TODAS
        itensPerguntas.forEach(function(item) {
            item.classList.remove('ativo')
        })
        // SE A PERGUNTA NÃO ESTÁ ATIVA
        if (estaAtiva === false) {
            // ATIVAR E ABRIR A RESPOSTA ATUAL
            item.classList.add('ativo')

        // SE A PERGUNTA ESTIVER ATIVA  
        } else {
            // DESATIVAR (REMOVER A CLASSE 'ATIVO')
            item.classList.remove('ativo')
        
        }    
        
        
    })
})



