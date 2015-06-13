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


var wi = $(window).width();



$(window).resize(function(){

	var wi = $(window).width();

	//REMOVE
	if(wi <= 1000){

		$(".karte7").addClass("remove_1000");
		$(".karten").addClass("active_1000");


	}
	if(wi <= 900){

		$(".karte6").addClass("remove_1000");
		$(".karten").addClass("active_900");
		


	}

	if(wi <= 700){

		$(".karte5").addClass("remove_1000");
		$(".karten").addClass("active_800");


	}

	if(wi <= 550){

		$(".karte4").addClass("remove_1000");
		$(".karten").addClass("active_700");


	}

	//ADD
	if(wi >= 1000){

		$(".karte7").removeClass("remove_1000");
		$(".karten").removeClass("active_1000");


	}
	if(wi >= 900){

		$(".karte6").removeClass("remove_1000");
		$(".karten").removeClass("active_900");



	}

	if(wi >= 700){

		$(".karte5").removeClass("remove_1000");
		$(".karten").removeClass("active_800");


	}

	if(wi >= 550){

		$(".karte4").removeClass("remove_1000");
		$(".karten").removeClass("active_700");


	}



});



});