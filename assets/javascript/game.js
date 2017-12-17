$(document).ready(function() {

	let wins = 0;
	let losses = 0;

	function resetGame() {
		
		$(".crystals").empty();
		
		randomNumber = Math.floor(Math.random() * 102) +19;
		
		totalScore = 0;
		
		for (let i = 0; i < 4; i++) {
			let crystalValues = Math.floor(Math.random() * 10) + 1;
			 	console.log(crystalValues);

			let crystal = $("<img>");
			crystal.attr({
				"class" : 'crystal',
				"data-crystalvalue" : crystalValues
			});

			$(".crystals").append(crystal);

			crystal.attr({"src": "assets/images/crystal1.jpg",
				"src": "assets/images/crystal2.jpg",
				"src": "assets/images/crystal3.png",
				"src": "assets/images/crystal4.jpg"
			});
		};
	};

	resetGame();

	$("#randomNumber").html(randomNumber);

	$(document).on("click", ".crystal", function() { 
		
		let crystalResult = parseInt(($(this).attr('data-crystalvalue')));

		totalScore += crystalResult

		$("#totalScore").html(totalScore);
	
		if (totalScore === randomNumber) {
			wins++;
			$("#wins").html("Wins: " + wins)
			totalScore = 0;

			resetGame();

		} else if (totalScore > randomNumber) {
			losses++;
			$("#losses").html("Losses: " + losses)			
			totalScore = 0;

			resetGame();
		}
	});

});