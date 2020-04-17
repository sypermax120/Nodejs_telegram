// donnu_2211_bot

var TelegramBot = require('node-telegram-bot-api');

var token = '1198865925:AAGR_TMVmzdZ9yFXGCq-vPdDD_BKQPCwvxQ';
var bot = new TelegramBot(token, {polling: true});

var notes = [];

bot.onText(/\/hi/, function (msg, match) {
    var userId = msg.from.id;
    var text = match[1];

    bot.sendMessage(userId, 'Я тебя не знаю:)');
});

bot.onText(/\/echo (.+)/, function (msg, match) {
    var fromId = msg.from.id; // Получаем ID отправителя
    var resp = match[1]; // Получаем текст после /echo
    
    bot.sendMessage(fromId, resp);
});
