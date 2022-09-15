function quadrado(n) {
        return n * n;
}

let num = 4;
let quad = quadrado(4);
print(quad)

// => 
// isso é uma arrow function

print("map", true)
print("Ele percorre o vetor completo e, para cada elemento, chama uma função e passa esse elemento como parâmentro para essa função. Ao final ele retorna um novo vetor com os resultados das chamadas de funções.")



let lista = [2, 3, 4, 5];
let listaQuadrados = lista.map(quadrado)
print(listaQuadrados.join('; '))

/* é isso que acontece, o map percorre cada posicao
listaQuadrados[0] = quadrado(2)
listaQuadrados[1] = quadrado(3)
listaQuadrados[2] = quadrado(4)
listaQuadrados[3] = quadrado(5) */

/*let listaCubo = lista.map(function(n) {
    return n * n * n;
} )
print(listaCubo.join('; ')) */

let listaCubo = lista.map( (n) => n * n * n )
print(listaCubo.join('; '))

print("every", true)
print("Verifica se TODO elemento da lista passa no teste")
lista = [15, 18, 23]
let maiorDeIdade = lista.every( (item) => item >= 18);
if (maiorDeIdade) {
    print("Todos são maiores de idade")
} else {
    print("Nem todos são maiores de idade")
}

print("some", true)
print("Verifica se ALGUM elemento da lista passa no teste")
lista = [15, 18, 12]
maiorDeIdade = lista.some( (item) => item >= 18);
if (maiorDeIdade) {
    print("Alguém é maior de idade")
} else {
    print("Ninguém é maior de idade")
}

print("filter", true)
print("Percorre todos os elementos da lista e só retorna os elementos que passam no teste, criando assim um vetor de elementos que passaram no teste")
lista = [15, 18, 21, 10]
let listaMaiores = lista.filter( (item) => item >= 18)
print(listaMaiores)

let usuarios = [
    {nome: 'Wandinha', idade: '15'},
    {nome : 'Pugsley', idade: '14'},
    {nome : 'Thiago',  idade: '19'},
    {nome : 'Bruna',   idade: '32'},
    {nome : 'Carlos',  idade: '14'},
    {nome : 'Irma',    idade: '79'},
];

listaMaiores = usuarios.filter( (item) => item.idade >= 18)
listaMaiores.map( (item) => print(item.nome))

print("sort", true)
print("Ordena uma lista")
lista = [15, 18, 12]
lista.sort( (item1, item2) => item1 - item2)
print(lista.join('; '))

usuarios.sort( (item1, item2) => item1.nome.localeCompare(item2.nome))
usuarios.map( (item) => print(item.nome))






function print(msg, titulo) {
    let box = document.querySelector("#box")

    if ( titulo != undefined ) {
       box.innerHTML += "<h4>" + msg + "</h4>";
    } else {
        box.innerHTML += msg + "<br />";
    }
  
}