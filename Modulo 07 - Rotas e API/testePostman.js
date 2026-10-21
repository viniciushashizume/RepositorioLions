const express = require('express');
const app = express();

app.use(express.json());

// Banco de dados em memória
let tarefas = [
  { id: 1, titulo: 'Instalar o Postman', concluida: true },
  { id: 2, titulo: 'Aprender métodos HTTP', concluida: false }
];

// 1. GET - Listar TODAS as tarefas
app.get('/api/tarefas', (req, res) => {
  res.status(200).json(tarefas);
});

// 2. GET - Buscar UMA tarefa pelo ID
app.get('/api/tarefas/:id', (req, res) => {
  const tarefa = tarefas.find(t => t.id === parseInt(req.params.id));
  if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
  
  res.status(200).json(tarefa);
});

// 3. POST - Criar uma NOVA tarefa
app.post('/api/tarefas', (req, res) => {
  const { titulo } = req.body;
  if (!titulo) return res.status(400).json({ erro: 'O título é obrigatório' });
  
  const novaTarefa = {
    // Pega o ID da última tarefa e soma 1 (ou define como 1 se estiver vazio)
    id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1,
    titulo: titulo,
    concluida: false
  };
  
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa); // 201 Created
});

// 4. PUT - ATUALIZAR uma tarefa existente
app.put('/api/tarefas/:id', (req, res) => {
  const tarefa = tarefas.find(t => t.id === parseInt(req.params.id));
  if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });

  const { titulo, concluida } = req.body;
  
  // Atualiza os dados apenas se foram enviados na requisição
  if (titulo !== undefined) tarefa.titulo = titulo;
  if (concluida !== undefined) tarefa.concluida = concluida;

  res.status(200).json(tarefa);
});

// 5. DELETE - REMOVER uma tarefa
app.delete('/api/tarefas/:id', (req, res) => {
  const index = tarefas.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ erro: 'Tarefa não encontrada' });

  tarefas.splice(index, 1); // Remove 1 item a partir da posição encontrada
  res.status(200).json({ mensagem: 'Tarefa removida com sucesso!' });
});

app.listen(3000, () => {
  console.log('API de Tarefas rodando em http://localhost:3000');
});