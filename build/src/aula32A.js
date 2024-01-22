"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro1 {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(Math.floor(Math.random() * 400));
        }
    }
    Veiculos.Carro1 = Carro1;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    class Motor {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const c_1 = new Veiculos.Carro1("audi rs6");
console.log(c_1.motor);
