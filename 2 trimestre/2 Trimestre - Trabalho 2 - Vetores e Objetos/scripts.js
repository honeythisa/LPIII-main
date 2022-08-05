let nome = console.log('Nome: ' + bd.nome, 'Resumo:' + bd.resumo, 'Notas:' + bd.nota);

let poster = console.log('Poster: ' + bd.fotoPoster);

let generos = console.log('Gêneros:' + bd.generos);

for (let i = 0; i < bd.elenco.length; i++) {
    console.log(bd.elenco[i].foto);
}

for (let i = 0; i < bd.temporadas.length; i++) {
    console.log('Temporada', bd.temporadas[i].numero);
    console.log(bd.temporadas[i].poster);
    console.log('Número episódios:', bd.temporadas[i].numero_episodios);
}

console.log("Nome dos episódios da 2 Temporada:");
for (let i = 0; i < bd.temporadas[1].episodios.length; i++) {
    console.log(bd.temporadas[1].episodios[i].nome);
}

