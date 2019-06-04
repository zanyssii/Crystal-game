var randomNumber = $(".numbers");
var winsClass = $(".wins");
var lossesClass = $(".losses");
var totalscore = $("#totalscore");
var total = 0;
var wins = 0;
var losses = 0;

var audioElement = document.createElement('audio');
 audioElement.setAttribute('src','14735_1460058121.mp3');

$(document).ready(function(){
 $("#red, #blue, #green, #purple").on("click", function(){
  audioElement.play();
});



var resetGame = function() {
rednNum = generateNum(1,12);
blueNum = generateNum(1,12);
greenNum = generateNum(1,12);
purpleNum = generateNum(1,12);

console.log('yup');
};

var checkwin = function (){
	if (numberGenerated === total) {
		$(winsClass).html("Wins: " + (wins++));
		numberGenerated = generateNum(19,120);
		$(randomNumber).html("Match This Number:  "  + numberGenerated);
		total = 0;
		$(totalscore).html("Your total score is: " + total)
		$(".message").html("You Won!:)");
		resetGame();
	
	}else if(total > numberGenerated){
		$(lossesClass).html("Losses: " + (losses++));
		numberGenerated = generateNum(19,120);
		$(randomNumber).html("Match This Number:  "  + numberGenerated);
		total = 0;
		$(totalscore).html("Your total score is: " + total)
		$(".message").html("You Lost!:(");
		resetGame();
		}
	};


var generateNum = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var numberGenerated = generateNum(19, 120);

var redNum = generateNum(1, 12);
var blueNum = generateNum(1, 12);
var greenNum = generateNum(1, 12);
var purpleNum = generateNum(1, 12);

randomNumber.append("Match This Number:  "  + numberGenerated);




function setScore(){
	$(totalscore).html("Your total score is: " + total);
}


$("#red").on("click", function(){
	 total += redNum;
 	 console.log('you got it');
 	 setScore();
	 checkwin();

});

$("#blue").on("click", function(){
	 total += blueNum;
 	 console.log('you got it');
 	 setScore();
	 checkwin();
});
 
$("#green").on("click", function(){
	 total += greenNum;
 	 console.log('you got it');
 	 setScore();
	 checkwin();
});

$("#purple").on("click", function(){
	 total += purpleNum;
 	 console.log('you did it');
 	 setScore();
	 checkwin();
});


});