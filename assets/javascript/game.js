$(document).ready(function() {
	
	let randomNumber = Math.floor(Math.random() +102) + 19;
	let totalScore = 0;
	let wins = 0;
	let losses = 0;

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

	$(".crystal").on("click", function() { 
		
		let crystalResult = parseInt(($(this).attr('data-crystalvalue')));

		totalScore += crystalResult

		$("#totalScore").html(totalScore);

		console.log(totalScore);
		});

	$("#randomNumber").html(randomNumber);

});