const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp')


// Função que verifica se a lâmpada está quebrada
function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

// Função que liga a lâmpada
function lampOn() {
    if (!isLampBroken () ) {
        lamp.src = './img/ligada.jpg';
    }
}

// Função que desliga a lâmpada
function lampOff() {
    if (!isLampBroken() ) {
        lamp.src = './img/desligada.jpg'
    }
}

// Função que quebra a lâmpada
function lampBroken() {
    if (!isLampBroken() ) {
        lamp.src = './img/quebrada.jpg'
    }
}

turnOn.addEventListener('click', lampOn); // Chamada da função liga
turnOff.addEventListener('click', lampOff); // Chamada da função desliga
lamp.addEventListener('mouseover', lampOn); // Chamada da função liga com mouse
lamp.addEventListener('mouseleave', lampOff); // Chamada da função desliga com mouse
lamp.addEventListener('dblclick', lampBroken); // Chamada que quebra a lâmpada
