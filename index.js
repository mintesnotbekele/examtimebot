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


bot.command('how_to_pay_with_telebirr', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, '1. በቴሌ ብር ክፍያ ለመፈፀም ?\n\n - ውድ የ EXAM TIME ቤተሰቦች! \n\n *በቀላሉ ክፍያ ለመፈጸም \n\n*Sign up ሲያረጉ ስም እና ስልክ በትክክል ያስገባሉ ከዛም ክፍል  መርጠው ይገባሉ።\n*ከገቡ በኋላ "subscription" የሚለዉን ማስፈጠሪያ ይጫኑ።*ከዛም የቴል ብር የመክፈያ ገፅ ለይ የሚመጣውን "QR CODE" በቴል ብር scan በማድረግ ክፍያውን ይፈፅማሉ ።\n*ክፍያውን ከጨረሱ በኃላ የ refresh ምልክቷን በመጫን ሙሉ አገልግሎቱን ማግኘት ይችላሉ።\n*vpn ማጥፋት አይርሱ*\n\n ለበለጠ መረጃ ⬇️\nhttps://youtu.be/ALauh0GoqKI', {
  })
})

bot.command('telebirr_account_creation', ctx => {
  
  bot.telegram.sendMessage(ctx.chat.id, '2. የቴሌ ብር መተግበርያ ከሌሎት አካውንት \n\n ለማውጣት ወይም በሌላ ሰው የቴሌ ብር አካውንት ክፍያ ለመፈፀም ?\n\n ውድ የ EXAM TIME ቤተሰቦች! \n 1. በቀላሉ መተግበርያውን ከplay store በማውረድ መመዝገብ \n 2. ገንዘብ ወደ ቴሌ ብር በማስተላለፍ ክፍያውን መፈጸም ይችላሉ ። \n  ወይም \n 1. የቴሌ ብር መክፍያ ገፅ ለይ የሚመጣውን QR CODE screen shot ማድረግ\n  2. ለቴሌ ብር ወኪል ወይንም ቴሌ ብር ለሚጠቀም ሰው በመላክ ክፍያውን መፈፀም ይችላሉ ።\n  ለበለጠ መረጃ ⬇️\n  በ Exam Time ጥናታቹውን ቀለል ያድርጉ !!!  https://youtu.be/a5VzHJs9CCI', {
  })
})

bot.command('loading_questions', ctx => {
  bot.telegram.sendMessage(ctx.chat.id, '3. ክፍያ ከፍለው ጥያቄዎችን እና ኖቶች ሎድ ለማድረግ\n\n  -ክፍያውን ከጨረሱ በኃላ የ refresh ምልክቷን በመጫን ሙሉ አገልግሎቱን ማግኘት ይችላሉ።\n  *ሎድ አድርጐ አስኪጨርሱ በትዕግሥት ይጠብቁ *\n *vpn ማጥፋት አይዘንጉ*\n ለበለጠ መረጃ ⬇️  https://youtu.be/7zIj1Vr8iO4', {
  })
})

bot.command('services', ctx => {

  bot.telegram.sendMessage(ctx.chat.id, '4. የ Exam Time ክፍያ ከፈፀሙ በኃላ የሚያገኙት አገልግሎቶች\n\n  የ6 ዓመት የማትሪክ ጥያቄዎችን የ2014 ጨምሮ እንዲሁም ከ9-12ተኛ በአጫጭር ኖቶች ።\n  *አጠቃቀም*\n  በሁለት መንገድ ጥያቄዎችን መለማመድ ይችላሉ \n 1. የልምምድ አገልግሎቱን በማብራት ጥያቄዎችን ከነማብራራያቸው ማግኘት ይችላሉ።\n  2. የልምምድ አገልግሎቱን በማጥፋት ልክ ፈተና ወስጥ እንዳሉ እራሶትን መፈተን ይችላሉ።\n  የማስታወሻ ቦታ ውስጥ በመግባት ያገኙትን ውጤት መከታተል ይችላሉ ።\n  የ6ዓመት የማትሪክ ጥያቄዎችን ከበቂ ማብራሪያ ጋር የያዘ ።\n  ለሁሉም የትምህርት አይነቶች አጫጭር ማጥኛ ኖቶች የያዘ ።\n  ለበለጠ መረጃ ⬇️\n  https://youtu.be/kCpru6-F9dU', {
  })
})


// expressApp.use(bot.webhookCallback('/secret-path'))
// bot.telegram.setWebhook('<YOUR_CAPSULE_URL>/secret-path')
// expressApp.listen(port, () => console.log(`Listening on ${port}`));
bot.launch()