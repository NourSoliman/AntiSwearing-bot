const { Client, GatewayIntentBits,  Embed, EmbedBuilder  } = require(`discord.js`)
const express = require(`express`)
const app = express()
require('dotenv').config();

const token = process.env.DISCORD_BOT_TOKEN;
//اسف على هذه الالفاظ لكن ما باليد حيله علشان انا بقعد فى الديسكورد وقت كبير بشوف الالفاظ دى كتير و كانت حاجه مش كويسه خالص
const swearWords = [`a7a`, `dick`, `ksomk`, `yabn elmtnaka`, `yl3n`,
 `omk`, `fuck you`, `mf`, `motherFucker`, `momes`, 
 `mtnak`, `mnayk`, `den`, `sharmota`, `a7ba`, 
 `fuck of`, `fuck off`, `ktfom`, `amk`, `tezk`, 
 `ba3bask`, `kos` , `كس` , `طيز` , `bulbul` , `bolbol` 
, `tez` , `بلبل` ,`ديك` , `يلعنديك` , 
`يلعن دين` , `متناك` , `بتتناك` , `كسمك` ,
 `شرموط` , `شرموطه` , `خول` , `عرص` ,`احبه`, `بعبص` ,`معرص` , `دين` , `امك` ,`أمك`,`بعبصك` , `5wal` , `5awal`]
const englishSwearWords = [`Fuck` , `FuckYou` , `fuck` , `fuckyou` , `fk u` 
, `mf` , `motherfucker` , `dick` , `pussy` , `ass` , `boobs`, `killyourself` , `kys` , `amk` , `omfg` ]
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});


client.on(`ready`, () => {
    console.log(`logged as ${client.user.tag}`)
})
client.on(`messageCreate`, message => {
    console.log(message);
    if (message.author.bot) return
    console.log(`Received message: ${message.content}`);
    const containsSwearWord = swearWords.some((word) => {
        return message.content.includes(word)
    })
    const containsEnglishSwearWord = englishSwearWords.some((word) => {
        return message.content.includes(word)
    })
    if(containsSwearWord) {
    // const userMention = `<@${message.author.id}>`
    // message.channel.send(`${userMention}, اتكلم بأدب يا ولد ` , {files:[{attachment:`picture.jpg`}]}).catch(error => {console.log(error);})
    // message
    // .delete()
    // .then(()=> console.log(`deleted`))
    // .catch(console.error);
    // }
    const userMention = `<@${message.author.id}>`
    message.channel.send({
        embeds:[new EmbedBuilder().setDescription(`**${userMention}**اتكلم بأدب يا ولد`)
        .setImage(`https://i.ytimg.com/vi/DXyQTvj6Nv8/mqdefault.jpg`)
        .setFooter({text:`NourSoliman`}).setTitle(`Warning Message`).setColor(`DarkRed`).setTimestamp()]
    })
    message.delete().then(()=> console.log(`deleted`))
}
else if(containsEnglishSwearWord) {
    const userMention = `<@${message.author.id}>`
    message.channel.send({
        embeds:[new EmbedBuilder().setDescription(`**${userMention}**`)
        .setImage(`https://stayhipp.com/wp-content/uploads/2019/02/you-better-watch.jpg`)
        .setFooter({text:`NourSoliman`}).setTitle(`Warning Message`).setColor(`DarkReda7a`).setTimestamp()]
    })
    message.delete().then(()=> console.log(`deleted`))
}
})


// Set up express server with a port
const port = process.env.PORT || 3000;
app.get(`/`, (req, res) => {
    res.send(`AntiSwearing bot is online!`)
})
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
client.login(token).catch((err) => console.error(`Error logging in: ${err}`));
