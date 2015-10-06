	$(document).ready(function () {
		$("body").fadeIn(2000);


		//alert("done loa	ding");

	});



	// $(document).mouseover(function(){
	// 	$("p").css("background-color","yellow");
	// });


	// $(document).mouseout(function(){
	// 	$("this").css("background-color","white");
	// });


	$("p").mouseover(function() {
		$(this).css("background-color","#FFFFCC");
	})

	$("p").mouseout(function() {
		$(this).css("background-color","white");
	})



	//$("h2").click(function () {
	//	$(this).css("opacity",".1");

	///});

	$("h2").click(function () {
    	$(this).animate( { "opacity" : .3 }, 400 );
		$(this).css("margin-left", "20px");
	});