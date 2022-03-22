// If...else

// Se a hora estiver entre 06:00 até 12:00 => Bom dia
// Se a hora estiver entre 12:00 até 18:00 => Boa tarde
// Caso contrário: Boa noite!

let hora = 10;

if ( hora > 6 && hora < 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

// Pega a hora
// Pegar do horário atual
// Pegar de uma data específica
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

console.log(today)