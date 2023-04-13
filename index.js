const {Client , GatewayIntentBits   } = require(`discord.js`)
const express = require(`express`)
const app = express()
require('dotenv').config();

const token = process.env.DISCORD_BOT_TOKEN;
const swearWords = [`a7a` , `dick` , `ksomk` , `yabn elmtnaka` , `yl3n` , `omk` , `fuck you` , `mf` , `motherFucker` , `momes`, `mtnak` ,`mnayk` , `den` , `sharmota` , `a7ba` , `fuck of` , `fuck off` , `ktfom` , `amk` , `tezk` , `ba3bask` , `kos`]

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});


client.on(`ready` , () => {
    console.log(`logged as ${client.user.tag}`)
})
client.on(`messageCreate` , message => {
    console.log(message);
    if(message.author.bot) return
    console.log(`Received message: ${message.content}`);
    const containsSwearWord = swearWords.some((word) => {
        return message.content.includes(word)
    })
    if(containsSwearWord) {
        const userMention = `<@${message.author.id}>`
        message.channel.send(`${userMention}, اتكلم بأدب يا ولد `)
        message
        .delete()
        .then(()=> console.log(`deleted`))
        .catch(console.error);
    }
})

// Set up express server with a port
    const port = process.env.PORT || 3000;
    app.get(`/`,(req , res) => {
        res.send(`AntiSwearing bot is online!`)
    })
    app.listen(port , () => {
        console.log(`Server is listening on port ${port}`);
    })
client.login(token).catch((err) => console.error(`Error logging in: ${err}`));
