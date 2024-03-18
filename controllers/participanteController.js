// controllers/participanteController.js

const Participante = require('../models/participante');

// Função para cadastrar um novo participante
exports.cadastrarParticipante = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        // Verifica se o email já está cadastrado
        const participanteExistente = await Participante.findOne({ where: { email } });
        if (participanteExistente) {
            return res.status(400).json({ error: 'Este email já está cadastrado.' });
        }

        // Cria o participante no banco de dados
        const participante = await Participante.create({
            nome,
            email,
            senha: senha // Aqui você precisa hash a senha antes de armazená-la
        });

        return res.status(201).json(participante);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Erro ao cadastrar participante.' });
    }
};
