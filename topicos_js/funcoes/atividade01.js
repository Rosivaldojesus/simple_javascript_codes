/*
1. Crie uma função que recebe o array ALUNOS e um número que irá representar a média final:
2. Pecorra o array e popule um novo array auxiliar apenas os alunos cujas notas são maiores ou iguais à média final;
3. Utilize a técnica object destructing para manipular as propriedades desejadas de cada aluno.
*/
const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B'
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '1B'
    },
];


function alunosAprovados(arr, media){

    let aprovados = [];

    for(let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i]; // Destructing

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;

}

console.log(alunosAprovados(alunos, 6))