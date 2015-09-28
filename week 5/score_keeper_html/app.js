
 var i = 0;


document
	.getElementById("increase-5")
	.addEventListener("click", 
		function () {
		i+=5;
			document
				.getElementById("score")
				.innerHTML = i;
				});


document
	.getElementById("decrease-5")
	.addEventListener("click", 
		function () {

		if (i>0) {
			i+=-5;
document
		.getElementById("score")
		.innerHTML = i;
		}
		else {

	document
		.getElementById("score")
		.innerHTML = i;
	}

});


document
	.getElementById("submit-custom-score")
	.addEventListener("click",
		function () {
		     i = parseInt(document
    	.getElementById("custom-score")
    	.value);

    document
    .getElementById("score")
    .innerHTML = i;
});



	
	

// Bonus: Create a check in your code to make sure the score will not go negative.
// Super Bonus: Create a function to make the changes to the score display rather than having to write your logic over and over.