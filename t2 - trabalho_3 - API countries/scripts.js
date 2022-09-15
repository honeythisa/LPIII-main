let boxContainer = document.querySelector(".boxContainer");
let infoContainer = document.querySelector(".info");
boxContainer.innerHTML = '<option value="...">Escolha um país</option>';

let dados;

fetch("https://restcountries.com/v3.1/all")  
.then(resposta => resposta.json())          
.then(dados => imprimePaises(dados))
.catch(erro => console.log("Deu errado", erro)); 

boxContainer.addEventListener('change', infoPais);

function imprimePaises(paises) {
    paises.sort((a,b) => a.name.common.localeCompare(b.name.common));
    dados = paises

    for (let i = 0; i < dados.length; i++) {
        html = `
            <option value='${dados[i].name.common}'>${dados[i].name.common}</option>
        
        `;
        boxContainer.insertAdjacentHTML('beforeend',html);
    }
}

function infoPais(){
    let idPais = boxContainer.value;

    // caça o país pelo nome
    let infoPais = dados.find(pais => pais.name.common == idPais);
    console.log(infoPais);
    // for (let i = 0; i < infoPais.length; i++){
    let languages = Object.values(infoPais.languages);
    let moedas = Object.values(infoPais.currencies);

    let fronteiras = " ";
    for (let i = 0; i < infoPais.borders.length; i++) {
        fronteiras += `<a href = '#' onclick = "imprimeFronteiras('${infoPais.borders[i]}') "> ${infoPais.borders[i]} </a>`;
    }

        html = `
            <div> <img src="${infoPais.flags.png}"> </div>
            <div> Nome: ${infoPais.name.common} ${infoPais.flag}</div>
            <div> Capital: ${infoPais.capital}</div>
            <div> Continente: ${infoPais.region}</div>
            <div> População: ${infoPais.population.toLocaleString('pt-BR')}</div>
            <div> Área: ${infoPais.area.toLocaleString('pt-BR')}</div>
            <div> Fronteiras: ${fronteiras}</div>
            <div> Idiomas: ${languages}</div>
            <div> Moedas: ${moedas[0].name}</div>

        `;
        infoContainer.innerHTML = '';
        infoContainer.insertAdjacentHTML('beforeend',html);
    // }
}

function imprimeFronteiras(fronteiras) {
    console.log(fronteiras)
    fetch(`https://restcountries.com/v2/alpha/${fronteiras}?fields=name,flags, currenciws, capital,region,area,languages,populations,borders`)  
    .then(resposta2 => resposta2.json())          
    .then(dados2 => mudaPaisSelecionado(dados2))
    .catch(erro => console.log("Deu errado", erro)); 
}

function mudaPaisSelecionado(pais) {
    boxContainer.value = pais.name
    infoPais()
}