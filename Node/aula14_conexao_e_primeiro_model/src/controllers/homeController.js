const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Titulo de teste',
    descricao: 'Descricao de testes'
}).then( dados =>{
    console.log(dados);
}).catch(e => console.log(e));

exports.paginaInicial = (req,res,next) =>{
    console.log('Respondendo o cliente');
    res.render('index');
    return;
};

exports.trataPost = (req, res) =>{
    res.send(req.body);
    return;
}