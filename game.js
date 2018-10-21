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

var anakin = {
    name: "Anakin Skywalker",
    hp: 250,
    attack_power: Math.floor(Math.random() * (50 - 25 + 1)) + 25,
    char_left: "assets/images/Characters-Left/anakin.png",
    char_right: "assets/images/Characters-Right/amakin.png"
}
var vader = {
    name: "Vader",
    hp: 285,
    attack_power: Math.floor(Math.random() * (60 - 30 + 1)) + 30,
    char_left: "assets/images/Characters-Left/vader.png",
    char_right: "assets/images/Characters-Right/vaer.png"
}
var luke = {
    name: "Luke Skywalker",
    hp: 225,
    attack_power: Math.floor(Math.random() * (40 - 20 + 1)) + 20,
    char_left: "assets/images/Characters-Left/luke.png",
    char_right: "assets/images/Characters-Right/luke.png"
}
var obi_wan = {
    name: "Obi-Wan Kenobi",
    hp: 230,
    attack_power: Math.floor(Math.random() * (20 - 40 + 1)) + 20,
    char_left: "assets/images/Characters-Left/obi-wan.png",
    char_right: "assets/images/Characters-Right/obi-wan.png"
}
var yoda = {
    name: "Yoda",
    hp: 300,
    attack_power: Math.floor(Math.random() * (70 - 35 + 1)) + 35,
    char_left: "assets/images/Characters-Left/yoda.png",
    char_right: "assets/images/Characters-Right/yoda.png"
}
var emperor = {
    name: "The Emperor",
    hp: 300,
    attack_power: Math.floor(Math.random() * (70 - 35 + 1)) + 35,
    char_left: "assets/images/Characters-Left/emperor.png",
    char_right: "assets/images/Characters-Right/emperor.png"
}
var grievous = {
    name: "General Grievous",
    hp: 190,
    attack_power: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
    char_left: "assets/images/Characters-Left/grievous.png",
    char_right: "assets/images/Characters-Right/grievous.png"
}
var mace = {
    name: "Mace Windu",
    hp: 270,
    attack_power: Math.floor(Math.random() * (56 - 28 + 1)) + 28,
    char_left: "assets/images/Characters-Left/mace.png",
    char_right: "assets/images/Characters-Right/mace.png"
}
var boba = {
    name: "Boba Fett",
    hp: 170,
    attack_power: Math.floor(Math.random() * (20 - 10 + 1)) + 10,
    char_left: "assets/images/Characters-Left/boba.png",
    char_right: "assets/images/Characters-Right/boba.png"
}
var chewie = {
    name: "Chewbacca",
    hp: 170,
    attack_power: Math.floor(Math.random() * (20 - 10 + 1)) + 10,
    char_left: "assets/images/Characters-Left/chewie.png",
    char_right: "assets/images/Characters-Right/chewie.png"
}
var solo = {
    name: "Han Solo",
    hp: 150,
    attack_power: Math.floor(Math.random() * (16 - 8 + 1)) + 8,
    char_left: "assets/images/Characters-Left/solo.png",
    char_right: "assets/images/Characters-Right/solo.png"
}
var leia = {
    name: "Princess Leia",
    hp: 190,
    attack_power: Math.floor(Math.random() * (30 - 15 + 1)) + 15,
    char_left: "assets/images/Characters-Left/leia.png",
    char_right: "assets/images/Characters-Right/leia.png"
}
var padme = {
    name: "Padme",
    hp: 120,
    attack_power: Math.floor(Math.random() * (10 - 5 + 1)) + 5,
    char_left: "assets/images/Characters-Left/padme.png",
    char_right: "assets/images/Characters-Right/padme.png"
}
var jar_jar = {
    name: "Jar-Jar Binks",
    hp: 100,
    attack_power: Math.floor(Math.random() * (100 - 2 + 1)) + 2,
    char_left: "assets/images/Characters-Left/jar-jar.png",
    char_right: "assets/images/Characters-Right/jar.jar.png"
}
var qui_gon = {
    name: "Qui-Gon Jinn",
    hp: 225,
    attack_power: Math.floor(Math.random() * (36 - 18 + 1)) + 18,
    char_left: "assets/images/Characters-Left/qui-gon.png",
    char_right: "assets/images/Characters-Right/qui-gon.png"
}

// Functions:

// Start Game - sets up field of play, displays characters, their HP and a background
// Play Game - Lets player choose character and ememy. Ease char onto playing field
// Fight Game - Attack button functionality, movement of characters in response to attack button 
// and random selection of attack power. 
// End Game - If HP after attack <= 0, char dies.

$(document).ready(function () {
    $("#planets").pan({fps: 25, speed: 2, dir: "left"});
    $("#x_wing").pan({fps: 80, speed: 2, dir: "right"});
    $("background").pan({fps: 5, speed: 2, dir: "left"});

    $('#anakin-l').click(function(){
        $(".image_file_l").hide();
        $('#anakin_image_l').show();
    });
    $('#boba-l').click(function(){
        $(".image_file_l").hide();
        $('#boba_image_l').show();
    });
    $('#chewie-l').click(function(){
        $(".image_file_l").hide();
        $('#chewie_image_l').show();
    });
    $('#emperor-l').click(function(){
        $(".image_file_l").hide();
        $('#emperor_image_l').show();
    });
    $('#solo-l').click(function(){
        $(".image_file_l").hide();
        $('#solo_image_l').show();
    });
    $('#jar-jar-l').click(function(){
        $(".image_file_l").hide();
        $('#jar-jar_image_l').show();
    });
    $('#leia-l').click(function(){
        $(".image_file_l").hide();
        $('#leia_image_l').show();
    });
    $('#luke-l').click(function(){
        $(".image_file_l").hide();
        $('#luke_image_l').show();
    });
    $('#vader-l').click(function(){
        $(".image_file_l").hide();
        $('#vader_image_l').show();
    });
    $('#obi-wan-l').click(function(){
        $(".image_file_l").hide();
        $('#obi-wan_image_l').show();
    });
    $('#yoda-l').click(function(){
        $(".image_file_l").hide();
        $('#yoda_image_l').show();
    });
    $('#mace-l').click(function(){
        $(".image_file_l").hide();
        $('#mace_image_l').show();
    });


    $('#anakin-r').click(function(){
        $(".image_file_r").hide();
        $('#anakin_image_r').show();
    });
    $('#boba-r').click(function(){
        $(".image_file_r").hide();
        $('#boba_image_r').show();
    });
    $('#chewie-r').click(function(){
        $(".image_file_r").hide();
        $('#chewie_image_r').show();
    });
    $('#emperor-r').click(function(){
        $(".image_file_r").hide();
        $('#emperor_image_r').show();
    });
    $('#solo-r').click(function(){
        $(".image_file_r").hide();
        $('#solo_image_r').show();
    });
    $('#jar-jar-r').click(function(){
        $(".image_file_r").hide();
        $('#jar-jar_image_r').show();
    });
    $('#leia-r').click(function(){
        $(".image_file_r").hide();
        $('#leia_image_r').show();
    });
    $('#luke-r').click(function(){
        $(".image_file_r").hide();
        $('#luke_image_r').show();
    });
    $('#vader-r').click(function(){
        $(".image_file_r").hide();
        $('#vader_image_r').show();
    });
    $('#obi-wan-r').click(function(){
        $(".image_file_r").hide();
        $('#obi-wan_image_r').show();
    });
    $('#yoda-r').click(function(){
        $(".image_file_r").hide();
        $('#yoda_image_r').show();
    });
    $('#mace-r').click(function(){
        $(".image_file_r").hide();
        $('#mace_image_r').show();
    });

    $("#btn1").click(function(){
        $("#box").animate({height: "300px"});
    });
    $("#btn2").click(function(){
        $("#box").animate({height: "100px"});
    });
});