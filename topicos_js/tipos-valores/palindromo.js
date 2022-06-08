/*
Verifique de duas maneiras diferentes entre, se uma strin é um palíndromo.
*/


//Solução 1
function verificaPalindromo(string){
    if(!string) return "Insira um nome válido.";

    return string.split("").reverse().join("") === string;
}
//console.log(verificaPalindromo("ovo"));

//Solução 2
function verificaPalindromo2(string){
    if(!string) return "Insira um nome qualquer válido. Ex: roma";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false
        }

    }
    return true;
}

console.log(verificaPalindromo2("omo"))