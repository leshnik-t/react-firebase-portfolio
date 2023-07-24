// JavaScript Document
$(window).on("resize", function(){
	if($("#btnMenu").hasClass("active")){
		$("#btnMenu").trigger("click");
	}
});
$(document).ready(function() {
	/*        links for articles               */
	$(".item").on("click", function(){
		window.location = $(this).attr("data-href");
	});
	/*               menu            */
	$("#btnMenu").on("click", function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		if($("#categoriesMenu").hasClass("in")){
			$("#categoriesMenu").collapse('hide');
			$("#category").removeClass("active");
			$("#category i").removeClass("fa-caret-down");
			$("#category i").addClass("fa-caret-right");
		}
		$(this).find("i").toggleClass("fa-bars");
		$(this).find("i").toggleClass("fa-times-circle-o");
	});
	$("#category").on("click",function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).find("i").toggleClass("fa-caret-right");
		$(this).find("i").toggleClass("fa-caret-down");
	});
});

