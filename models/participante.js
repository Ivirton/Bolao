// models/participante.js

const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const Participante = db.define('Participante', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Participante;
