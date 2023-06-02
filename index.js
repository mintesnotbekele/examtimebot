const express = require('express')
const expressApp = express()
const axios = require("axios");
const path = require("path")
const port = process.env.PORT || 3000;
expressApp.use(express.static('static'))
expressApp.use(express.json());
require('dotenv').config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf("6131597201:AAGxCdKfp5TXrGLoyvOpZPEI4aD-GzC6VSs");

expressApp.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

bot.command('echo', ctx => {
	// Split the text message sent by the user
	// const message = ctx.message.text.split(' ');
  //   	// Remove the first element from array
  //   	message.shift();
    
  //   	ctx.reply(message.join(' '));
  console.log(ctx.message);
})

bot.catch((err, ctx) => {
  console.log(`Ooops, encountered an error for ${ctx.updateType}`, err)
})

bot.command('start', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'Hello there! Welcome to the Code Capsules telegram bot.\nI respond to /ethereum. Please try it', {
  })
})

bot.command('ethereum', ctx => {
  var rate;
  console.log(ctx.from)
  axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`)
  .then(response => {
    console.log(response.data)
    rate = response.data.ethereum
    const message = `Hello, today the ethereum price is ${rate.usd}USD`
    bot.telegram.sendMessage(ctx.chat.id, message, {
    })
  })
})


bot.command('how_to_pay_with_telebirr', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, '1. በቴሌ ብር ክፍያ ለመፈፀም ?\n\n - ውድ የ EXAM TIME ቤተሰቦች! \n\n *በቀላሉ ክፍያ ለመፈጸም \n\n*Sign up ሲያረጉ ስም እና ስልክ በትክክል ያስገባሉ ከዛም ክፍል  መርጠው ይገባሉ።\n*ከገቡ በኋላ "subscription" የሚለዉን ማስፈጠሪያ ይጫኑ።*ከዛም የቴል ብር የመክፈያ ገፅ ለይ የሚመጣውን "QR CODE" በቴል ብር scan በማድረግ ክፍያውን ይፈፅማሉ ።\n*ክፍያውን ከጨረሱ በኃላ የ refresh ምልክቷን በመጫን ሙሉ አገልግሎቱን ማግኘት ይችላሉ።\n*vpn ማጥፋት አይርሱ*\n\n ለበለጠ መረጃ ⬇️\nhttps://youtu.be/ALauh0GoqKI', {
  })
})

bot.command('telebirr_account_creation', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'Hello there! Welcome to ExamTime.\nI here are the instructions for paying on EXAMTIME', {
  })
})

bot.command('loading_questions', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'Hello there! Welcome to ExamTime.\nI here are the instructions for paying on EXAMTIME', {
  })
})

bot.command('services', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'Hello there! Welcome to ExamTime.\nI here are the instructions for paying on EXAMTIME', {
  })
})


// expressApp.use(bot.webhookCallback('/secret-path'))
// bot.telegram.setWebhook('<YOUR_CAPSULE_URL>/secret-path')
// expressApp.listen(port, () => console.log(`Listening on ${port}`));
bot.launch()