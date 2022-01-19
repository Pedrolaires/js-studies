const nome = prompt('Digite seu nome:')

document.body.innerHTML += `O seu nome é: ${nome} <br / >`
document.body.innerHTML += `O seu tem ${nome.length} Letras <br / >`
document.body.innerHTML += `As três ultimas letras: ${nome.toString().slice(-3)}<br / >`