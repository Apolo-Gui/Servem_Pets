const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3306;

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'servem_pets'
});

// Rota para obter dados do banco de dados
app.get('/api/dados', (req, res) => {
  const query = 'SELECT * FROM sua_tabela';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Erro ao executar a consulta:', error);
      res.status(500).json({ error: 'Erro ao obter dados do banco de dados' });
      return;
    }
    res.json(results);
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando ${PORT}`);
});