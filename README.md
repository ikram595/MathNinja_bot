# 📊 Bot de Jeu Mathématique

Un bot Telegram simple et amusant qui permet aux utilisateurs de jouer à un jeu mathématique interactif. Répondez à des questions mathématiques aléatoires, gagnez des points pour chaque bonne réponse et suivez votre score. Idéal pour améliorer vos compétences en mathématiques tout en vous amusant !

---

## 🚀 Fonctionnalités
- 🧮 **Questions Mathématiques Aléatoires** : Inclut l'addition, la soustraction, la multiplication et la division.
- 🎯 **Gagnez des Points** : Obtenez 10 points pour chaque réponse correcte.
- 📊 **Suivi des Scores** : Consultez votre score actuel à tout moment.
- 🤖 **Commandes Interactives** : Des commandes simples pour une expérience de jeu fluide.

---

## 🛠️ Commandes
- **`/start`** : Démarrez le bot et recevez un message de bienvenue.
- **`/help`** : Affichez la liste des commandes disponibles.
- **`/play`** : Recevez une question mathématique aléatoire et répondez-y.
- **`/score`** : Consultez votre score actuel.

---

## 🏗️ Comment ça fonctionne
1. Le bot génère une question mathématique aléatoire avec des nombres compris entre 1 et 10.
2. L'utilisateur répond directement dans le chat.
3. Le bot évalue la réponse :
   - ✅ Bonne réponse ? Vous gagnez 10 points.
   - ❌ Mauvaise réponse ? Le bot vous donne la bonne réponse.
4. Les scores sont enregistrés individuellement pour chaque utilisateur.

---

## 🚀 Lancer le bot
1. Clonez cette repository :
   ```bash
   git clone https://github.com/ikram595/MathNinja_bot.git
   cd MathNinja_bot
2. Installez les dépendances nécessaires :
   ```bash
   npm install
3. Créez un fichier .env et ajoutez votre jeton du bot Telegram :
   ```bash
   BOT_TOKEN=le-token-de-votre-bot
N.B: obtenez un token du bot de @BotFather dés l'appli Telegram Desktop

4. Lancez le bot :
   ```bash
    node bot.js

## 🛠️ Développé avec
- Node.js : Environnement backend pour le bot.
- node-telegram-bot-api : Wrapper API Telegram Bot pour une intégration facile.
