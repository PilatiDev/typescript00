class Compu1{
    nome:string;
    ram:number;
    cpu:number;
    ano:number;
    ligado:boolean=false;

    //Função construtora é a função que sempre vai ser executada/chamada
    constructor(nome:string, ram:number, cpu:number, ano:number){
        this.nome=nome;
        this.ram=ram;
        this.cpu=cpu;
        this.ano=ano;
        this.ligado=false;
    }
}

//Instanciar a classe: Criar o objeto da classe | Obrigatoriamente usar o operador `new`
const comput1=new Computador("Sonic", 64, 10,2021);
const comput2=new Computador("Caro",32,7,2023);
const comput3=new Computador("Gamer",128,10,2024);

/* comp1.nome = "Sonic";
comp2.nome = "Caro";
comp3.nome = "Gamer"; */
/* 
console.log(comp1);
console.log(comp2);
console.log(comp3); */

/* class Carro {
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
 */

