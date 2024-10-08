const express = require("express");
const app = express();
const axios = require("axios");
 
const API_KEY = "dad32c3e13f6ab49040103285f020c00";

app.get("/clima/:cidade", async (req, res) => {
  const { cidade } = req.params;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric`
    );
    const clima = response.data;
    res.status(200).json(clima);
  } catch (error) {
    res
      .status(500)
      .json({
        mensagem: "Erro ao coletar dados climáticos",
        erro: error.message,
      });
  }
});

app.get("/piada", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any?lang=pt");
    const piada = response.data;
    res.status(200).json(piada);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao coletar piada", erro: error.message });
  }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
