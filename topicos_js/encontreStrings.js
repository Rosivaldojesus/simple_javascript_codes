// Criar um método para ler propriedades de um objeto e exibir somente as 
// prorpriedades do tipo string que estão nesse objeto

const filme = {
    titulo: 'Vingadores',
    ano: 2020,
    diretor: 'Willian',
    personagem: 'Thor'
}

function exibirPropriedades(obj){
    for (prop in obj) 
        if (typeof obj[prop] === 'string')    
            console.log(prop, obj[prop])
    
}

exibirPropriedades(filme)