//Função para gerar números aleatórios
function gerar(){
    const aleatorio = Math.floor((Math.random() * 99999999) + 10000000);
    
    //Condição para verificar se o número gerado não ultrapassa o limite de 8 digítos.
    if (aleatorio <= 99999999) {
     
        document.getElementById("resultado").innerHTML = aleatorio;
        
    }

    //Caso o número gerado ultrapasse a condição, ele gera um novo número.
    else {
        gerar();
        console.log('Reprocessou outro número'); 
    }
}

//Função utilizada para limpar a tela, caso o usuário queira.
function limpar(){
    location.reload();
}
