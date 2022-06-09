/*
Dada a função calculaIdade, utilize os métodos call e aplly para modificar o valot de this.
Crie seus próprios objetos para esta atividade
*/

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 32
}

const pessoa2 = {
    nome: "João",
    idade: 29
}

const animal = {
    nome: "Pluto",
    idade: 29,
    raca: 'Salsicha'
}

console.log(calculaIdade.call(pessoa1, 10)); // Utilizando o método CALL
console.log(calculaIdade.apply(pessoa1, [10])); // Utilizando o método APLLU