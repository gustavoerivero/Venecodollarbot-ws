const { addKeyword } = require("@bot-whatsapp/bot");

const { menu } = require("../utils");
const { dolar } = require("./dollar");

const answer = () => {
  return `¡Hola! A continuación te muestro las cosas que puedo hacer:\n\n${menu()}\nAsí que dime, ¿qué puedo hacer por ti?`
}

const start = addKeyword(["iniciar", "inicio", "start"])
  .addAnswer(
    answer(),
    null,
    null,
    [dolar]
  );

module.exports = { start };