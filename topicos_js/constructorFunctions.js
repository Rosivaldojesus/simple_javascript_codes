function Celular (marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria
    this.ligar = function() {
        console.log("Fazendo Ligação...")
    }
}

const celular = new Celular('Xiomi', 5.5, 6000)
console.log(celular)