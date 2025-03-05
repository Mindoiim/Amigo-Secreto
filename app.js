//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos =[];
let listaVisivel = document.getElementById("listaAmigos");
function atualizarListaDeAmigos(){
    listaVisivel.innerHTML = "";
    for ( let i = 0; i < amigos.length; i++){
        let lista = document.createElement('li');
        lista.innerHTML = amigos[i];
        listaVisivel.appendChild(lista);
    }
}
function adicionarAmigo(){
    let nome = document.querySelector("input").value;
    if(nome != ""){
        amigos.push(nome);
    }
    else{
        alert("Por favor, insira um nome");
    }
    document.querySelector("input").value = "";
    atualizarListaDeAmigos();
}
function sortearAmigo(){
    if (amigos.length != 0){
        listaVisivel.innerHTML = "";
        let indiceAleatório = (Math.floor(Math.random() * amigos.length));
        let nomeSorteado = amigos[indiceAleatório];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `O amigo secreto sorteado é: ${nomeSorteado}`;
        amigos = [];
    }
    else{
        alert("A lista está vazia");
    }
}



