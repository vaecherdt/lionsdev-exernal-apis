const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const API_KEY = require('./keys')

app.get('/clima/:cidade', async (req, res) => {

        const { cidade } = req.params
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric`)
        let clima = response.data
        res.json(clima).status(200)
})

app.get('/piada-legal/', async (req, res) => {
    try {
        const response = await axios.get("https://v2.jokeapi.dev/joke/Any?lang=pt");
        const piada = response.data;
        res.status(200).json(piada);
      } catch (error) {
        res
          .status(500)
          .json({ mensagem: "Erro ao coletar piada", erro: error.message });
      }
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))