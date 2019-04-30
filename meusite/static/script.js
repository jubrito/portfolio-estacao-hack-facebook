/*Fazer uma nav responsiva com um menu hamburguer que ao clicar apareça os links 

BÔNUS: Fazer com que o menu hamburguer ao clicar abre os links e transforma os tracinhos em X, e ao fechar o menu volta ao estado normal com os 3 tracinhos*/

let i = 0;
let botaoProx = document.querySelector(".proximo");
let botao = document.querySelector(".pop_up");
let popup = document.querySelector(".artes");
let imgFront = document.querySelector(".img_front");
let imgArte = document.querySelector(".arte");
let descricaoImgFront = document.querySelector(".texto_portfolio");
let descricaoArte = document.querySelector(".texto_arte");
let corpo = document.querySelector("body");
let menuHamburguer = document.querySelector(".menu_hamburguer");
let menuNav = document.querySelector(".menu_navegacao");
let traco = document.querySelector(".traco");
let menuX = document.querySelector(".menu_X");

let listaFront=[
    /* 0 */{url:'../static/imagens/front/1.png', tag: "Texto do Site 1"},
    /* 1 */{url:'../static/imagens/front/2.png', tag: "Texto do Site 2"},
    /* 2 */{url:'../static/imagens/front/3.png', tag: "Texto do Site 3"}
]

let listaDesign=[
    /* 0 */{url:'../static/imagens/design/1.png', tag: "Descrição Arte 1"},
    /* 1 */{url:'../static/imagens/design/2.png', tag: "Descrição Arte 2"},
    /* 2 */{url:'../static/imagens/design/3.png', tag: "Descrição Arte 3"}
]

function frontIterativo(){
    imgFront.src = listaFront[i].url;
    descricaoImgFront.innerHTML = listaFront[i].tag;
    i++;
    if (i==listaFront.length) i=0;
}

function designIterativo(){
    imgArte.src = listaDesign[i].url;
    descricaoArte.innerHTML = listaDesign[i].tag;
    i++;
    if (i==listaDesign.length) i=0;
    popup.classList.toggle("aparecerPopUp");
}

botaoProx.onclick = frontIterativo;
corpo.classList.add("botaoFront");/*adicionar/remover classes existentes no CSS*/

function abrirMenuHamburguer(){
    menuNav.classList.toggle("aparecerMenuNavegacao");
    menuHamburguer.classList.toggle("sumir_menu_hamburguer"); 
    menuX.classList.toggle("aparecer_menu_x");   
}

botao.onclick = designIterativo;
menuHamburguer.onclick = abrirMenuHamburguer;
menuX.onclick = abrirMenuHamburguer;