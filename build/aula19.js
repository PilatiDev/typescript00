"use strict";
class Computador {
    id;
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
        this.id = 0;
    }
    info() {
        console.log(`Nome:${this.nome}`);
        console.log(`Ram:${this.ram}`);
        console.log(`CPU:${this.cpu}`);
        console.log(`Ano:${this.ano}`);
        console.log(`Ligado:${this.ligado ? "Sim" : "Não"}`);
        console.log("--------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligado() {
        this.ligado = false;
    }
    upRam(qtd) {
        if (qtd >= 0 && qtd <= 1000) {
            this.ram = qtd;
        }
        else {
            console.log(`Quantidade: ${qtd} para o computador ${this.nome} não é permitida.`);
        }
    }
}
const comp1 = new Computador("Sonic", 64, 10, 2021);
const comp2 = new Computador("Caro", 32, 7, 2023);
const comp3 = new Computador("Gamer", 128, 10, 2024);
comp1.nome = "Super Sonic";
comp1.upRam(100);
comp1.ligar();
comp3.ligar();
comp1.desligado();
comp1.info();
comp2.info();
comp3.info();
