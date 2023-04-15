module.exports = {
    name: "messageCreate",
    async execute(message) {
        if(message.author.bot) return;

        if (message.content.includes("http://") || message.content.includes("http//") || message.content.includes("discord.gg")) {
            message.delete();

            message.channel.send({ content: `${message.author}, don't attempt to send links or moderator may have to punish you! :(`});
        }
    }
}