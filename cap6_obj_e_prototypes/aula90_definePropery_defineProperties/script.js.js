function Produto(nome, preco, estoque){

    Object.defineProperty(this,'estoque',{
        enumerable: true,  // Será exibido nas chaves do objeto
        value: estoque,   // valor da chave
        writable: false, // se o valor é editavel
        configurable: true // é configuravel ?  (redefinir essa mesma configuração)
    });

    Object.defineProperties(this,{

        nome:{
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },

        preco:{
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }

    });

}

const p1 = new Produto('Camiseta', 20, 3);
//console.log(p1)
console.log(Object.keys(p1))