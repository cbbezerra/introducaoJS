console.log("Trabalhando com condicionais");
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

listaDeDestinos.push(`Curitiba`);
console.log(listaDeDestinos);

const idadeComprador = 20;
const estaAcompanhada = true; //booleano
const temPassagemComprada = true

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1); // remove item
// } else if (estaAcompanhada) {
//     console.log("Está acompanhado")
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Não é maior de idade");
// }

// console.log(listaDeDestinos);

if (
    idadeComprador >= 18 || estaAcompanhada == true // || operador ou
    ) {
    console.log("Comprador maior de idade")
    listaDeDestinos.splice(2, 1); // remove item
} else {
    console.log("Não é maior de idade");
}

console.log("Embarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada){
    console.log("boa viagem!");
} else {
    console.log("Você não pode embarcar!")
}






