console.log('Based Gamer Bot ');

const Discord = require('discord.js');
const client = new Discord.Client();
require("dotenv").config();
client.login(process.env.Bot_Token);
client.on('ready', readyDiscord);

function readyDiscord(){
    console.log('Function readyDiscord Succesful')
}

client.on('message', gotMessage);

const replies = [
'Gamer!!!', 
"1v1s are more fun when you're playing a character you like",
"I feel so powerful", 
"4 Chan LOL", 
"Thank you for the reddit gold kind stranger", 
"What if we run out of letters ?",
"There can only be one",
"honestly, just shut up",
"Revolt against the Hogs",
"Slap city? More like nope city!",
"TWO SCOOPS",
"r/okbuddyretard",
"The proletariat will rise again",
"Who asked",
"Wouldn't you like to know...weather boy",
"You're dead! You're dead! You're dead! ... You're dead and out of this world.",
"SEETHE",
"Astitva WHO?!?",
"Give the gamer his gold",
"Don't make me drink alone",
"Y'all mind if I ... WILD out",
"2 EZ",
"Money Good",
"Every night is ABBA night",
"Shield Seether",
"Let’s go gamers! (exaggerated british accent)",
"She gets hysterical",
"It doesn’t have to be like this",
"Gaming?",
"When the lion’s hungry… HE EATS!!",
"Vote for the CPF!!",
"Chris arc",
"Bro check out this pro league angle",
"PIPE DOWN!!!",
"An apology would be nice",
"No guns, no knives, no shields",
"That's the funniest shit I've ever seen",
"it's 2016"
];

//const mainChatID = '710604323364798467'
//const botDumpID = '710607945104359444'

async function gotMessage(msg){
    //console.log(msg.content);
    let tokens = msg.cleanContent.split(" ");
    const fetch = require("node-fetch");

    //new Discord.GuildMember(clientdataguild);
    if ( Discord.GuildMember.id == 295303493705531393){
      msg.channel.send("Sorry William, I cannot process your request William.")
   }
/*
    if (msg.channel.id === mainChatID && msg.content === 'based') {
        msg.reply('Keep it in the bot-dump channel please!');
    }
    */

    if ( msg.content === 'based' ) {
      const randomIndex = Math.floor(Math.random() * replies.length);
      msg.channel.send(replies[randomIndex]);
    }

    else if (msg.content === 'gamerscore'){
        var level;
        const gamerscore = Math.random() * (101 - 0);
        if (gamerscore <= 10){
            level = "Trevor"
        }

        else if (gamerscore <= 20 && gamerscore > 10){
            level = "Anti-Based";
        }

        else if (gamerscore <= 30 && gamerscore > 20){
                level = "Unbased";
        }

        else if (gamerscore <= 40 && gamerscore > 30){
                level = "Normy";
        }

        else if (gamerscore <= 50 && gamerscore > 40){
                level = "Average";
        }

        else if (gamerscore <= 60 && gamerscore > 50){
                level = "Based";
        }

        else if (gamerscore <= 70 && gamerscore > 60){
                level = "Mega Based";
        }

        else if (gamerscore <= 80 && gamerscore > 70){
                level = "Ultra Based";
        }

        else if (gamerscore <= 90 && gamerscore > 80){
                level = "Mega-Ultra Based";
        }

        else if (gamerscore >= 90){
                level = "MA!";
        }

    msg.reply("Your Gamerscore is " + gamerscore + ". That means you are " + level);
    }

    //coding Train code
    else if (tokens[0] == "!gif") {
        let keywords = "gamer";
        if (tokens.length > 1) {
          keywords = tokens.slice(1, tokens.length).join(" ");
        }
        let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=low`;
        let response = await fetch(url);
        let json = await response.json();
        const index = Math.floor(Math.random() * json.results.length);
        msg.channel.send(json.results[index].url);
        msg.channel.send(keywords);
      }
  }