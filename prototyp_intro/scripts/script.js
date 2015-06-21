$(document).ready(function()	{

// Hier steht unser Code

//window breite speichern
var wi = $(window).width();  
console.log(wi);

$(".loc").addClass("active_tag1");

$(".suche").click( function(){

		$(this).toggleClass("active_suche");
		$(".container_diagramm").toggleClass("active_dia");
		$(".container_vohersage").toggleClass("active_vohersage");
		$(".scroll_container").toggleClass("display_true");


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

/*$(".container_vohersage").click( function(){

		



	});*/

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


$(".scroll_container").scroll(function(){

		$(".container_vohersage").addClass("click_v");

		$(".background").addClass("fadeout");

		






});



$(".scroll_container").scroll(function(){
    var scrollPos = $(".scroll_container").scrollTop();
    console.log(scrollPos);



    if(scrollPos == 0){

    	$(".container_vohersage").removeClass("click_v");

		$(".background").removeClass("fadeout");

		$(".loc").addClass("active_tag1");
		$(".1").removeClass("active_tag1");

    }

    if(scrollPos >= 800 ){

    	

   		$(".1").removeClass("active_tag1");
    	$(".3").addClass("active_tag1");
		$(".karten").addClass("drei_tage");
		$(".16").removeClass("active_tag1");



    }

    if(scrollPos <= 800 && scrollPos >= 3){

    	$(".3").removeClass("active_tag1");
    	$(".1").addClass("active_tag1");
    	$(".loc").removeClass("active_tag1");
		$(".karten").removeClass("drei_tage");

    }

       if(scrollPos >= 1200){
       	$(".3").removeClass("active_tag1");
       	$(".16").addClass("active_tag1");
    	

   		
    	
    	

		$(".karten").addClass("sechszehn_tage");


		
	



    }

    if(scrollPos <= 1200){

    	

		$(".karten").removeClass("sechszehn_tage");

    }


});



});


