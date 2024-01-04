class Conta {
  //Public: acessado de qualquer lugar
  //Private: acessado somente na sua própria classe
  //Protected: acessado somente na sua própria classe e nas classes filho
  private numero: number;
  private titular: string;
  private saldoConta: number;
  constructor(titular: string) {
    this.numero = this.gerarNumeroConta();
    this.titular = titular;
    this.saldoConta = 0;
  }
  gerarNumeroConta(): number {
    return Math.floor(Math.random() * 100000) + 1;
  }
  info() {
    console.log(`Titular:${this.titular}`);
    console.log(`Número.:${this.numero}`);
  }
  public saldo(): number {
    return this.saldoConta;
  }
  protected deposito(valor: number) {
    this.saldoConta += valor;
  }
  public saque(valor: number) {
    if (valor >= this.saldoConta) {
      this.saldoConta -= valor;
    } else {
      console.log(`saldo insuficiente`);
    }
  }
}

class ContaPF extends Conta {
  cpf: number;
  constructor(cpf: number, titular: string) {
    super(titular);
    this.cpf = this.gerarNumeroConta();
  }
  info() {
    console.log(`Tipo...:PF`);
    super.info();
    console.log(`Cpf...:${this.cpf}`);
    console.log("------------------");
  }
  public deposito(valor: number) {
    if(valor>1000){
        console.log(`Valor de depósito muito alto para este tipo de conta`);        
    } else {
        super.deposito(valor)
    }
  }
}

class ContaPJ extends Conta {
  cnpj: number;
  constructor(cnpj: number, titular: string) {
    super(titular);
    this.cnpj = this.gerarNumeroConta();
  }
  info() {
    console.log(`Tipo...:PJ`);
    super.info();
    console.log(`CNPJ..:${this.cnpj}`);
    console.log("------------------");
  }
  public deposito(valor: number) {
    if(valor>=20000){
        console.log(`Valor de depósito muito alto para este tipo de conta`);        
    } else {
        super.deposito(valor)
    }
  }
}

const cont1 = new ContaPF(111123, "Matheus");
const cont2 = new ContaPJ(222, "Cristiano");

cont2.deposito(20000)
console.log(cont2.saldo())
cont2.saque(20)
console.log(cont2.saldo())
// cont1.info();
// cont2.info();
