const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
    const payload = req.body;
    console.log('Webhook recebido:', payload);
    res.status(200).json({ message: 'Webhook recebido com sucesso!' });
});

module.exports = app;
