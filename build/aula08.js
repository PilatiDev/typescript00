"use strict";
let dados = {
    nome: "Douglinhas",
    idade: 25,
    status: "Ativo",
    ola: () => { console.log("Olá!"); },
    info: (p) => {
        console.log(p);
    }
};
console.log(typeof (dados));
console.log(dados);
dados.ola();
dados.info("uiui zap");
