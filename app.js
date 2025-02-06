//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let friends = [];

function adicionarAmigo(){
    let friend_name = document.querySelector('input');

    if(friend_name.value == ""){
        alert('Por favor, insira um nome.');
    } else{
        friends.push(friend_name.value);
        console.log(friends);
        friend_name.value = "";
        mostrarNomes();
    }
};

function mostrarNomes(){
    let qtd_amigos = friends.length;
    console.log(friends.length);
    let x = 0;//contagem
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    while (x<qtd_amigos){
        lista.innerHTML = friends[x];
        x++;
    };
    

};

function sortearAmigo(){
    let result = document.getElementById('resultado')
    let num_amigos = friends.length -1
    let verificarVazio = num_amigos < 1 ? "sim":"não";

    if(verificarVazio == "não"){
        let num_sorteio =  parseInt(Math.random() * num_amigos + 1);
        result.innerHTML = friends[num_sorteio]
    }else{
        alert('Não há amigos na lista de amigos');
    };
}