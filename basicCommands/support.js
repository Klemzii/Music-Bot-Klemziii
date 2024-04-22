const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = 'https://discord.gg/snitchtown-rp';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle('Support server')
            .setDescription(`Click [here](${supportServerLink}) to join our server.\nWe will be there for you anytime ❤️`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/1113800537402527903/1119995338359586837/a_e8d3128cee7f07ccec68962a8294f43d.gif?ex=663795f1&is=662520f1&hm=0186da319d80c875e071d8bd27744ab29dfc7e6328ed991e62c99f9d1a76c1a5&`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};


/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
