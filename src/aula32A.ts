//namespace
namespace Veiculos {
export class Carro1 { 
    nome:string;
    motor:Motores.Motor
    constructor(nome:string){
        this.nome = nome;
        this.motor = new Motores.Motor(Math.floor(Math.random()*400))
        }
    }
}

namespace Motores{

class Turbo{
    pot:number;
    constructor(pot:number){
        this.pot = pot;
    }
}
export class Motor { 
    pot:number;
    constructor(pot:number){
        this.pot = pot;
        }
    }
}

const c_1 = new Veiculos.Carro1("audi rs6")
console.log(c_1.motor);
