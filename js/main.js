window.onload = () => {
    "use string";
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js");
    }
}

let JogadorVez =  document.querySelector(".JogadorVez"); //Retorna o primeiro elemento dentro do documento

let seleciona;
let x = "X";

let posicoesPossiveis = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [3,5,7],
];

function comecar(){
    seleciona = [];

    JogadorVez.innerHTML = `Jogador é: ${x}`;

    document.querySelectorAll(".JogoVelha button").forEach((item) => { //seleciona tudos os botoes da div Jogovelha 
      item.innerHTML = "";  //inicia com o innerHTML vazio, pq ninguem comecou
      item.addEventListener("click", newMove)
    })
}

comecar();

function newMove(e) { //função dos botoões
    const index = e.target.getAttribute("id");
    e.target.innerHTML = x;
    e.target.removeEventListener("click", newMove);
    seleciona[index] = x;

    setTimeout(() => {
        check();
    }, [100]);

    x = x === "X" ? "O" : "X";
    JogadorVez.innerHTML = `Jogador é: ${x}`;
}

function check() { //função de checar, revisa quem jogou por ultimo e mostra caso de empate
    let ultimoJogador = x === "X" ? "O" : "X";

    const quadradinhos = seleciona
    .map((item, i) => [item, i])
    .filter((item) => item[0] === ultimoJogador)
    .map((item) => item[1])

    for(pos1 of posicoesPossiveis) { //for de verificação da vez do jogador
        if(pos1.every((item) => quadradinhos.includes(item))){
        alert("O Jogador'" + ultimoJogador + "'venceu");
        comecar();
        return;
        }
    }

    if(seleciona.filter((item) => item).length === 9){//caso de empate
        alert("Empatou!!");
        comecar();
        return;
    }
}