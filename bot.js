// BOT CODE
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const commands = require("./commands.json");
client.config = config;
client.music = require("discord.js-musicbot-addon");

client.on('ready', () => { 
    client.user.setStatus('available')
    client.user.setPresence({ game: { name: "In " + client.guilds.size + " guilds | " + config.prefix + commands.help, type: 1, url: "https://www.twitch.tv/sammwy_" } });
    setInterval(() => {
       client.user.setPresence({ game: { name: "In " + client.guilds.size + " guilds | " + config.prefix + commands.help, type: 1, url: "https://www.twitch.tv/sammwy_" } });
    }, 60000)
});

client.music.start(client, {
  youtubeKey: config.youtubeKey,
  botPrefix: config.prefix,
  messageNewSong: config.messageNewSong,
  bigPicture: config.bigPicture,
  maxQueueSize: config.maxQueueSize,
  defVolume: config.defVolume,
  anyoneCanSkip: config.anyoneCanSkip,
  botAdmins: config.botAdmins,
  anyoneCanAdjust: config.anyoneCanAdjust,
  ownerOverMember: config.ownerOverMember,
  anyoneCanLeave: config.anyoneCanLeave,
  ownerID: config.ownerID,
  logging: config.logging,
  requesterName: config.requesterName,
  inlineEmbeds: config.inlineEmbeds,
  musicPresence: config.musicPresence,
  clearPresence: config.clearPresence,
  insertMusic: config.insertMusic,
  channelWhitelist: config.channelWhitelist,
  channelBlacklist: config.channelBlacklist,
  bitRate: config.bigRate,
  help: {
    enabled: false,
    name: "disabled_command",
    exclude: true
  }, 
  play: { name: commands.play },
  search: { name: commands.search },
  skip: { name: commands.skip },
  queue: { name: commands.queue },
  pause: { name: commands.pause },
  resume: { name: commands.resume },
  remove: { name: commands.remove },
  volume: { name: commands.volume },
  leave: { name: commands.leave },
  clearqueue: { name: commands.clearqueue },
  np: { name: commands.np }
});

client.on('message', message => {
  if (message.content.startsWith(config.prefix + commands.help)) {
  	if (message.guild == null) {
  		message.author.send("Command only avaible in a Guild!")
  	} else {
  		const embed = new Discord.RichEmbed()
  		.setAuthor("Commands", message.author.avatarURL)
  		.setColor(0x2ecc71)
  		.setFooter(message.member.user.tag, message.author.avatarURL)
  		.setTimestamp()
  		.addField(config.prefix + commands.play, "Play audio from YouTube.")
  		.addField(config.prefix + commands.search, "Search's for up to 10 videos from YT.")
  		.addField(config.prefix + commands.skip, "Skip a song or multi songs with " + commands.skip + " [some number].")
  		.addField(config.prefix + commands.queue, "Display the current queue.")
  		.addField(config.prefix + commands.pause, "Pause music playback.")
  		.addField(config.prefix + commands.resume, "Resume music playback.")
  		.addField(config.prefix + commands.remove, "Remove a song from the queue by position.")
  		.addField(config.prefix + commands.volume, "Adjust the playback volume between 1 and 200.")
  		.addField(config.prefix + commands.leave, "Clears the song queue and leaves the channel.")
  		.addField(config.prefix + commands.clearqueue, "Clears the song queue.")
  		.addField(config.prefix + commands.np, "Show the current playing song.")
  		message.channel.send({embed});
  	}
  }
});

client.login(config.token);