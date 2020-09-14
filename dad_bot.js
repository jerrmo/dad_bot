const Discord = require('discord.js')
const client = new Discord.Client();
client.login('ENTER DISCORD KEY HERE');

client.on("ready", () => {
  console.log("ready!");

  client.user.setActivity ("Minecraft.")
});

const prefix = "!"
client.on ("message", (message) => {
  
  if (message.content.startsWith (prefix + "dad")) {
    number = 76;
    imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    message.channel.send ( {files: ["./images/" + imageNumber + ".png"]})
}

});
