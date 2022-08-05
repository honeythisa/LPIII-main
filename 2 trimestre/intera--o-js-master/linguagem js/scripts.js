// scrips.js

// VARIAVEIS
// number (int, float), string, boolean, function, null

let nome = "João"; // let permite mudar o valor
const sobrenome = "Silva"; // const não muda o valor

let idade = 17;

nome = "MEL"
console.log(idade)

// Operadores 

// Matemáticos: +, -, *, /, %
let anoAtual = 2022
let anoNascimento = 2005
let anoDeVida = anoAtual - anoNascimento

let precoTotal = 0
let precoProduto = 10.9
let frete = 29.9
precoTotal = precoProduto + frete

// Concatenação: + (juntar dois textos)
let nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto)

// Operadores Lógicos: && (E), || (OU), !(NEGAÇÃO)

// Operadores Relacionais: >, <, >=, <=, == (igual a), != (diferente)

// Estruturas Condicionais
// IF
console.log("##### IF #####")

idade = 5
if ( idade >=18 ) {
    console.log ("Maior de idade");
    console.log ("Pode entrar");
} else {
    console.log("Menor de idade");
    console.log ("Não pode entrar");
}

if ( idade < 16 ) {
    console.log ("Não pode votar")
} else if ( idade < 18 || idade > 65 ) {
    console.log("Voto opcional");
} else {
    console.log ("Voto obrigatorio");
}

// SWITCH CASE
console.log("##### SWITCH... CASE #####");

let estado = "MT";
switch ( estado ) {
    case "MG":
    case "SP":
    case "RJ":
    case "ES":
        console.log("Sudeste");
        break;

    case "GO":
    case "MT":
    case "MS":
        console.log("Centro Oeste");
        break;

    default: 
        console.log("Brasileiro");
        break;
}

// While
console.log("##### WHILE #####");

let i = 1;
while ( i < 5 ) {
    console.log(i);

    i = i + 1;
}

/*let continua = true;
while ( continua == true);*/




//melissa.teodoro@estudante.iftm.edu.br

// FOR
// for (valor inicial da variavel; condição de repetição; incremento/decremento)
console.log("##### FOR #####");

for (let i = 0; i <= 10; i++){
    console.log(i);
}

// FUNÇÕES
function somar(n1, n2) {
    let resultado = n1 + n2;
    return resultado
}

let adicao = somar(10, 20);
console.log( adicao );