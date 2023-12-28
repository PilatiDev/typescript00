/* const car:{type:string, model:any, year:number, available:boolean}={
    type:"Toyota",
    model:"Corolla",
    year: 2023,
    available: true
};

car.type = "ford";
//car.type = 2; !error

console.log(car);
 */

let dados={
    nome:"Douglinhas",
    idade:25,
    status:"Ativo",
    ola:()=>{console.log("Olá!")},
    info:(p:string)=>{console.log(p)
    }
}


console.log(typeof(dados));
console.log(dados);

dados.ola();
dados.info("uiui zap");




