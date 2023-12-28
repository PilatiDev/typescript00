class Computador{
    private id:number;
    public nome:string;
    private ram:number;
    private cpu:number;
    private ano:number;
    protected ligado:boolean=false;

    //Função construtora é a função que sempre vai ser executada/chamada
    constructor(nome:string, ram:number, cpu:number, ano:number){
        this.nome=nome;
        this.ram=ram;
        this.cpu=cpu;
        this.ano=ano;
        this.ligado=false;
        this.id=0;
    }
    info():void{
        console.log(`Nome:${this.nome}`);
        console.log(`Ram:${this.ram}`);
        console.log(`CPU:${this.cpu}`);
        console.log(`Ano:${this.ano}`);
        console.log(`Ligado:${this.ligado?"Sim":"Não"}`);
        console.log("--------------");
    }
    //metodo para ligar ou desligar o computador
    ligar():void{
        this.ligado=true;
    }
    desligado():void{
        this.ligado=false;
    }
    upRam(qtd:number):void{
        if(qtd >= 0 && qtd <= 1000){
            this.ram=qtd;
        }else{
            console.log(`Quantidade: ${qtd} para o computador ${this.nome} não é permitida.`);
        }

    }
}

//Instanciar a classe: Criar o objeto da classe | Obrigatoriamente usar o operador `new`
const comp1=new Computador("Sonic", 64, 10,2021);
const comp2=new Computador("Caro",32,7,2023);
const comp3=new Computador("Gamer",128,10,2024);

comp1.nome = "Super Sonic";
comp1.upRam(100);

comp1.ligar();
comp3.ligar();
comp1.desligado();

comp1.info();
comp2.info();
comp3.info();



//comp1.ligado = true;



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