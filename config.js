module.exports = {
    bot: {
        token: process.env['TOKEN'],
        prefix: "--",
        owners: ["713158444240207932"],
        mongourl: process.env['MONGODB']

    },

    website: {
        callback: "https://cloudbotlist.ga/callback",
        secret: process.env['WEBSECRET'],
        clientID: "878014386051108884",
        tags: [ "Moderation", "Fun", "Minecraft","Economy","Guard","NSFW","Anime","Invite","Music","Logging", "Web Dashboard", "Reddit", "Youtube", "Twitch", "Crypto", "Leveling", "Game", "Roleplay", "Utility", "Turkish" ]    
    },

    server: {
        id: "863501690754170951",
        roles: {
            yonetici: "",
            moderator: "878022833370963968",
            profile: {
                booster: "",
                sponsor: "",
                supporter: "",
                partnerRole: ""
            },
            codeshare: {
                javascript: "JS",
                html: "HTML",
                altyapilar: "ALTYAPILAR",
                bdfd: "BDFD",
                besdavet: "BESDAVET",
                ondavet: "ONDAVET",
                onbesdavet: "ONBESDAVET",
                yirmidavet: "YIRMIDAVET"
            },
            botlist: {
                developer: "878023758202404897",
                certified_developer: "878023758202404897",
                bot: "878023288666869853",
                certified_bot: "878023288666869853"
            }
        },
        channels: {
            codelog: "878310533391081593",
            login: "878310533391081593",
            webstatus: "878310533391081593",
            uptimelog: "878310533391081593",
            botlog: "878016888335114261",
            votes: "878014749495930960"
        }
    }


}
