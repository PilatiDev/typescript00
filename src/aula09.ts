enum dias{
    domingo= 0,
    segunda= 1,
    terca= 2,
    quarta= 3,
    quinta= 4,
    sexta= 5,
    sabado= 6
}
//console.log(dias.terca);
//console.log(dias['domingo']);
//console.log(dias[1]);

const d=new Date();
//console.log(d.getDate());
//console.log(dias[d.getDay()]);

enum cores{
    branco="#fff",
    preto="#000",
    vermelho="#f00",
    verde="#0f0",
    azul="#00f"
}

console.log(cores.branco);
console.log(cores['vermelho']);




/* let value:number[] = [1,2,3,4]
console.log(value[0]);
let qualquer_:any[] = ["test",123,false,null]
 */

enum tipoUsuario{
    USER=10,
    ADMIN=100,
    SUPER=1000
}
/* console.log(tipoUsuario.SUPER);
const tp:tipoUsuario=tipoUsuario.SUPER;
console.log(tp);

 */
enum UserStatus{
    Admin = 1,
    Editor = 2,
    User = 3
}

function checkStatus(status:number){
    switch (status) {
        case UserStatus.Admin:
            console.log('É admin');
            break;
        case UserStatus.Editor:
            console.log('É editor');
            break;        
        case UserStatus.User:
            console.log('É user');
            break;
    }
}

/* checkStatus(1)
checkStatus(2)
checkStatus(3) */

enum Teclas {
    Up = 'ArrowUp',
    Down = 'ArrowDown',
    Left = 'ArrowLeft',
    Direita = 'ArrowRight'
}

window.addEventListener('keydown',function(e){
    console.log(e);
    
})