var randomNumber = 0;
var wins = 0;
var losses = 0;
var previous = 0;
var randomCrystalNumber = 0;
var num = 0;
var crystalPaths = ['<img src="./assets/images/Diamond.jpeg"></img>', 
'<img src="./assets/images/Emerald.jpeg"></img>',
'<img src="./assets/images/Oval.jpeg"></img>',
'<img src="./assets/images/Trillion.jpeg"></img>']

// when game resets all crystals will have four new values 
var resetAndStart = function () {

  $(".crystals").empty();

// show a random number at the start of the game between 19 - 120 
randomNumber = Math.floor(Math.random() * 101) + 19;
  //console.log(randomNumber)
$(".number").html('Number: ' + randomNumber);
for(var i = 0; i < 4; i++){  
// each crystal will have a value between 1 - 12  
  var randomCrystalNumber = Math.floor(Math.random() * 12) + 1;
  //console.log(randomNumber);

// create crystal buttons 
  var crystal = $("<div>");
    crystal.attr({
      "class": 'crystal',
      "randomCrystal": randomCrystalNumber
    });   
    crystal.html(crystalPaths[i]);
  // crystal.html(randomCrystalNumber)

  $(".crystals").append(crystal);

  }
  $(".previous").html("Counter: " + previous);
}

resetAndStart();

var reset = function (){

}
// click on crystal will add points to total score
// when game resets a new random number displays 
$(document).on('click', ".crystal", function () {
  //console.log($(this).attr('randomCrystal'));
  var num = parseInt($(this).attr('randomCrystal'));
console.log(previous, ' + ', num);
  previous += num;
  $(".previous").html("Counter: " + previous);
console.log(previous); 

// player wins if when their score matches the random number
  if(previous > randomNumber){
    losses++; 
  //console.log("Try again.");
    alert("You lose.\nTry again.");
  // show the number of games of player wins and loss
    $(".losses").html('Losses: ' + losses);
    // when game resets players score and score counter returns to zero 
    previous = 0;

// game restarts whenever the player loses
    resetAndStart();
  }
// player loses if their score goes above the random number
  else if(previous === randomNumber){
    wins++;
    //console.log("Gold Star!");
    alert("YOU WIN!\nGOLD STAR!");      
    // show the number of games of player wins and lose
    $(".wins").html('Wins: ' + wins); 
    // when game resets players score and score counter returns to zero  
    previous = 0;

// game restarts whenever the player wins
    resetAndStart();
}

});

 

