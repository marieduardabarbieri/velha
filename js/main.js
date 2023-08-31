window.onload = () => {
    "use string";
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js");
    }
}

let JogadorVez =  document.querySelector(".JogadorVez"); //Retorna o primeiro elemento dentro do documento

let seleciona;
let x = "X";

let posicoesPossiveis =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [3,5,7]
]

function comecar(){
    seleciona = [];

    JogadorVez.innerHTML = `Jogador é: ${x}`;

    document.querySelectorAll(".JogoVelha button").forEach((item) => { //seleciona tudos os botoes da div Jogovelha 
      item.innerHTML = "";  //inicia com o innerHTML vazio, pq ninguem comecou
      item.addEventListener("click", newMove)
    })
}