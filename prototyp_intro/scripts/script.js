$(document).ready(function()	{

	       $(function(){
            var sampleTags = ['schwäbisch gmünd', 'morgen', 'freitag', 'nächste woche', 'regen', 'wolken', 'wind', 'berlin'];

        	


            //-------------------------------
            // Tag events
            //-------------------------------
            var eventTags = $('#eventTags');

            var addEvent = function(text) {
                $('#events_container').append(text + '<br>');
            };

            eventTags.tagit({
                availableTags: sampleTags,
                beforeTagAdded: function(evt, ui) {
                    if (!ui.duringInitialization) {
                        addEvent('beforeTagAdded: ' + eventTags.tagit('tagLabel', ui.tag));
                    }
                },
                afterTagAdded: function(evt, ui) {
                    if (!ui.duringInitialization) {
                        addEvent('afterTagAdded: ' + eventTags.tagit('tagLabel', ui.tag));
                    }
                },
                beforeTagRemoved: function(evt, ui) {
                    addEvent('beforeTagRemoved: ' + eventTags.tagit('tagLabel', ui.tag));
                },
                afterTagRemoved: function(evt, ui) {
                    addEvent('afterTagRemoved: ' + eventTags.tagit('tagLabel', ui.tag));
                },
                onTagClicked: function(evt, ui) {
                    addEvent('onTagClicked: ' + eventTags.tagit('tagLabel', ui.tag));
                },
                onTagExists: function(evt, ui) {
                    addEvent('onTagExists: ' + eventTags.tagit('tagLabel', ui.existingTag));
                }
            });


            //-------------------------------
            // Allow spaces without quotes.
            //-------------------------------
            $('#allowSpacesTags').tagit({
               	 availableTags: sampleTags,
                allowSpaces: true
            });

          

           
            //-------------------------------
            // Remove confirmation
            //-------------------------------
            $('#removeConfirmationTags').tagit({
                availableTags: sampleTags,
                removeConfirmation: true
            });
            
        });

// Hier steht unser Code

//window breite speichern
var wi = $(window).width();  
console.log(wi);

$(".loc").addClass("active_tag1");


$(".suche").keydown( function(e){

$(".ergebnisse").addClass("active_ergebnisse");
$(".inner1").addClass("active_ergebnisse");	

	if(e.which == 8) {

		$(".ergebnisse").removeClass("active_ergebnisse");
		$(".inner1").removeClass("active_ergebnisse");
	}

});


$(".suche").keypress( function(e){
	if(e.which == 13) {

      event.preventDefault();
   		$(this).toggleClass("active_suche");
		$(".container_diagramm").toggleClass("active_dia");
		$(".container_vohersage").toggleClass("active_vohersage");
		$(".scroll_container").toggleClass("display_true");
		$(".container_aktuelles").toggleClass("active_aktuelles");
	}

	});

$(".suche").hover( function(){

		$(".favo").toggleClass("hover_fav");



	});


$(".container_suche").keypress( function(e){


		if(e.which == 13) {
		
      event.preventDefault();

		$(this).toggleClass("active");
		$(".favo").toggleClass("active_fav");


	}
	});



/*$(".container_vohersage").click( function(){

		



	});*/

$(".profilpic").click( function(){

		

		$(".profileinst").toggleClass("active_profil");

		$(".trennleiste").removeClass("einstel_trenn");

		$(".profileinst").removeClass("einstel_konto");
		$(".guide").removeClass("guide_off");



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

$(".platzhalter").click(function(){

		$(".trennleiste").toggleClass("einstel_trenn");

		$(".profileinst").toggleClass("einstel_konto");
		$(".guide").toggleClass("guide_off");
});


$(".scroll_container").scroll(function(){

		$(".container_vohersage").addClass("click_v");
		$(".diagramm").addClass("click_v");



		$(".container_aktuelles").addClass("move_aktuelles");
});


   
    $(".scroll_container").on('scroll', { previousTop: 0 }, 
    function () {
    var currentTop = $(".scroll_container").scrollTop();
    if (currentTop < this.previousTop && currentTop > 50) {
       
	console.log("hoch");

    }


	else{

		console.log("runter");



       // Scroll down
    } 
	this.previousTop = currentTop;
	});






$(".scroll_container").scroll(function(){
    var scrollPos = $(".scroll_container").scrollTop();
    
    //console.log(scrollPos);

    if(scrollPos <= 10){

    	$(".container_vohersage").removeClass("click_v");
    	$(".diagramm").removeClass("click_v");

		$(".background").removeClass("fadeout");

		$(".loc").addClass("active_tag1");
		$(".1").removeClass("active_tag1");

		$(".container_aktuelles").removeClass("move_aktuelles");



    }

 
	 

    if(scrollPos >= 800 ){

    	

   		$(".1").removeClass("active_tag1");
    	$(".3").addClass("active_tag1");
		$(".karten").addClass("drei_tage");
		$(".16").removeClass("active_tag1");
		$(".beschreibung").addClass("versch_text");



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


