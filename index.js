const cron = require("node-cron");
// import axios from "axios";
const axios = require("axios");

const sendToDiscord = (message) => {
	const serverName = process.env.SERVER_NAME;
	const body = {
		content: `${serverName}'s public ip: ${message}`,
	};
	const discordChannel = process.env.DISCORD_CHANNEL_WEBHOOK;

	axios.post(discordChannel, body).then((result) => {
		console.log(result.data);
	});
};

const getPublicIP = async () => {
	const host = "https://api.ipify.org";
	const result = await axios.get(host);
	return result.data;
};

cron.schedule(`* * ${process.env.HOUR} * *`, async () => {
	console.log("CRON START:");
    const ip = await getPublicIP();
	sendToDiscord(ip);
});

const main = async () => {
	const ip = await getPublicIP();
	sendToDiscord(ip);
};

main();
