"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPF extends Conta {
}
class ContaPJ extends Conta {
}
const cont1 = new ContaPF(123, "Matheus");
const cont2 = new ContaPJ(112233, "Cristiano");
console.log(cont1);
console.log(cont2);
