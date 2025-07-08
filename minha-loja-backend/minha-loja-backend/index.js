const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const produtos = [
  {
    id: 1,
    nome: "Camiseta Super React",
    preco: 49.9,
    imagem: "https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg2YzE4NDgwZjAwODE5MWE2NDY1N2JhMmNkOTQzNjY6ZmlsZV8wMDAwMDAwMGI3ZDA2MWY3YmM5M2U4ZjEyYWNjZWNjMCIsInRzIjoiNDg2NjQyIiwicCI6InB5aSIsInNpZyI6IjdjM2FjNDkyNzZkNzQwYTA3ZTAxMDk4YTk3ODIxN2RlMjRlNmMyNWFlMDA2Y2FjNjg2YzRiOGRlMDg4NmQ2YWIiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="
  },
  {
    id: 2,
    nome: "Caneca Node.js",
    preco: 29.9,
    imagem: "https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg2YzE2ZDA2MWY4ODE5MTk1OWU2NzJhNWFmMWMwOWU6ZmlsZV8wMDAwMDAwMGUyNjA2MWY3Yjg0NmQxZjE2ODgwMWQ3OSIsInRzIjoiNDg2NjQyIiwicCI6InB5aSIsInNpZyI6IjQ1YmNkNDY5NWE5YTQxMjMzOWFlNmNlZjBlN2UxNTIyNDI1NDY0MjNiNThkNGQ2ZTYxZjM5MmE0MzRmY2Q0ZjQiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="
  },
  {
    id: 3,
    nome: "Adesivo MongoDB",
    preco: 9.9,
    imagem: "https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg2ZDkwMTUxYWMwODE5MTg5N2RiYzFjMWMzYWQ5Zjg6ZmlsZV8wMDAwMDAwMDIyMjQ2MWZkYTVkODBjNjlkZWMzYjc2ZiIsInRzIjoiNDg2NjY5IiwicCI6InB5aSIsInNpZyI6ImMzZTM1MThmZjJiZWFlMTM1YTFjZTJmMjRmZDI1NTkyOTE3ZDc3NmQxYzgzMzk2MTMwNjVjNGFjMzVmNDUyMmEiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ=="
  }
];

app.get('/', (req, res) => {
  res.send('API da Minha Loja está funcionando!');
});

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
