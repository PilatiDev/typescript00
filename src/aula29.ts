//generics
function f_teste<T,U>(v:T, r:U):U{
    return r
}

console.log(f_teste<number,string>(7,"CR7"));
console.log(f_teste<string,number>("CR7",7));
console.log(f_teste<boolean,boolean>(true,false));

class C_teste<T>{
    public valor:T
    constructor(valor:T){
        this.valor = valor
    }
}

const ct1 = new C_teste<number>(1)
const ct2 = new C_teste<string>("Cris")

console.log(ct1.valor);
console.log(ct2.valor);
