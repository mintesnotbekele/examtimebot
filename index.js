const { Telegraf } = require('telegraf')

const bot = new Telegraf('6131597201:AAGxCdKfp5TXrGLoyvOpZPEI4aD-GzC6VSs');

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    })
});

bot.launch();