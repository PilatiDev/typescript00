//NULL  -  UNDEFINED  -  UNKNOW
//NULL - Tipo Nulo
//Undefined - Indefinido
//Unknown - Desconhecido


let v_nome:string|null;
v_nome=null;
console.log(v_nome);

let v_nome2:any;
/* v_nome2 = "Matheus"; */
console.log(v_nome2);

let v_nome3:unknown=v_nome; //unknown só pode ser atribuído em tipos unknown ou any
let v_num:any=v_nome3
console.log(v_num);