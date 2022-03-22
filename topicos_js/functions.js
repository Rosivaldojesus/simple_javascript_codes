// Functions: O nome da função é formando por um (verbo + substantivo)
let corSite = "Azul";

// Dentro de (cor, tonalidade ) é onde vai os parâmetros
function resetaCor(cor, tonalidade) {
    corSite = cor +' ' + tonalidade; // O + serve para concatenar
}

console.log(corSite)
resetaCor("Vermelho", "Escuro")
console.log(corSite)

//=======================================================

// As funcções realizar um tarefa

// ==> Função que realizar uma tarefa, mas não devolve nada <==
function dizerNome(){
    console.log('Rosivaldo ')
}
dizerNome()


// ==> Função que executa uma ação e retorna um resultado <==
function multiplicarPorDois(valor) {
    return valor * 2
}
// Exibindo o resultado da função
console.log(multiplicarPorDois(7))

// Colocando o valor da função dentro de uma variável
let resultado = multiplicarPorDois(3)
console.log(resultado)

