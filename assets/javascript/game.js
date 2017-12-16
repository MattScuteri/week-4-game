$(document).ready(function() {
	
	let randomNumber;
	let crystal1;
	let crystal2;
	let crystal3;
	let crystal4;

	function beginGame() {
		randomNumber = Math.floor(Math.random() * 102) + 19;
		crystal1 = Math.floor(Math.random() * 10) + 1;
		crystal2 = Math.floor(Math.random() * 10) + 1;
		crystal3 = Math.floor(Math.random() * 10) + 1;
		crystal4 = Math.floor(Math.random() * 10) + 1;
		totalScore = 0;
	};

	beginGame();	

	$("#crystal1").on("click", function() {
		parseInt(crystal1);
		totalScore = crystal1 + totalScore;
	});

	$("#crystal2").on("click", function() {
		totalScore = crystal2 + totalScore
	});	

	$("#crystal3").on("click", function() {
		totalScore = crystal3 + totalScore
	});	

	$("#crystal4").on("click", function() {
		totalScore = crystal4 + totalScore
	});

	$("#randomNumber").html(randomNumber);

	$("#totalScore").html(totalScore);

	console.log(crystal1)
	console.log(crystal2)
	console.log(crystal3)
	console.log(crystal4)

});