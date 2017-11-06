$(document).ready(function(){

	console.log("ready");

	$(".fa-bars").on('click', function() {
		$(".main-header nav").slideToggle("slow");
	})

	$(window).on("resize", function() {

        if ($(window).width() >= 768 && !$(".main-header nav").is(":visible")) {
           $(".main-header nav").css("display", "inline-block");
 		} else if ($(window).width() < 768 && $(".main-header nav").is(":visible"))  {
           $(".main-header nav").css("display", "none");
        }
     });
});