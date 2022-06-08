/*
Troque todos os elementos pares e diferentes de zero de uma array pelo número 0.
Se o array for vazio, retorne -1.
*/

function substituiPares(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log('Você já é zero!');
        } else if (array[i] % 2 == 0){
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0
        }
    }
    return array;
}

var array = [1, 2, 3, 33, 5, 6, 7, 80, 90];
substituiPares(array);
console.log(substituiPares(array))



