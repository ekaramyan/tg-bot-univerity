const TelegramApi = require('node-telegram-bot-api');
const token = '5596396937:AAGtP5AK1P6--fW3A3r0bYlXdKBQQdEiI0M';

const bot = new TelegramApi(token, {polling: true})

bot.setMyCommands([
{command: '/satrt', description: 'приветульки всякие'},
{command: '/info', description: 'че это за бот вообще?'},
{command: '/connect', description: 'соединим с деканатом'}
])
const { listener } = require('process');

bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    console.log(msg)
    if(text === '/start'){
        return bot.sendMessage(chatId, 'Welcome to the Dakanat, buddy')
    }
    if (text === '/info')
    {
    return bot.sendMessage(chatId, 'это бот для общения с деканатом')
    }
    if (text === '/connect')
    {
    return bot.sendMessage(chatId, 'соединяем, подождите...')
    
    }
    else
    {
        bot.sendMessage(chatId, 'я не понимаю')
    }
})
