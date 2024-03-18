// config/database.js

const { Sequelize } = require('sequelize');

// Configuração do banco de dados
const sequelize = new Sequelize('bolao_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Opção para desativar os logs do Sequelize
});

// Teste da conexão com o banco de dados
async function testarConexao() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

// Executa o teste de conexão
testarConexao();

module.exports = sequelize;
