function gerar(){
    const aleatorio = Math.floor((Math.random() * 99999999) + 10000000);
    document.getElementById("resultado").innerHTML = aleatorio;
}

function limpar(){
    location.reload();
}
