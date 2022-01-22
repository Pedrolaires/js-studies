const nome = (x) => {
    for(let i = 0; i < 6; i++){
        console.log((x + 2) / 3);
    }
}

const func = () => {
    for(let i = 0; i < 15; i++){
        nome(i)
    }
}

func() 