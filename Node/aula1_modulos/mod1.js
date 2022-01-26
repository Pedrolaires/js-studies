/* const nome = 'Pedro';
const sobrenome ='Aires';

const falaNomeCompleto = ()=> `${nome} ${sobrenome}` 
 */
/* module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNomeCompleto = falaNomeCompleto; */

/* exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNomeCompleto = falaNomeCompleto;

this.qualquerCoisa ='O que eu quiser exportar' */

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
}
exports.Pessoa = Pessoa;