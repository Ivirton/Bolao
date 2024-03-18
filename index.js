// app.js ou index.js

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const participantesRoutes = require('./routes/participantes');

const app = express();

// Conectar ao banco de dados
db.authenticate()
    .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
    .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

// Middleware para parsear corpos de requisições
app.use(bodyParser.json());

// Rotas para cadastro de participantes
app.use('/participantes', participantesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
