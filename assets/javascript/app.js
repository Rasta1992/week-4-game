//global variables//
var randomNumbers = [];
var counter = 0;
var wins = 0;
var losses = 0;

//functions//

$(document).ready(function() {

	var	target = Math.floor(Math.random() * 120 + 19);
	$("#target-number").text("Target: " + target);

	function setTarget(){
		var	target = Math.floor(Math.random() * 120 + 19);
		getRandomNumbers();
		console.log(target);
		counter = 0;
		
	}


//4 numbers for crystals//
		getRandomNumbers();
		bindClick(0, "rock1");
		bindClick(1, "rock2");
		bindClick(2, "rock3");
		bindClick(3, "rock4");

	function bindClick(i, name) { // name = rock2
		$("#" + name).click(function() {
			counter = counter + randomNumbers[i];
			$("#total-score").text(counter);
			didWeWin();
		});
	}

	//crystal numbers//
	function getRandomNumbers(){
		for (var i = 0; i < 4; i++) {
			var numbers = Math.floor(Math.random() * 12 + 1)
			randomNumbers.push(numbers);
			console.log(randomNumbers);
		}
		

	};

	function didWeWin() {
		// win/lose conditions

		if (counter == target){
			wins++;
			$("#wins").text("Wins: " + wins);
			alert("winner");
			setTarget();
		}
		else if ( counter > target){
			losses++;
			$("#losses").text("Losses: " + losses);
			alert("loser");
			setTarget();


		}	
	}
	//reset game//

});