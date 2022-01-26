/* const mod1 = require('./mod1');
//const mod1 = require('./mod1').falaNomeCompleto;

console.log(mod1);

console.log(mod1.falaNomeCompleto());
 */

/* const {Pessoa} = require('./mod1');

const p1 = new Pessoa('Pedro')
console.log(p1) */

const path = require('path');
const axios = require('axios');

axios('hppts://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(e => console.log(e));