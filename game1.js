/* Star Wars!
- Start with empty battlefield. Once char is selected they will populate playing area 
- Will need random number generator for attack power
- Variables for HP that will subtract value of attack power and display current value
- When attack power is generated, subtract number from HP
- List characters facing one direction as player character and list characters
facing other direction as second list. May be able to add code that, depending
on who player picks, will make second char face other direction.
- Spritely seems pretty straightforward - research how to make sprite move slightly 
forward when they attack. Right now, moving background seems doable
- Possibly have random background with same movement effects! Space, Tattooine, Death Star
- May need to look into delay between pressing attack and charcter movement
- Will also need to look into transparency and z index for playing field. Will possibly need
high z index for player char. 
- Possibly look into transitions for players entering battlefield
- For Bootstrap, will likely need row/div with background, probably half page. As well as div
with title of game, followed by row with 2 columns with char Name and HP and player models, then row with remaining, not-chosen char, 
last row with two columns with attack buttons.
- Most likely will create objects for each character
    - Name
    - HP
    - Attack Power Range - Random number generator with attack strength based on power
    - Maybe block chance - Possibly every odd number rolled will be a block
    - Image
Anakin - 250HP Power: 25 - 50
Vader - 285HP Power: 30 - 60
Luke - 225HP Power: 20 - 40
Obi-Wan - 230HP Power: 20 - 40
Yoda - 290HP Power: 35 - 70
Emperor - 300HP Power: 35 - 70
Grievous - 190HP Power: 15 - 30
Mace - 270HP Power: 28 - 56
Boba - 170HP Power: 10 - 20
Chewie - 170HP Power: 10 - 20
Solo - 150HP Power: 8 - 16
Leia - 190HP Power: 15 - 30
Padme - 120HP Power: 5 - 10
Jar-Jar - 100HP Power: 2 - 100
Qui-Gon - 225HP Power: 18-36
Functions:
Start Game - sets up field of play, displays characters, their HP and a background
Play Game - Lets player choose character and ememy. Ease char onto playing field
Fight Game - Attack button functionality, movement of characters in response to attack button 
and random selection of attack power. 
End Game - If HP after attack <= 0, char dies. */

var playerChar;
var cpuChar; 
var enemyCount = 0;


// function player1(clicked_id){
//     switch (clicked_id){
//         case "anakin-l":
//             var playerChar = anakin;
//             console.log(clicked_id);
//             console.log(playerChar);
//             break;
//         case "boba-l":
//             var playerChar = boba;
//             break;
//         case "chewie-l":
//             var playerChar = chewie;
//             break;
//         case "emperor-l":
//             var playerChar = emperor;
//             break;
//         case "solo-l":
//             var playerChar = solo;
//             break;
//         case "jar-jar-l":
//             var playerChar = jar_jar;
//             break;
//         case "leia-l":
//             var playerChar = leia;
//             break;
//         case "luke-l":
//             var playerChar = luke;
//             break;
//         case "vader-l":
//             var playerChar = vader;
//             break;
//         case "obi-wan-l":
//             var playerChar = obi_wan;
//             break;
//         case "yoda-l":
//             var playerChar = yoda;
//             break;
//         case "mace-l":
//             var playerChar = mace;
//             break;
//     }};
// function player2(clicked_id){
//     switch (clicked_id){
//         case "anakin-r":
//             var cpuChar = anakin;
//             break;
//         case "boba-r":
//             var cpuChar = boba;
//             break;
//         case "chewie-r":
//             var cpuChar = chewie;
//             break;
//         case "emperor-r":
//             var cpuChar = emperor;
//             break;
//         case "solo-r":
//             var cpuChar = solo;
//             break;
//         case "jar-jar-r":
//             var cpuChar = jar_jar;
//             break;
//         case "leia-r":
//             var cpuChar = leia;
//             break;
//         case "luke-r":
//             var cpuChar = luke;
//             break;
//         case "vader-r":
//             var cpuChar = vader;
//             break;
//         case "obi-wan-r":
//             var cpuChar = obi_wan;
//             break;
//         case "yoda-r":
//             var cpuChar = yoda;
//             break;
//         case "mace-r":
//             var cpuChar = mace;
//             break;
//     }};

function player1(clicked_id){
    playerChar = characters[clicked_id];
    console.log(playerChar);
};

function player2(clicked_id){
    console.log(clicked_id);
    console.log(characters[clicked_id]);
    cpuChar = characters[clicked_id];
    console.log(cpuChar);
};

$("#attackButton").on("click", function(){
    if (playerChar === jar_jar){
        for (var i = 0; i <= 4; i++){
            cpuChar.right_hp = cpuChar.right_hp - playerChar.attack_power;
            $("#anakin_stats_l").text(playerChar.name + " " + playerChar.left_hp + "HP");
            $("#anakin_stats_l").show();
            $("#fight_message").text(playerChar.name + "was hit for " + cpuChar.counter_attack + " points of damage!");
            $("#fight_message").text(cpuChar.name + "was hit for " + playerChar.attack_power + " points of damage!");
            $("#anakin_stats_r").text(cpuChar.name + " " + cpuChar.right_hp + "HP");
            $("#anakin_stats_r").show(); 
            playerChar.attack_power = playerChar.attack_power + playerChar.attack_power; 
        };
        playerChar.left_hp = playerChar.left_hp - cpuChar.counter_attack;
        checkGame(playerChar, cpuChar);    
    }
    else {
        cpuChar.right_hp = cpuChar.right_hp - playerChar.attack_power;
        playerChar.left_hp = playerChar.left_hp - cpuChar.counter_attack;
        console.log(playerChar.stat_id_left);
        $("#" + playerChar.stat_id_left).text(playerChar.name + " " + playerChar.left_hp + "HP");
        $(playerChar.stat_id_left).show();
        $("#" + cpuChar.stat_id_right).text(cpuChar.name + " " + cpuChar.right_hp + "HP");
        $("#anakin_stats_r").show();
        var message1 = $("<p><p>").text(playerChar.name + "was hit for " + cpuChar.counter_attack + " points of damage!");
        var message2 = $("<p><p>").text(cpuChar.name + "was hit for " + playerChar.attack_power + " points of damage!");
        $("#fight_message").append(message1, message2);
        playerChar.attack_power = playerChar.attack_power + playerChar.attack_power;
        checkGame(playerChar, cpuChar);
    }
});

function checkGame(playerChar, cpuChar){
    if (playerChar.left_hp <= 0){
        $(".image_file_l").hide();
        $("#fight_message").text("You Lose!");
    }
    if (cpuChar.right_hp <= 0 && enemyCount < 4){
        enemyCount++;
        console.log(Math.floor(Math.random() * 12));
        console.log(enemyCount);
        var keys = (Object.keys(characters));
        $(".image_file_r").hide();
        cpuChar = characters[keys[Math.floor(Math.random() * 12)]];
        console.log(cpuChar);
        $("#" + cpuChar.stat_id_rightx).text(cpuChar.name + " " + cpuChar.left_hp + "HP");
        $("#anakin_stats_r").show();
    } 
}


var anakin = {
    name: "Anakin Skywalker",
    left_hp: 250,
    right_hp: 250,
    attack_power: Math.floor(Math.random() * (50 - 25 + 1)) + 25,
    counter_attack: 25,
    char_left: "assets/images/Characters-Left/anakin.png",
    char_right: "assets/images/Characters-Right/anakin.png",
    stat_id_right: "anakin_stats_r",
    stat_id_left: "anakin_stats_l"
}
var vader = {
    name: "Darth Vader",
    left_hp: 285,
    right_hp: 285,
    attack_power: Math.floor(Math.random() * (60 - 30 + 1)) + 30,
    counter_attack: 30,
    char_left: "assets/images/Characters-Left/vader.png",
    char_right: "assets/images/Characters-Right/vader.png",
    stat_id_right: "vader_stats_r",
    stat_id_left: "vader_stats_l"
}
var luke = {
    name: "Luke Skywalker",
    left_hp: 225,
    right_hp: 225,
    attack_power: Math.floor(Math.random() * (40 - 20 + 1)) + 20,
    counter_attack: 20,
    char_left: "assets/images/Characters-Left/luke.png",
    char_right: "assets/images/Characters-Right/luke.png",
    stat_id_right: "luke_stats_r",
    stat_id_left: "luke_stats_l"
}
var obi_wan = {
    name: "Obi-Wan Kenobi",
    left_hp: 230,
    right_hp: 230,
    attack_power: Math.floor(Math.random() * (40 - 20 + 1)) + 20,
    counter_attack: 20,
    char_left: "assets/images/Characters-Left/obi-wan.png",
    char_right: "assets/images/Characters-Right/obi-wan.png",
    stat_id_right: "obi-wan_stats_r",
    stat_id_left: "obi-wan_stats_l"
}
var yoda = {
    name: "Yoda",
    left_hp: 300,
    right_hp: 300,
    attack_power: Math.floor(Math.random() * (70 - 35 + 1)) + 35,
    counter_attack: 35,
    char_left: "assets/images/Characters-Left/yoda.png",
    char_right: "assets/images/Characters-Right/yoda.png",
    stat_id_right: "yoda_stats_r",
    stat_id_left: "yoda_stats_l"
}
var emperor = {
    name: "The Emperor",
    left_hp: 300,
    right_hp: 300,
    attack_power: Math.floor(Math.random() * (70 - 35 + 1)) + 35,
    counter_attack: 35,
    char_left: "assets/images/Characters-Left/emperor.png",
    char_right: "assets/images/Characters-Right/emperor.png",
    stat_id_right: "emperor_stats_r",
    stat_id_left: "emperor_stats_l"
}
var grievous = {
    name: "General Grievous",
    left_hp: 190,
    right_hp: 190,
    attack_power: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
    counter_attack: 15,
    char_left: "assets/images/Characters-Left/grievous.png",
    char_right: "assets/images/Characters-Right/grievous.png",
    stat_id_right: "grievous_stats_r",
    stat_id_left: "grievous_stats_l"
}
var mace = {
    name: "Mace Windu",
    left_hp: 270,
    right_hp: 270,
    attack_power: Math.floor(Math.random() * (56 - 28 + 1)) + 28,
    counter_attack: 28,
    char_left: "assets/images/Characters-Left/mace.png",
    char_right: "assets/images/Characters-Right/mace.png",
    stat_id_right: "mace_stats_r",
    stat_id_left: "mace_stats_l"
}
var boba = {
    name: "Boba Fett",
    left_hp: 170,
    right_hp: 170,
    attack_power: Math.floor(Math.random() * (20 - 10 + 1)) + 10,
    counter_attack: 10,
    char_left: "assets/images/Characters-Left/boba.png",
    char_right: "assets/images/Characters-Right/boba.png",
    stat_id_right: "boba_stats_r",
    stat_id_left: "boba_stats_l"
}
var chewie = {
    name: "Chewbacca",
    left_hp: 170,
    right_hp: 170,
    attack_power: Math.floor(Math.random() * (20 - 10 + 1)) + 10,
    counter_attack: 10,
    char_left: "assets/images/Characters-Left/chewie.png",
    char_right: "assets/images/Characters-Right/chewie.png",
    stat_id_right: "chewie_stats_r",
    stat_id_left: "chewie_stats_l"
}
var solo = {
    name: "Han Solo",
    left_hp: 150,
    right_hp: 150,
    attack_power: Math.floor(Math.random() * (16 - 8 + 1)) + 8,
    counter_attack: 8,
    char_left: "assets/images/Characters-Left/solo.png",
    char_right: "assets/images/Characters-Right/solo.png",
    stat_id_right: "solo_stats_r",
    stat_id_left: "solo_stats_l"
}
var leia = {
    name: "Princess Leia",
    left_hp: 190,
    right_hp: 190,
    attack_power: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
    counter_attack: 15,
    char_left: "assets/images/Characters-Left/leia.png",
    char_right: "assets/images/Characters-Right/leia.png",
    stat_id_right: "leia_stats_r",
    stat_id_left: "leia_stats_l"
}
var padme = {
    name: "Padme",
    left_hp: 120,
    right_hp: 120,
    attack_power: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
    counter_attack: 5,
    char_left: "assets/images/Characters-Left/padme.png",
    char_right: "assets/images/Characters-Right/padme.png",
    stat_id_right: "padme_stats_r",
    stat_id_left: "padme_stats_l"
}
var jar_jar = {
    name: "Jar-Jar Binks",
    left_hp: 100,
    right_hp: 100,
    attack_power: Math.floor(Math.random() * (100 - 2 + 1)) + 2,
    counter_attack: Math.floor(Math.random() * (100 - 2 + 1)) + 2,
    char_left: "assets/images/Characters-Left/jar-jar.png",
    char_right: "assets/images/Characters-Right/jar.jar.png",
    stat_id_right: "jar-jar_stats_r",
    stat_id_left: "jar-jar_stats_l"
}
var qui_gon = {
    name: "Qui-Gon Jinn",
    left_hp: 225,
    right_hp: 225,
    attack_power: Math.floor(Math.random() * (36 - 18 + 1)) + 18,
    counter_attack: 18,
    char_left: "assets/images/Characters-Left/qui-gon.png",
    char_right: "assets/images/Characters-Right/qui-gon.png",
    stat_id_right: "qui-gon_stats_r",
    stat_id_left: "qui-gon_stats_l"
}
var characters = {
    anakinl:anakin,
    anakinr:anakin,
    bobal:boba,
    bobar:boba,
    chewiel:chewie,
    chewier:chewie,
    emperorl:emperor,
    emperorr:emperor,
    solol:solo,
    solor:solo,
    jarjarl:jar_jar,
    jarjarr:jar_jar,
    leial:leia,
    leiar:leia,
    lukel:luke,
    vaderl:vader,
    vaderr:vader,
    obiwanl:obi_wan,
    obiwanr:obi_wan,
    yodal:yoda,
    yodar:yoda,
    macel:mace,
    macer:mace
}

$(document).ready(function () { 

    $("#planets").pan({fps: 25, speed: 2, dir: "left"});
    $("#x_wing").pan({fps: 80, speed: 2, dir: "right"});
    $("background").pan({fps: 5, speed: 2, dir: "left"});

    $('#anakinl').click(function(){
        $(".image_file_l").hide();
        $('#anakin_image_l').show();
        $("#anakin_stats_l").text(anakin.name + " " + anakin.left_hp + "HP");
        $("#anakin_stats_l").show();     
    });
    $('#bobal').click(function(){
        $(".image_file_l").hide();
        $('#boba_image_l').show();
        $("#boba_stats_l").text(boba.name + " " + boba.left_hp + "HP");
        $("#boba_stats_l").show();
    });
    $('#chewiel').click(function(){
        $(".image_file_l").hide();
        $('#chewie_image_l').show();
        $("#chewie_stats_l").text(chewie.name + " " + chewie.left_hp + "HP");
        $("#chewie_stats_l").show();
    });
    $('#emperorl').click(function(){
        $(".image_file_l").hide();
        $('#emperor_image_l').show();
        $("#emperor_stats_l").text(emperor.name + " " + emperor.left_hp + "HP");
        $("#emperor_stats_l").show();
    });
    $('#solol').click(function(){
        $(".image_file_l").hide();
        $('#solo_image_l').show();
        $("#solo_stats_l").text(solo.name + " " + solo.left_hp + "HP");
        $("#solo_stats_l").show();
    });
    $('#jar-jar-l').click(function(){
        $(".image_file_l").hide();
        $('#jar-jar_image_l').show();
        $("#jar-jar_stats_l").text(jar_jar.name + " " + jar_jar.left_hp + "HP");
        $("#jar-jar_stats_l").show();
    });
    $('#leial').click(function(){
        $(".image_file_l").hide();
        $('#leia_image_l').show();
        $("#leia_stats_l").text(leia.name + " " + leia.left_hp + "HP");
        $("#leia_stats_l").show();
    });
    $('#lukel').click(function(){
        $(".image_file_l").hide();
        $('#luke_image_l').show();
        $("#luke_stats_l").text(luke.name + " " + luke.left_hp + "HP");
        $("#luke_stats_l").show();
    });
    $('#vaderl').click(function(){
        $(".image_file_l").hide();
        $('#vader_image_l').show();
        $("#vader_stats_l").text(vader.name + " " + vader.left_hp + "HP");
        $("#vader_stats_l").show();
    });
    $('#obiwanl').click(function(){
        $(".image_file_l").hide();
        $('#obi-wan_image_l').show();
        $("#obi-wan_stats_l").text(obi_wan.name + " " + obi_wan.left_hp + "HP");
        $("#obi-wan_stats_l").show();
    });
    $('#yodal').click(function(){
        $(".image_file_l").hide();
        $('#yoda_image_l').show();
        $("#yoda_stats_l").text(yoda.name + " " + yoda.left_hp + "HP");
        $("#yoda_stats_l").show();
    });
    $('#macel').click(function(){
        $(".image_file_l").hide();
        $('#mace_image_l').show();
        $("#mace_stats_l").text(mace.name + " " + mace.left_hp + "HP");
        $("#mace_stats_l").show();
    });
    $('#anakinr').click(function(){
        $(".image_file_r").hide();
        $('#anakin_image_r').show();
        $("#anakin_stats_r").text(anakin.name + " " + anakin.right_hp + "HP");
        $("#anakin_stats_r").show();
    });
    $('#bobar').click(function(){
        $(".image_file_r").hide();
        $('#boba_image_r').show();
        $("#boba_stats_r").text(boba.name + " " + boba.right_hp + "HP");
        $("#boba_stats_r").show();
    });
    $('#chewier').click(function(){
        $(".image_file_r").hide();
        $('#chewie_image_r').show();
        $("#chewie_stats_r").text(chewie.name + " " + chewie.right_hp + "HP");
        $("#chewie_stats_r").show();
    });
    $('#emperorr').click(function(){
        $(".image_file_r").hide();
        $('#emperor_image_r').show();
        $("#emperor_stats_r").text(emperor.name + " " + emperor.right_hp + "HP");
        $("#emperor_stats_r").show();
    });
    $('#solor').click(function(){
        $(".image_file_r").hide();
        $('#solo_image_r').show();
        $("#solo_stats_r").text(solo.name + " " + solo.right_hp + "HP");
        $("#solo_stats_r").show();
    });
    $('#jarjarr').click(function(){
        $(".image_file_r").hide();
        $('#jar-jar_image_r').show();
        $("#jar-jar_stats_r").text(jar_jar.name + " " + jar_jar.right_hp + "HP");
        $("#jar-jar_stats_r").show();
    });
    $('#leiar').click(function(){
        $(".image_file_r").hide();
        $('#leia_image_r').show();
        $("#leia_stats_r").text(leia.name + " " + leia.right_hp + "HP");
        $("#leia_stats_r").show();
    });
    $('#luker').click(function(){
        $(".image_file_r").hide();
        $('#luke_image_r').show();
        $("#luke_stats_r").text(luke.name + " " + luke.right_hp + "HP");
        $("#luke_stats_r").show();
    });
    $('#vaderr').click(function(){
        $(".image_file_r").hide();
        $('#vader_image_r').show();
        $("#vader_stats_r").text(vader.name + " " + vader.right_hp + "HP");
        $("#vader_stats_r").show();
    });
    $('#obiwanr').click(function(){
        $(".image_file_r").hide();
        $('#obi-wan_image_r').show();
        $("#obi-wan_stats_r").text(obi_wan.name + " " + obi_wan.right_hp + "HP");
        $("#obi-wan_stats_r").show();
    });
    $('#yodar').click(function(){
        $(".image_file_r").hide();
        $('#yoda_image_r').show();
        $("#yoda_stats_r").text(yoda.name + " " + yoda.right_hp + "HP");
        $("#yoda_stats_r").show();
    });
    $('#macer').click(function(){
        $(".image_file_r").hide();
        $('#mace_image_r').show();
        $("#mace_stats_r").text(mace.name + " " + mace.right_hp + "HP");
        $("#mace_stats_r").show();
    });
    
    

    // $("#attackButton").click(function(){
    //     $("#anakin_image_l").animate({left: "+=250px"}, "fast", function(){
    //         $("#anakin_image_l").animate({right: "0px"}, "fast");
    //     });

    // $("#attackButton").on('click', function(){
    //     $("#anakin_image_l").addClass('attackLeft');
    // });
    

    $("#btn1").click(function(){
        $("#box").animate({height: "300px"});
    });
    $("#btn2").click(function(){
        $("#box").animate({height: "100px"});
    });
});

// Functions:

// Start Game - sets up field of play, displays characters, their HP and a background



// Play Game - Lets player choose character and ememy. Ease char onto playing field
/* Take player 1 and player 2 and perform calculation then show updated results*/



// Fight Game - Attack button functionality, movement of characters in response to attack button 
// and random selection of attack power. 
// End Game - If HP after attack <= 0, char dies.