const token = 'AAGxCdKfp5TXrGLoykuhgvOpZPEI4aD-GzC6VSs';
let TelegramBot = require('node-telegram-bot-api');
let bot = new TelegramBot(token, { polling: true });
 
// Matches "/echo [whatever]"
bot.onText(/\/echo(.+)/, (msg, match) => {
 
    // The 'msg' is the received Message from Telegram
    // and 'match' is the result of executing the regexp 
    // above on the text content of the message
 
    let chatId = msg.chat.id;
 
    // The captured "whatever"
    let resp = match[1];
 
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
    bot.on('polling_error', (error) => {
        var time = new Date();
        console.log("TIME:", time);
        console.log("CODE:", error.code);  // => 'EFATAL'
        console.log("MSG:", error.message);
        console.log("STACK:", error.stack);
    });
});