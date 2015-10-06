function changeNav(context) {
	if ($(context).hasClass("active")) {
			$("#slide-down").slideUp ();
			$("#primary-nav li").removeClass("active");


		} else {
			$("#primary-nav li").removeClass("active");
			$(context).addClass("active");
			$("#slide-down").slideDown();

		}
}


$(document).on("click", ".international", function() {

	event.preventDefault();
	$("#international-drop").show().siblings().hide();
	changeNav(this);

});


$(document).on("click", ".politics", function() {
	
	event.preventDefault();
	$("#politics-drop").show().siblings().hide();
	changeNav(this);

});


$(document).on("click", ".business", function() {
	
	event.preventDefault();
	$("#business-drop").show().siblings().hide();
	changeNav(this);

});


$(document).on("click", ".technology", function() {

	event.preventDefault();
	$("#technology-drop").show().siblings().hide();
	changeNav(this);

});

$(document).on("click", ".culture", function() {

	event.preventDefault();
	$("#culture-drop").show().siblings().hide();
	changeNav(this);

});



$(document).on("click", ".blogs", function() {

	event.preventDefault();
	$("#blogs-drop").show().siblings().hide();
	changeNav(this);

});

