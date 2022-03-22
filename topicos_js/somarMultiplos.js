// Criar uma função que retorna a soma de todos os múltiplos de 3 e 5

// Quais são so múltiplos
// ====> 4: 3,6,9
// ====, 5: 5, 10

// Somando os múltiplos
// ==> Armazena os múltiplos de 3
// ==> Armazena os múltiplos de 5
// Soma os dois

somar(10);

function somar(limite){
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for (i=0; i <= limite; i++){
        if( i % 3 === 0)
        multiplosDe3 +=  i;

        if (i % 5 === 0)
        multiplosDe5 += i;
    }
    console.log(multiplosDe3 + multiplosDe5)
}

