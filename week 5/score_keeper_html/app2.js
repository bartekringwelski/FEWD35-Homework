var i = 0;


var scoreBoard = document.getElementById("score");



document
	.getElementById("increase-5")
	.addEventListener("click", function () {

	i+=5;

	scoreBoard
		.innerHTML = i + " points";
});


document
	.getElementById("decrease-5")
	.addEventListener("click", function () {

	i-=5;

	scoreBoard
		.innerHTML = i + " points"
});




document
	.getElementById("submit-custom-score")
		.addEventListener("click", function () {
			i = parseInt(document
					.getElementById("custom-score")
					.value);

				scoreBoard
					.innerHTML = i + " points";

		});

