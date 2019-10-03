const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-ehsp2.mongodb.net/semana09?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// GET, POST (INSERT), PUT (UPDATE), DELETE

// req.query = Acessar query params (para filtro)
// req.params = Acessar route params (para edição / delete)
// req.body = Acessar corpo da requisição (para criação/ edição)

app.use(express.json());
app.use(routes);

app.listen(3333);