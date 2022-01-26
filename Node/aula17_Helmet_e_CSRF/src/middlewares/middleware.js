exports.middlewareGlobal = (req,res, next)=>{
    res.locals.titulo = 'Home'
    next();
};
exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code) {
      return res.render('csrfError');
    }
};
exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};