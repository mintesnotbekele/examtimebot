const express = require("express");
const expressApp = express();
const axios = require("axios");
const path = require("path");
const port = process.env.PORT || 3000;
expressApp.use(express.static("static"));
expressApp.use(express.json());
require("dotenv").config();

const { Telegraf } = require("telegraf");

const bot = new Telegraf("6131597201:AAGxCdKfp5TXrGLoyvOpZPEI4aD-GzC6VSs");

expressApp.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

bot.command("start", (msg) => {
  const chatId = msg.chat.id;

  // Define the keyboard layout
  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "How do I use the app?", callback_data: "button1" }],
        [{ text: "How to pay using Chapa?", callback_data: "button2" }],
        [{ text: "How to pay using CBE ?", callback_data: "button3" }],
        [
          {
            text: "What should I do if the questions are not loading?",
            callback_data: "button4",
          },
        ],

        [
          {
            text: "What should I do if the notes are not loading?",
            callback_data: "button16",
          },
        ],
        [
          {
            text: "How can I change my stream or grade level?",
            callback_data: "button5",
          },
        ],
        [
          {
            text: "How much does the app cost?",
            callback_data: "button6",
          },
        ],
        [
          {
            text: "Are the app contents suitable for remedial students?",
            callback_data: "button7",
          },
        ],
        [
          {
            text: "Is the app available for grade 8 students?",
            callback_data: "button8",
          },
        ],
        [
          {
            text: "Is the app available for university or college students?",
            callback_data: "button9",
          },
        ],
        [
          {
            text: "Where can I find previous matric questions in the app?",
            callback_data: "button10",
          },
        ],
        [
          {
            text: "Is the app available for grade 6 students?",
            callback_data: "button11",
          },
        ],
        [
          {
            text: "How do I use the app?",
            callback_data: "button12",
          },
        ],
        [
          {
            text: "Do I need to insert my email to use the app?",
            callback_data: "button13",
          },
        ],
        [
          {
            text: ' I received an error message saying "Unfortunately, Exam Time has stopped." What should I do?',
            callback_data: "button14",
          },
        ],
        [
          {
            text: " If I download the videos from Exam Time, can I use them offline after the initial download from YouTube?",
            callback_data: "button15",
          },
        ],
        [
          {
            text: " Is the app available for iPhone users?",
            callback_data: "button17",
          },
        ],
      ],
    },
  };

  // Send the message with the keyboard
  bot.telegram.sendMessage(chatId, "Choose an option:", keyboard);
});

bot.on("callback_query", async (query) => {
  const chatId = query.from.id;
  const data = query.update.callback_query.data;
  console.log(chatId);
  console.log(query);
  // Handle button clicks
  switch (data) {
    case "button1":
      bot.telegram.sendMessage(
        chatId,
        "Dear Exam Time user, to use the app, download and install it on your device. Create an account or sign in if you already have one. Explore the available features, such as study materials, practice questions, and educational resources. You can navigate through subjects, topics, and grade levels to find relevant content for your studies. Thank you for using Exam Time! Exam Time User Guide https://www.youtube.com/watch?v=bx8UYvtIIDo&t=2s"
      );
      break;
    case "button2":
      bot.telegram.sendMessage(
        chatId,
        "Check out this video for Chapa: https://www.youtube.com/watch?v=bIOmthZwZR8"
      );
      break;
    case "button3":
      bot.telegram.sendMessage(
        chatId,
        "Check out this video for CBE: https://www.youtube.com/watch?v=jiGMraBhUI8"
      );
      break;
    case "button4":
      bot.telegram.sendMessage(
        chatId,
        "Dear Exam Time user, if the questions are not loading, please check your internet connection and try going to different sections of the app. This should help load the questions. Thank you for using Exam Time!"
      );
      break;
    case "button5":
      bot.telegram.sendMessage(
        chatId,
        "Dear Exam Time user, to change your stream or grade level, contact our customer support at 0988321313. Thank you for using Exam Time!"
      );
      break;
    case "button6":
      bot.telegram.sendMessage(
        chatId,
        'Dear Exam Time user, to find the pricing details, please navigate to the settings page of the app and select the "Subscription Plan" option. There, you will be able to view the pricing information. Thank you for using Exam Time!'
      );
      break;
    case "button7":
      bot.telegram.sendMessage(
        chatId,
        "Dear Exam Time user, the app's contents are specifically created to help remedial students. You'll discover various resources and materials that are designed to support your learning and help you improve. Thank you for using Exam Time!"
      );
      break;
    case "button8":
      bot.telegram.sendMessage(
        chatId,
        "Dear Exam Time user, currently, Exam Time is not available for grade 8 students. We will add content for Grade 8 students soon. Thank you for using Exam Time!"
      );
      break;
    case "button9":
      bot.telegram.sendMessage(
        chatId,
        "Dear Exam Time user, currently, Exam Time is not available for university and college students. We will add resources for university and college students soon. Thank you for using Exam Time!"
      );
      break;
    case "button10":
      bot.telegram.sendMessage(
        chatId,
        "Dear Exam Time user, previous matric questions can be found within the practice section under national exams. Thank you for using Exam Time!"
      );
      break;
    case "button11":
      bot.telegram.sendMessage(
        chatId,
        "Dear Exam Time user, currently, Exam Time is not available for grade 6 students. We will add content for Grade 6 students soon. Thank you for using Exam Time!"
      );
      break;
    case "button12":
      bot.telegram.sendMessage(
        chatId,
        "Dear Exam Time user, to use the app, download and install it on your device. Create an account or sign in if you already have one. Explore the available features, such as study materials, practice questions, and educational resources. You can navigate through subjects, topics, and grade levels to find relevant content for your studies. Thank you for using Exam Time!"
      );
      break;
    case "button13":
      bot.telegram.sendMessage(
        chatId,
        " Dear Exam Time user, no, you do not need to provide your email address during the registration process to create an account and access the app's features. Thank you for using Exam Time!"
      );
      break;
    case "button14":
      bot.telegram.sendMessage(
        chatId,
        "Dear Exam Time user, if you encounter the error message stating that the app has stopped, try uninstalling and reinstalling the app. If the problem persists, please contact our support team for further assistance. Thank you for using Exam Time!"
      );
      break;
    case "button15":
      bot.telegram.sendMessage(
        chatId,
        "Dear Exam Time user, yes, once you have downloaded the videos from Exam Time, you can use them offline after the initial download. You can access the downloaded videos from your device's storage and play them without an internet connection. Thank you for using Exam Time!"
      );
    case "button16":
      bot.telegram.sendMessage(
        chatId,
        "Dear Exam Time user, if the notes are not loading, please ensure that you have a stable internet connection. And try to stay in the study section until it loads all. Thank you for using Exam Time!"
      );
      break;
    case "button17":
      bot.telegram.sendMessage(
        chatId,
        "Dear Exam Time user, currently, Exam Time is not available for iPhone users. It will be available soon. Thank you for using Exam Time!"
      );
      break;

    default:
      console.log("default");
      break;
  }
});

// expressApp.use(bot.webhookCallback('/secret-path'))
// bot.telegram.setWebhook('<YOUR_CAPSULE_URL>/secret-path')
// expressApp.listen(port, () => console.log(`Listening on ${port}`));
bot.launch({
  webhook: {
    domain: "https://admin.think-hubet.com",
    port: port,
  },
});
