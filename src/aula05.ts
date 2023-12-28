//let vteste:string|number|boolean; //tipo string ou number ou boolean
let vteste:any
vteste = "Matheus";
vteste = 21;
vteste = true;

let cursos:any[] = ["JavaScript", "TypeScript", "C++", 100, false];
let valores:number[] = [10,200,30012];

//vteste = cursos;

cursos.push("Arduino");
valores.push(12);

console.log(cursos);
console.log(valores);
console.log(vteste);
