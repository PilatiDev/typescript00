 class Compu{
    public nome:string;
    public ram:number;
    public cpu:number;
    readonly ano:number;
    private ligado:boolean=false;

    //Função construtora é a função que sempre vai ser executada/chamada
    constructor(nome:string, ram:number, cpu:number, ano:number){
        this.nome=nome;
        this.ram=ram;
        this.cpu=cpu;
        this.ano=ano;
        this.ligado=false;
    }
    info():void{
        console.log(`Nome:${this.nome}`);
        console.log(`Ram:${this.ram}`);
        console.log(`CPU:${this.cpu}`);
        console.log(`Ano:${this.ano}`);
        console.log(`Ligado:${this.ligado?"Sim":"Não"}`);
        console.log("\n");
    }
    //metodo para ligar ou desligar o computador
    ligar():void{
        this.ligado=true;
    }
    desligado():void{
        this.ligado=false;
    }
}

//Instanciar a classe: Criar o objeto da classe | Obrigatoriamente usar o operador `new`
const compu1=new Compu("Sonic", 64, 10,2021);
const compu2=new Compu("Caro",32,7,2023);
const compu3=new Compu("Gamer",128,10,2024);
console.log(compu1.nome);
compu1.nome = "Cristiano Ronaldo";
console.log(compu1.nome);

console.log(compu1.ano);

/* 
comp1.ligar();
comp3.ligar();
comp1.desligado();



comp1.info();
comp2.info();
comp3.info();

 */

/* comp1.nome = "Sonic";
comp2.nome = "Caro";
comp3.nome = "Gamer"; */



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