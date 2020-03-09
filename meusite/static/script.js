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
let linkGit = document.querySelector(".link_github");
let listaAulas=[
    /* 10 */{url:'../static/imagens/aulas/aula-11-criando-formulario-django.jpg', tag: "Aula 11 - Criando formulário com Django", link: "https://github.com/jubrito/Aula-11-Criando-formulario-django"},
    /* 9 */{url:'../static/imagens/aulas/aula-10-estrutura-basica-django.gif', tag: "Aula 10 - Criando a estrutura básica do Django", link: "https://github.com/jubrito/Aula-10-Estrutura-basica-django"},
    /* 8 */{url:'../static/imagens/aulas/aula-09-introducao-a-python.jpg', tag: "Aula 9 - Introdução a Python", link: "https://github.com/jubrito/Aula-09-Introducao-a-python"},
    /* 7 */{url:'../static/imagens/aulas/aula-08-criar-jogo-genius-simon.jpg', tag: "Aula 8 - Criar Jogo Genius/Simon", link: "https://github.com/jubrito/Aula-08-Criar-jogo-genius-simon"},
    /* 6 */{url:'../static/imagens/aulas/aula-07-manipulando-a-DOM.gif', tag: "Aula 7 - Manipulando a DOM", link: "https://github.com/jubrito/Aula-07-Manipulando-a-DOM"},
    /* 5 */{url:'../static/imagens/aulas/aula-06-funcoes-javascript.jpg', tag: "Aula 6 - Funções JavaScript", link: "https://github.com/jubrito/Aula-06-Funcoes-javascript"},
    /* 4 */{url:'../static/imagens/aulas/aula-05-reproduzindo-um-site.gif', tag: "Aula 5 - Reproduzir o site Notify", link: "https://github.com/jubrito/Aula-05-Reproduzindo-um-site"},
    /* 3 */{url:'../static/imagens/aulas/aula-04-responsividade.gif', tag: "Aula 4 - Responsividade", link: "https://github.com/jubrito/Aula-04-Responsividade"},
    /* 2 */{url:'../static/imagens/aulas/aula-03-elementos-da-grid.jpg', tag: "Aula 3 - Posicionamento dos elementos da Grid", link: "https://github.com/jubrito/Aula-03-Elementos-da-grid"},
    /* 1 */{url:'../static/imagens/aulas/aula-02-introducao-a-grid.gif', tag: "Aula 2 - Introdução a Grid ", link: "https://github.com/jubrito/Aula-02-Introducao-a-grid"},
    /* 0 */{url:'../static/imagens/aulas/aula-01-conceitos-basicos.jpg', tag: "Aula 1 - Criando arquivo com HTML, CSS JS", link: "https://github.com/jubrito/Aula-01-Conceitos-basicos"}
]
let imgFront = document.querySelector(".img_aulas");

function aulasIterativo(){
    imgFront.src = listaAulas[i].url;
    descricaoImgFront.innerHTML = listaAulas[i].tag;
    linkGit.href = listaAulas[i].link;
    i++;
    if (i==listaAulas.length) i=0;
}

botaoProx.onclick = aulasIterativo;
botaoProx.onmousedown = function () {
    botaoProx.src = '../static/imagens/mouse-on-click.png';
}
botaoProx.onmouseup = function () {
    botaoProx.src = '../static/imagens/mouse-off-click.png';
}

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
