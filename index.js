const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json")

console.log("Le bot est allumé !");
bot.on ('ready', async () =>{
    bot.user.setStatus('online')
    bot.user.setActivity("Développer mon bot",)
})

bot.login (process.env.TOKEN);