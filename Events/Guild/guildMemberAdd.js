const {EmbedBuilder} = require("@discordjs/builders");
const {GuildMember, Embed} = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    execute(member) {
        const {user, guild} = member;
        const welcomeChannel = member.guild.channels.cache.get('1049125843965837362');
        const welcomeMessage = `Welcome <@${member.id}> to UK Border RP! We hope, that you will have a good time here!`;
        const memberRole = '1041737872128098404';

        const welcomeEmbed = new EmbedBuilder()
        .setTitle("**New member!**")
        .setDescription(welcomeMessage)
        .setColor(0x037821)
        .addFields({ name: 'Total Members', value: `${guild.memberCount}`})
        .setTimestamp();

        welcomeChannel.send({embeds: [welcomeEmbed]});
        member.roles.add(memberRole);
    }
}