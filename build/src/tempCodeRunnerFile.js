"use strict";
class Compu {
    nome;
    ram;
    cpu;
    ano;
    ligado = false;
    constructor(nome, ram, cpu, ano) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ano = ano;
        this.ligado = false;
    }
    info() {
        console.log(`Nome:${this.nome}`);
        console.log(`Ram:${this.ram}`);
        console.log(`CPU:${this.cpu}`);
        console.log(`Ano:${this.ano}`);
        console.log(`Ligado:${this.ligado ? "Sim" : "Não"}`);
        console.log("\n");
    }
    ligar() {
        this.ligado = true;
    }
    desligado() {
        this.ligado = false;
    }
}
const compu1 = new Computador("Sonic", 64, 10, 2021);
const compu2 = new Computador("Caro", 32, 7, 2023);
const compu3 = new Computador("Gamer", 128, 10, 2024);
console.log(compu1.nome);
compu1.nome = "Cristiano Ronaldo";
console.log(compu1.nome);
