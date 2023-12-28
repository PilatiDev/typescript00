"use strict";
class Compu1 {
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
}
const comput1 = new Computador("Sonic", 64, 10, 2021);
const comput2 = new Computador("Caro", 32, 7, 2023);
const comput3 = new Computador("Gamer", 128, 10, 2024);
