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
	}	

	$("#crystal1").on("click", function() {

	}

	$("#crystal2").on("click", function() {
		
	}	

	$("#crystal3").on("click", function() {
		
	}	

	$("#crystal4").on("click", function() {
		
	}

	

	beginGame();
});