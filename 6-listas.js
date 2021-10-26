console.log(`Trabalhando com listas`);

// const salvador = `salvador`;
// const saoPaulo = `São paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log("destinos: ");

// console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
)
//console.log(listaDeDestinos);

listaDeDestinos.push(`Curitiba`); //adicionando elemento a lista

listaDeDestinos.splice(1,1); //exluindo um elemento
console.log(listaDeDestinos);
console.log(listaDeDestinos[2]); //imprime a posição específica



