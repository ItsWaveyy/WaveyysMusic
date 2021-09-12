module.exports = {
  Admins: ["761299976411807764", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "-", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/sbySMS7m3v", //Support Server Link
  Token: process.env.Token || "ODgwNjU2MzI4MDM5NzMxMjEw.YShdHg.CvPc7QCVKZRzxtd_Fy06i9z-aBo", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "880656328039731210", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "PTFOyTbWZLxhbsuAKPHrFgg-oocVeHuq", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "WaveyyMusicBot", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/avatars/880656328039731210/f0f4f94464aa3b61bb2057c5c3f4b395.png?size=256", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
    secure: false, // Set this to true if you're self-hosting lavalink on replit.
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
    secure: false // Set this to true if you're self-hosting lavalink on replit.
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "eea47963dbb14935810b22507778fd47", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "99499b2e53794547b98d99e549cd5acc", //Spotify Client Secret
  },
};
