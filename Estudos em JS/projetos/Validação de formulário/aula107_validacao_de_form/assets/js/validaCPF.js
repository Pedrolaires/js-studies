class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo',{
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    ehSequencia(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }

    static geraDigito(cpfParcial){
        let multiplicador = cpfParcial.length+1
        let digito = Array.from(cpfParcial).reduce((acum,valor)=>{
           acum += Number(valor)*multiplicador;
           multiplicador--;
           return acum;
        },0);
        digito = 11 - (digito % 11)
        return digito <= 9 ? String(digito) : '0';
        
    }

    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.slice(0,-2);
        const digitoUm = ValidaCPF.geraDigito(cpfParcial);
        const digitoDois = ValidaCPF.geraDigito(cpfParcial + digitoUm);
        this.novoCPF = cpfParcial + digitoUm + digitoDois;
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.ehSequencia()) return false;
        this.geraNovoCpf()
        
        return this.novoCPF === this.cpfLimpo;
    }
}
