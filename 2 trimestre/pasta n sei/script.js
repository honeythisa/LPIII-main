// síncrono: uma ação é executada após o término de outra
// assíncrono: uma ação pode ser executada sem a anterior ter sido finalizada

// fetch -> permite realizar requisições assíncronas, como por exemplo: chamar uma API, baixar um arquivo, etc
// then -> chamado quando ele obtem sucesso
// catch -> um erro acontece


fetch("https://restcountries.com/v3.1/all")  // Promete que vai acessar o site
.then(resposta => resposta.json())           // Promete que vai transformar a resposta em json 
.then(dados => imprimePaises(dados))         // Chama a função passando os dados
.catch(erro => console.log("Deu errado", erro));  // Caso alguma promessa não seja cumprida

function imprimePaises(dados) {
    for (let i = 0; i < dados.length; i++){
        console.log(dados[i].flag, dados[i].name.common);
    }
}
