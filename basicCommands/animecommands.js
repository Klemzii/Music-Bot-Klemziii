const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'animecommands',
  description: 'Display a list of available anime-related commands!',
  execute(message, args) {
    const embed = new EmbedBuilder()
      .setColor('#FFFFFF')
      .setTitle('Anime Commands')
      .setDescription(`__**✅ List Of Availabe Interations**__\n\n▶️ __**Section 1 :**__\n  blush, cuddle, dance, slap, bonk, bully, hug, confused, kiss, pat, happy, smile.\n\n▶️ __**Section 2 :**__\n yes, highfive, wink, wave, thinking, sad, cry, stare, bored, scream, nervous, kill.\n`)
      
      .setImage(`https://cdn.discordapp.com/attachments/1230753774096875562/1231978724044570625/Snitch_Town_Music.png?ex=6638ec98&is=66267798&hm=02bcd83dd70321be829a133c3e8a217797dfd62a279427a41d301ccbf34469cc&`);
    message.reply({ embeds: [embed] });
  },
};
