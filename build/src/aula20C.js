"use strict";
class Conta {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular:${this.titular}`);
        console.log(`Número.:${this.numero}`);
    }
    saldo() {
        return this.saldoConta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        if (valor <= this.saldoConta) {
            this.saldoConta -= valor;
        }
        else {
            console.log(`saldo insuficiente`);
        }
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = this.gerarNumeroConta();
    }
    info() {
        console.log(`Tipo...:PF`);
        super.info();
        console.log(`Cpf...:${this.cpf}`);
        console.log("------------------");
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log(`Valor de depósito muito alto para este tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 1000) {
            console.log(`Valor de saque muito alto para este tipo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = this.gerarNumeroConta();
    }
    info() {
        console.log(`Tipo...:PJ`);
        super.info();
        console.log(`CNPJ..:${this.cnpj}`);
        console.log("------------------");
    }
    deposito(valor) {
        if (valor >= 20000) {
            console.log(`Valor de depósito muito alto para este tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 20000) {
            console.log(`Valor de saque muito alto para este tipo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
}
const cont1 = new ContaPF(111123, "Matheus");
const cont2 = new ContaPJ(222, "Cristiano");
cont1.deposito(200);
cont1.deposito(800);
cont1.deposito(1000);
console.log(`Saldo disponível:`);
console.log(cont1.saldo());
console.log(`Sacando 500 reais`);
cont1.saque(500);
console.log(cont1.saldo());
