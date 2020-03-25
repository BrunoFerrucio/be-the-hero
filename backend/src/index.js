const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); /**traduz o Json para para mostrar o conteudo */
app.use(routes); /**usa o arquivo de rotas */
app.listen(3333); /**porta que vai ser a saida (localhost:3333) */