const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON no corpo da requisição
app.use(express.json());

// Rota do webhook
app.post('/webhook', (req, res) => {
    const payload = req.body; // Aqui você recebe os dados enviados para o webhook
    console.log('Webhook recebido:', payload); // Para teste, exiba no console

    // Enviar uma resposta ao remetente
    res.status(200).json({ message: 'Webhook recebido com sucesso!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
