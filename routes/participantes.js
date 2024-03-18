// routes/participantes.js

const express = require('express');
const router = express.Router();
const participanteController = require('../controllers/participanteController');

// Rota para cadastro de participante
router.post('/cadastro', participanteController.cadastrarParticipante);

module.exports = router;
