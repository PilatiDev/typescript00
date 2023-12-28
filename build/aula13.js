"use strict";
function soma(n1 = 0, n2 = 0) {
    return n1 + n2;
}
console.log(soma(2, 2));
function novoUser(user, pass, nome) {
    let dados = { user, pass, nome };
    console.log(dados);
    if (dados.nome === undefined) {
        console.log("testando");
    }
}
novoUser('br', '123');
