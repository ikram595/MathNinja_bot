const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });
const userScores = {};

console.log("🚀 Bot en cours d'exécution et prêt à recevoir des messages !");
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;
  const score = userScores[chatId] || 0;

  if (messageText === "/start") {
    bot.sendMessage(
      chatId,
      `Bienvenue ${msg.chat.first_name}!\n🎮 Ce bot est un mini-jeu interactif.\nTapez /help pour voir les commandes disponibles`
    );
    return;
  }
  if (messageText === "/help") {
    bot.sendMessage(
      chatId,
      `Commandes disponibles:\n/start : Message de bienvenue\n/help : Liste des commandes\n/play : Lancer un nouveau jeu\n/score : Voir votre score actuel`
    );
    return;
  }
  if (messageText === "/play") {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ["+", "-", "*", "/"];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let correctAnswer;
    switch (operation) {
      case "+":
        correctAnswer = num1 + num2;
        break;
      case "-":
        correctAnswer = num1 - num2;
        break;
      case "*":
        correctAnswer = num1 * num2;
        break;
      case "/":
        correctAnswer = parseFloat((num1 / num2).toFixed(2));
        break;
    }
    bot.answer = correctAnswer;
    bot.currentOperation = `${num1} ${operation} ${num2}`;
    bot.sendMessage(
      chatId,
      `Quel est le résultat de ${bot.currentOperation} ?`
    );

    bot.once("message", (responseMsg) => {
      const userAnswer = parseFloat(responseMsg.text);

      if (isNaN(userAnswer)) {
        bot.sendMessage(chatId, "❌ Veuillez entrer un nombre valide !");
        return;
      }

      if (userAnswer === bot.answer) {
        if (!userScores[chatId]) userScores[chatId] = 0;
        userScores[chatId] += 10;
        bot.sendMessage(
          chatId,
          `✅ Réponse correcte ! 🎉 Vous avez gagné 10 points !`
        );
      } else {
        bot.sendMessage(
          chatId,
          `❌ Réponse incorrecte.\nLa bonne réponse était ${bot.answer}`
        );
      }
    });
    return;
  }
  if (messageText === "/score") {
    bot.sendMessage(chatId, `Votre score actuel est : ${score} points!`);
    return;
  }
});
