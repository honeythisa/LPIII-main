// Selecionar os elementos HTML que o JS irá manipular
let txtComentario = document.querySelector("#txtComentario");
let btnComentar = document.querySelector("#btnComentar");
let divComentarios = document.querySelector(".comentarios");
let selAcoes = document.querySelector("#selAcoes");

// Ações/Eventos que serão executadas
btnComentar.addEventListener("click", postarComentario);
selAcoes.addEventListener("change", administrarPost);




// Funções que serão chamadas pelas ações

function administrarPost () {
    let acao = selAcoes.value;

    alert(acao);
    
    selAcoes.value = "";
}

function postarComentario() {
    let coment = txtComentario.value;
    
    if (coment == ""){
        alert("Digite um comentário.");
        return;
    }

    let html = `
        <div class="comentario">
            <span class="autor">Isy</span>
            ${coment}
        </div>
    `;

    divComentarios.insertAdjacentHTML('beforeend', html);

    // Limpando a caixa de comentários
    txtComentario.value = "";
    
}