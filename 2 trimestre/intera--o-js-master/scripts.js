// Localizar os elementos HTML que serão acessados
let box = document.getElementById("box");
let btnTeste = document.getElementById("btnTeste");
let txtMsg = document.getElementById("txtMsg");
let btnEnviar = document.getElementById("btnEnviar");
let imgCoracao = document.getElementById("imgCoracao");

// Eventos
// elementosASerVigiado.addEventListener("evento", funcaoChamadaQuandoOEventoAcontecer)

btnTeste.addEventListener("click", botaoClicado);

imgCoracao.addEventListener("dblclick", like);

btnEnviar.addEventListener("click", enviarMensagem);

// Funções
function enviarMensagem() {
    // Pegando o conteúdo digitado no input
    let msg = txtMsg.value;

    // Alterando o conteúdo de Elemento HTML
    //box.innerHTML = "<h1>" + msg + "</h1>";

    box.innerHTML = box.innerHTML + "<br />" + msg;
}



function like() {
    // Pegar o atributo SRC da minha imagem
    let endereco = imgCoracao.getAttribute("src");

    if ( endereco == "coracao.png" ) {
        // Defino o atributo SRC
        imgCoracao.setAttribute("src", "coracao_red.png");
    }  else {
        imgCoracao.setAttribute("src", "coracao.png");
    }
}



function botaoClicado() {
    let cor = box.style.borderColor;

    if ( cor == "red" ) {
        box.style.borderColor = "#006699";
    } else {

        box.style.borderColor = "red";
    }
}