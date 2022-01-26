function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}
Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente! Saldo: R$ ${this.saldo.toFixed(2)}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo('Saque   ');
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo('Depósito');
};
Conta.prototype.verSaldo = function(operacao){
    console.log(`Operação: ${operacao} | Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia,conta,saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);

ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente! Saldo: R$ ${this.saldo.toFixed(2)}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo('Saque   ');
};

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia,conta,saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);

ContaPoupanca.prototype.constructor = ContaPoupanca;

ContaPoupanca.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente! Saldo: R$ ${this.saldo.toFixed(2)}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo('Saque   ');
};


const conta1 = new Conta(1, 2, 10);
console.log(conta1);
conta1.depositar(11)
conta1.sacar(20)
conta1.sacar(20)

console.log();

const cc = new ContaCorrente(11,22,200,100)
cc.depositar(10)
cc.sacar(300)

console.log();

const cp = new ContaPoupanca(12,33,0)
console.log(cp)
cp.depositar(10)
cp.sacar(30)
cp.sacar(8)