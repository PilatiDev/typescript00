"use strict";
function logar(user, pass) {
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
}
logar("gordox", "coxinha123");
function soma2(n1, n2) {
    let r = n1 + n2;
    return r;
}
let n_res = soma2(10, 5);
let s_res = soma2(2, 4).toString();
console.log(n_res);
console.log(typeof (s_res));
