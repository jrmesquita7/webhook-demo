const express = require("express");
const app = express();
app.use(express.json());

// Endpoint do webhook
app.post("/webhook", (req, res) => {
    const payload = req.body;
    console.log("Webhook recebido:", payload);
    res.status(200).json({ message: "Webhook recebido com sucesso!" });
});

// Exporta o app como um manipulador de função para o Vercel
module.exports = app;
