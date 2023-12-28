class Alunos {
    public name:string;
    private codigoAluno?:number;
    constructor(name:string, codigoAluno?:number) {
        this.name = name;
        this.codigoAluno = codigoAluno || undefined;
    }
    info():void{
        console.log(`Nome do aluno: ${this.name}`);
        console.log(`Código do aluno: ${this.codigoAluno}`);
    }
    fazerMatricula():void{
        if(this.codigoAluno){
            console.log(`O aluno ${this.name} está matriculado.`);
            
        }else{
            console.log(`Precisa efetuar a matricula.`);
        }
    }
}

const al1 = new Alunos("Matheus",433)
const al2 = new Alunos("David Aaron")

al1.fazerMatricula()
al2.fazerMatricula()
 
