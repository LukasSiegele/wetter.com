$(document).ready(function()	{
	
	// Hier steht unser Code


$(".suche").click( function(){

		$(this).toggleClass("active_suche");
		$(".container_diagramm").toggleClass("active_dia");
		$(".container_vohersage").toggleClass("active_vohersage");


	});

$(".suche").hover( function(){

		$(".favo").toggleClass("hover_fav");



	});


$(".container_suche").click( function(){

		$(this).toggleClass("active");
		$(".favo").toggleClass("active_fav");



	});

$(".background").click( function(){

		$(this).toggleClass("active_karte");

		$(".container_suche").toggleClass("active_back");
		$(".container_diagramm").toggleClass("active_back");
		$(".container_vohersage").toggleClass("active_back");

	});

$(".container_vohersage").click( function(){

		$(this).toggleClass("click_v");

		$(".background").toggleClass("fadeout");



	});

$(".profilpic").click( function(){

		

		$(".profileinst").toggleClass("active_profil");



	});

$(window).load( function(){

		setTimeout(function(){
  		$(".container_tipps").addClass("showup");
	}	, 2000);


		setTimeout(function(){
  		$(".container_tipps").removeClass("showup");
	}	, 8000);



});



});