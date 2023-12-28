 class Comput0{
    nome:string ="Computador 1";
    ram:number=0;
    cpu:number=0;
    ligado:boolean=false;
}

const computa1=new Comput0();
const computa2=new Comput0();
const computa3=new Comput0();

comp1.nome = "Sonic";
comp2.nome = "Caro";
comp3.nome = "Gamer";

console.log(comp1.nome);
console.log(comp2.nome);
console.log(comp3.nome); 

//Exemplo AULA 17 chat GPT

class Carro {
    modelo: string;
    ano: number;

    // O construtor é definido usando a palavra-chave "constructor"
    constructor(modelo: string, ano: number) {
        // O corpo do construtor é onde você inicializa os membros da classe
        this.modelo = modelo;
        this.ano = ano;
    }

    // Outros métodos e propriedades podem ser adicionados à classe
    exibirDetalhes() {
        console.log(`Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}

// Criando uma instância da classe Carro usando o construtor
const meuCarro = new Carro("Sedan", 2022);

// Chamando o método para exibir os detalhes do carro
meuCarro.exibirDetalhes();
