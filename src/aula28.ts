interface curso_{
    titulo:string;
    des:string;
    iniciarCurso?(teste:string):void;
}

interface cursoProg extends curso{
    aula:number;
    maxAlunos?:number;
}

interface cursoArtes extends curso{
    aula:number;
    maxAlunos?:number;
}


let curso_1:cursoProg
let curso_2:cursoProg
let curso_3:cursoArtes

function iniciarCurso(t:string):void{
    console.log("teste");
}

curso_1={titulo:"Typescript", des:"Curso de Typescript", aula:100, maxAlunos:50};
curso_2={titulo:"Javascript", des:"Curso de Javascript", aula:200, maxAlunos:80};
curso_3={titulo:"Angular", des:"Curso de Angular", aula:30, maxAlunos:8};


console.log(curso_1);
console.log(curso_2);
console.log(curso_3);