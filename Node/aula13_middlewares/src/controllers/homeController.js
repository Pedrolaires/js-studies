exports.paginaInicial = (req,res,next) =>{
    console.log('Respondendo o cliente');
    res.render('index');
    return;
};

exports.trataPost = (req, res) =>{
    res.send(req.body);
    return;
}