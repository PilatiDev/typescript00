"use strict";
class Comput0 {
    nome = "Computador 1";
    ram = 0;
    cpu = 0;
    ligado = false;
}
const computa1 = new Comput0();
const computa2 = new Comput0();
const computa3 = new Comput0();
comp1.nome = "Sonic";
comp2.nome = "Caro";
comp3.nome = "Gamer";
console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome);
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
