exports.middlewareGlobal = (req,res, next)=>{
    
    if(req.body.cliente){
        req.body.cliente = req.body.cliente.replace('Lucas','Não use \'Lucas\'')
        console.log(`\nví que postou ${req.body.cliente}\n`)
    }

    next();
}