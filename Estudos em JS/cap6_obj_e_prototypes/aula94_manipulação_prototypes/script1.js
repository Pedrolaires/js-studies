function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

const p2 ={
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2,Produto.prototype)
p2.aumento(100) // só funciona pois foi setado o prototype de Produto como prototype de p2

/* const p3 = Object.create(Produto.prototype);
p3.preco = 1;
p3.aumento(15); */

const p3 = Object.create(Produto.prototype,{
    peso:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    },
    tamanho:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 112
    },
    preco:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 79.90
    },
    nome:{
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Cadeira'
    }
});
p3.desconto(50);

console.log(p1);
console.log(p2);
console.log(p3);