// Obter a média escolar

const array = [77, 70, 80];

function calcularMedia(parametro){
    let soma = 0;
    for (let valor of parametro){
        soma += valor
    }
    return soma/3
}
console.log(calcularMedia(array))