const Discord = require('discord.js')
const client = new Discord.Client()

const prefix = "%"

client.on('ready', () => {
    console.log(`${client.user.username}`)
    client.user.setPresence({
        activity: {
            name: `${prefix}help`,
            type: 'STREAMING',
            url: 'https://twitch.tv/cypergaems'
            
        }
    })

})


client.login(`ODAwNzM1NjYyNjI2MDQ1OTky.YAWdMg.SLgN1N9kV-yg3T2pAn8Y-0iOh00`)