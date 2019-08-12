/*
Will change the bot's status to a random one.
*/

exports.run = (client, message, args) => {
	const fs = require("fs");
	const customActivities = JSON.parse(fs.readFileSync(client.config.customActivities));
	
	let randStatus = customActivities[Math.floor(Math.random() * customActivities.length)];
	client.user.setActivity(randStatus);	
	return message.channel.send("New activity set <:bruh:517226415725346827>");
}
