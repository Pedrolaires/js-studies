
export const nome = 'Pedro';
export const sobrenome = 'Aires';
export const idade = 21;

const cpf = '23123154123'

export default class Pessoa{
    constructor(nome, sobrenome, idade){
        this.nome = nome,
        this.sobrenome = sobrenome,
        this.idade = idade
    }
};

export{cpf as CPF}
