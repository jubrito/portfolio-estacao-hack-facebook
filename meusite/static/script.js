/*Fazer uma nav responsiva com um menu hamburguer que ao clicar apareça os links 

BÔNUS: Fazer com que o menu hamburguer ao clicar abre os links e transforma os tracinhos em X, e ao fechar o menu volta ao estado normal com os 3 tracinhos*/

let i = 0;

/* ------------------------- MENU ------------------------- */
let menuHamburguer = document.querySelector(".menu_hamburguer");
let menuNav = document.querySelector(".menu_navegacao");
let traco = document.querySelector(".traco");
let menuX = document.querySelector(".menu_X");

function abrirMenuHamburguer(){
    menuNav.classList.toggle("aparecerMenuNavegacao");
    menuHamburguer.classList.toggle("sumir_menu_hamburguer"); 
    menuX.classList.toggle("aparecer_menu_x");   
}
menuHamburguer.onclick = abrirMenuHamburguer;
menuX.onclick = abrirMenuHamburguer;

/* ------------------------- AULAS ------------------------- */
let botaoProx = document.querySelector(".img_mouse");
let descricaoImgFront = document.querySelector(".texto_aulas");
let listaAulas=[
    /* 0 */{url:'../static/imagens/aulas/1.png', tag: "Aula 1 - Criando arquivo com HTML, CSS JS"},
    /* 1 */{url:'../static/imagens/aulas/2.png', tag: "Aula 2 - Introdução a Grid "},
    /* 2 */{url:'../static/imagens/aulas/3.png', tag: "Aula 3 - Posicionamento dos elementos da Grid"}
]
let imgFront = document.querySelector(".img_aulas");

function aulasIterativo(){
    botaoProx.src = '../static/imagens/mouse-on-click2.png';
    setTimeout(function(){ botaoProx.src = '../static/imagens/mouse-off-click.png'; }, 250);
    imgFront.src = listaAulas[i].url;
    descricaoImgFront.innerHTML = listaAulas[i].tag;
    i++;
    if (i==listaAulas.length) i=0;
}

botaoProx.onclick = aulasIterativo;
// corpo.classList.add("botaoFront"); /*adicionar/remover classes existentes no CSS*/

/* ------------------------- CERTIFICADOS -------------------------*/
let botaoProxCertificado = document.querySelector(".proximo-certificado");
let certificados = document.querySelector(".certificado");
let imgCertificados = document.querySelector(".img_certificados");
let corpo = document.querySelector("body");

let listaCertificados=[
    /* 0 */{url:'../static/imagens/certificados/certificado-2.jpg'},
    /* 1 */{url:'../static/imagens/certificados/certificado-1.jpg'}
]

function mostrarCertificados(){
    imgCertificados.src = listaCertificados[i].url;
    i++;
    if (i==listaCertificados.length) i=0;
}

botaoProxCertificado.onclick = mostrarCertificados;
