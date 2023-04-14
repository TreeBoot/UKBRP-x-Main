const {Client, SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits} = require("discord.js");
const {openticket} = require("../../config.json");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ticket")
        .setDescription("Create a ticket message.")
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels),

    async execute(interaction) {
        const {guild} = interaction;

        const embed = new EmbedBuilder()
            .setDescription("Open a ticket in the discord server.")

        const button = new ActionRowBuilder().setComponents(
            new ButtonBuilder().setCustomId('member').setLabel('Report member').setStyle(ButtonStyle.Danger).setEmoji('⛔'),
            new ButtonBuilder().setCustomId('bug').setLabel('Report bug').setStyle(ButtonStyle.Secondary).setEmoji('🐞'),
            new ButtonBuilder().setCustomId('general').setLabel('General Support').setStyle(ButtonStyle.Primary).setEmoji('⚙'),
            new ButtonBuilder().setCustomId('appeal').setLabel('Appeal ban').setStyle(ButtonStyle.Success).setEmoji('🎫'),
        );

        await guild.channels.cache.get(openticket).send({
            embeds: ([embed]),
            components: [button]
        });

        interaction.reply({content: "Ticket message has been sent.", ephemeral: true})
    }
}