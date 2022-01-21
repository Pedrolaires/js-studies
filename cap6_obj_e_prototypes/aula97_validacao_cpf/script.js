// algo básico.
function validateCPF(input){
    let cleanCpfInput = input.replace(/\D+/g, ''); 
    let cpf = cleanCpfInput;
    cpf = Array.from(cpf).splice(0,9)

    function getDigit(cpf){
        multiplicator = cpf.length +1;
        return (
            cpf.reduce((acum, value)=>{
                acum += Number(value) * multiplicator;
                multiplicator--;
                return acum;
            }, 0)
        );
    }
    let firstDigitResult = getDigit(cpf)
    firstDigitResult = 11 - (firstDigitResult % 11);
    firstDigitResult = firstDigitResult > 9 ? 0 : firstDigitResult;
    cpf.push(firstDigitResult);

    let secondDigitResult = getDigit(cpf)
    secondDigitResult = 11 - (secondDigitResult % 11);
    secondDigitResult = secondDigitResult > 9 ? 0 : secondDigitResult;
    cpf.push(secondDigitResult);
    
    cpf = cpf.toString().replace(/\D+/g, '');
    if(cpf === cleanCpfInput) return 'CPF Válido! :D';
    return 'CPF Inválido! D:'
} 
console.log(validateCPF('070.987.720-03'))