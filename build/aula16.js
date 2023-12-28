"use strict";
class Carro {
    modelo;
    ano;
    constructor(modelo, ano) {
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirDetalhes() {
        console.log(`Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}
const meuCarro = new Carro("Sedan", 2022);
meuCarro.exibirDetalhes();
