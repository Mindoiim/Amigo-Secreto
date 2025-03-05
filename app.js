//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos =[];
function atualizarListaDeAmigos(){
    let listaVisivel = document.getElementById("listaAmigos");
    listaVisivel.innerHTML = "";
    for( let i = 0; i < amigos.length; i++){
        let lista = document.createElement('li');
        lista.innerHTML = amigos[i];
        listaVisivel.appendChild(lista);
    }
}
function adicionarAmigo(){
    let nome = document.querySelector("input").value;
    if (nome != ""){
        amigos.push(nome);
        console.log(amigos[amigos.length - 1]);
        console.log(amigos);
    }
    else{
        alert("Por favor, insira um nome");
    }
    document.querySelector("input").value = "";
    atualizarListaDeAmigos();
}
    


