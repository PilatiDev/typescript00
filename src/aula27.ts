interface curso{
    titulo:string;
    des:string;
    aula:number;
    maxAlunos?:number; //? opcional
}

let curso1:curso
let curso2:curso 
let curso3:curso

curso1={titulo:"Typescript", des:"Curso de Typescript", aula:100, maxAlunos:50};
curso2={titulo:"Javascript", des:"Curso de Javascript", aula:200, maxAlunos:80};
curso3={titulo:"Angular", des:"Curso de Angular", aula:30, maxAlunos:8};

console.log(curso1);
console.log(curso2);
console.log(curso3);