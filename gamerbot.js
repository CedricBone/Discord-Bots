console.log('Based Gamer Bot');

const Discord = require('discord.js');
const client = new Discord.Client();
require("dotenv").config();
client.login(process.env.Bot_Token);
client.on('ready', readyDiscord);

function readyDiscord(){
    console.log(`${client.user.tag} is succsesfully logged in!`)
};

client.on('message', gotMessage);

/*
Dictionary of words and thier related values
var KEYWORDS = {};
KEYWORDS['based'] = 0.1;
*/

// array of based words
const basedWords = ['based', 'death']

//discord IDs of each individual the Bot keeps track of
const cedricID = 295303493705531393;
const nateID = 643654617359450143;

//Dictionary of IDs and thier related gamerscores
const gamerscore = {
        0 : 295303493705531393,
        nateID : 0

};

//Array of based replies and funny quotes
const basedReplies = [
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

//Function that scores gamerscore
function score(msg) {
        if ( (msg.author.id in gamerscore) && (msg.content in basedWords) ){
                gamerscore[msg.author.id] += 1;
        }
        else if ( (msg.author.id in gamerscore) && !(msg.content in basedWords) ){
                gamerscore[msg.author.id] += -1;
        }
        else{
                return;
        }
};

const movieChatID = 546153719880876036;

//async function that reacts to text in chat
async function gotMessage(msg){

    let tokens = msg.cleanContent.split(" ");
    const fetch = require("node-fetch");

    //used to specify which channel the bot should be used in and tells Trevor to "Shut Up"
    if ( (msg.content.startsWith('!gif') || msg.content == 'based' || msg.content == 'gamerscore') &&  msg.channel.id != movieChatID) {
        if (msg.author.id == 343466602869686275){
                msg.reply("Shut Up");
                return; 
        }
        else    {
        msg.reply("The bot only works in the movie-club channel bruh");
        return; }
 }

    //Modified coding Train code for the gifs
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
        return;
      }
      

    //If based is typed a random reply from the 'basedReplies' array will be put in chat
    else if ( msg.content === 'based' ) {
      const randomIndex = Math.floor(Math.random() * basedReplies.length);
      msg.channel.send(basedReplies[randomIndex]);
      return;
    }

    //Gives a person their gamerscore if 'gamerscore' is typed in chat or a random number between 0-100 if the person isnt being tracked
    else if (msg.content === 'gamerscore'){

        var level = ["Trevor", "Anti-Based", "Unbased", "Normie", "Average", "Based", "Mega Based", "Ultra Based", "Mega-Ultra Based", "MA!"];
        var levelIndex = 0;
        const gm = Math.random() * (101 - 0);

        console.log( msg.author.id );
        if ( msg.author.id in gamerscore ) {
                msg.reply("Your gamerscore is" + gamerscore[msg.author.id]);
                return; 
        }

        else if (gm <= 10){
                levelIndex = 0;
        }

        else if (gm <= 20 && gm > 10){
                levelIndex = 1;
        }

        else if (gm <= 30 && gm > 20){
                levelIndex = 2;
        }

        else if (gm <= 40 && gm > 30){
                levelIndex = 3;
        }

        else if (gm <= 50 && gm > 40){
                levelIndex = 4;
        }

        else if (gm <= 60 && gm > 50){
                levelIndex = 5;
        }

        else if (gm <= 70 && gm > 60){
                levelIndex = 6;
        }

        else if (gm <= 80 && gm > 70){
                levelIndex = 7;
        }

        else if (gm <= 90 && gm > 80){
                levelIndex = 8;
        }

        else if (gm >= 90){
                levelIndex = 9;
        }

    msg.reply("Your Gamerscore is " + gm + ". That means you are " + level[levelIndex]);
    return;
    }

    else{
            score(msg);
    }

  }