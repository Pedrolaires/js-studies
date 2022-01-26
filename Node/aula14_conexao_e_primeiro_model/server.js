require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING,{useNewUrlParser: true, useUnifiedTopology: true})
.then( () => {
    console.log('conexão com a DB estabelecida!');
    app.emit('ok')
})
.catch( e => console.log('\n\n\n****Erro de conexão na base de dados****\n\n',e));


const routes = require('./routes');
const path = require('path');
const {middlewareGlobal} = require('./src/middlewares/middleware')

app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Middlewares
app.use(middlewareGlobal);
app.use(routes);

app.on('ok', () =>{
    app.listen(3000, () => console.log('Servidor executando na porta 3000'));
})

