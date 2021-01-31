const Discord = require("discord.js");
const client = global.client;

exports.execute = async () => {
    client.user.setPresence({ activity: { name: "Vortex Boş Alt Yapı"}, status: "dnd" });
};

exports.conf = {
  event: "ready"
};