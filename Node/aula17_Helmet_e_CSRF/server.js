require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');// modela a base de dados e garante o padrão de salvamento dos dados
mongoose.connect(process.env.CONNECTIONSTRING,{useNewUrlParser: true, useUnifiedTopology: true})
.then( () => {
    console.log('conexão com a DB estabelecida!');
    app.emit('ok'); // Quando o app conectar com a base de dados, ele emitirá um evento;
})
.catch( e => console.log('\n\n\n****Erro de conexão na base de dados****\n\n',e));

const session = require('express-session'); // identifica o navegador do cliente (salva cookies)
const MongoStore = require('connect-mongo'); // salvar as sessões no banco de dados.
const flash = require('connect-flash'); // mensagens autodestrutivas na base de dados. (precisa de session)
const routes = require('./routes'); // rotas da aplicação
const path = require('path'); //caminhos
const helmet = require('helmet'); //segurança
const csrf = require('csurf'); // tokens para formulários protegendo contra Cross-site Request Forgery 
const {middlewareGlobal, checkCsrfError, csrfMiddleware} = require('./src/middlewares/middleware'); // importação dos middlewares (funções que são executadas nas rotas)

app.use(helmet());
app.use(express.urlencoded({ extended: true})); //permite a postagem de formulários para dentro da aplicação
app.use(express.json()); 
app.use(express.static(path.resolve(__dirname, 'public'))); // arquivos estáticos que podem ser acessados diretamente (imagens, css, scripts).

const sessionOptions = session({
    secret: '@B@753#D#',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: (1000 * 60 * 60 * 24 * 7),
        httpOnly: true
    },
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); //arquivos que serão renderizados
app.set('view engine', 'ejs'); // Engine que será utilizada para renderizar o os arquivos

app.use(csrf());
// Middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes); 

app.on('ok', () =>{ // evento após a conexão com a base de dados
    app.listen(3000, () => console.log('Servidor executando na porta 3000')); // começa a ouvir requisições
});

 