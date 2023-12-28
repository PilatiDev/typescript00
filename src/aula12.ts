function logar(user:string, pass:string):void{ //quando não retorna nada dá o tipo :void
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
}

logar("gordox","coxinha123");

function soma2(n1:number,n2:number):number{
    let r = n1+n2
    return r;
}

let n_res:number= soma2(10,5);
let s_res:string= soma2(2,4).toString();

console.log(n_res);
console.log(typeof(s_res));