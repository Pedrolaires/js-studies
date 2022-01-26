// Composição , compor um objeto com outros objetos. Mixing
// Vantagem: reutilização do código (comer, falar e beber) para outras fabricas ou objetos além da criaPessoa;

const falar= {
    falar(){
        console.log(`${this.nome} está falando`)
    },
}
const comer= {
    comer(){
        console.log(`${this.nome} está comendo`)
    },
}
const beber= {
    beber(){
        console.log(`${this.nome} está bebendo`)
    },
}

const pessoaPrototype = {...falar,...comer,...beber};
//const pessoaPrototype = Object.assign({}, falar,comer,beber);

function criaPessoa(nome,sobrenome){

    return Object.create(pessoaPrototype,{
        nome: {
            value: nome,
            writable: true,
            enumerable: true
        },
        sobrenome: { 
            value: sobrenome,
            Writable: true,
            enumerable: true
        }
    });
};

const p1 = criaPessoa('Pedro', 'Lucas');
console.log(p1);
console.log(p1.falar());
console.log(p1.comer());

const p2 = criaPessoa('Maria', 'Eduarda');
console.log(p2.beber());
console.log(p2.comer());