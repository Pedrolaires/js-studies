const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.send(`
    <form action ="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar formulário</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?', (req,res)=>{
    console.log(req.params);
    console.log(req.query)
    res.send(req.query);
});

app.post('/', (req,res)=>{

    console.log(req.body)
    res.send(`O que foi enviado: ${req.body.nome}`);
});

app.listen(3000, () => console.log('Servidor executando na porta 3000'));

app.get('/contato', (req,res) =>{
    res.send('Obrigado por entrar em contado com a gente.');
});