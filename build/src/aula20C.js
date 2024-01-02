"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular:${this.titular}`);
        console.log(`Número.:${this.numero}`);
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF Criada: ${titular}`);
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ Criada: ${titular}`);
    }
}
const cont1 = new ContaPF(111123, "Matheus");
const cont2 = new ContaPJ(222, "Cristiano");
cont1.info();
