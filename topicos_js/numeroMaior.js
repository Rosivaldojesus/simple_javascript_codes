// Escreva uma funçõa que usa 2 números e retorna o maior entre eles

let valorMaior = maior(8,12)

function maior(num1, num2) {
    if(num1 > num2)
        return num1;
    else
        return num2    
}

console.log(valorMaior)

// Usando o número ternário

function max(num1, num2) {
    // Tradução: 'num1' é maior que 'num2' '?' se sim imprima 'num1' ':'se não imprima 'num2'
    return num1 > num2 ? num1: num2
} 

console.log(valorMaior)