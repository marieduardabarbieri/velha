window.onload = () => {
    "use string";
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js");
    }
}

let posicoesPossiveis = [
    [1,2,3],  [4,5,6], 
    [7,8,9],  [1,5,9], 
    [1,4,7],  [2,5,8],
    [3,6,9],  [3,5,7],
];

let JogadorVez =  document.querySelector(".JogadorVez");//Retorna o primeiro elemento dentro do documento
let empate =  document.getElementById("empate"); 
let clica;
let x = "X";

function comecar(){
    clica = [];
    JogadorVez.innerHTML = `Quem joga é: ${x}`;
    document.querySelectorAll(".JogoVelha button").forEach((quadrados) => { //seleciona tudos os botoes da div Jogovelha 
        quadrados.innerHTML = "";  //inicia com o innerHTML vazio, pq ninguem comecou
        quadrados.addEventListener("click", newMove)
    })
}comecar();


function newMove(e) { //função dos botoões
    const index = e.target.getAttribute("id");
    e.target.innerHTML = x;
    e.target.removeEventListener("click", newMove);
    clica[index] = x;

    x = x === "X" ? "O" : "X";
    JogadorVez.innerHTML = `Quem joga é: ${x}`;

    setInterval(() => {
        checaQuad();
    } );
}

function checaQuad() { //função de checar, revisa quem jogou por ultimo e mostra caso de empate
    let ultimoJogador = x === "X" ? "O" : "X";

    const quadradinhos = clica
    .map((quadrados, i) => [quadrados, i])
    .filter((quadrados) => quadrados[0] === ultimoJogador)
    .map((quadrados) => quadrados[1])

    for(pos1 of posicoesPossiveis) { //for de verificação da vez do jogador
        if(pos1.every((quadrados) => quadradinhos.includes(quadrados))){
        alert("O Jogador " + ultimoJogador + " venceu!!");
        comecar();
        return;
        
        } setInterval(() => location.reload(), 5000)
    }

    if(clica.filter((quadrados) => quadrados).length === 9){//caso de empate
        empate.innerHTML = "O jogo empatou"
        comecar();
        return;
    } setInterval(() => location.reload(), 5000)
}