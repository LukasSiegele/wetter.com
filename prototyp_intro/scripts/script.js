$(document).ready(function()	{


// Hier steht unser Code

//window breite speichern
var wi = $(window).width();  
console.log(wi);

$(".loc").addClass("active_tag1");


$(".suche").keydown( function(e){

	if(e.which == 83) {

$(".ergebnisse").addClass("active_ergebnisse");
$(".buchstabeS").addClass("active_innerstate");


}

	if(e.which == 66) {

$(".ergebnisse").addClass("active_ergebnisse");
$(".buchstabeB").addClass("active_innerstate");


}

	if(e.which == 8) {

		$(".ergebnisse").removeClass("active_ergebnisse");
		$(".buchstabeS").removeClass("active_innerstate");
		
		$(".buchstabeB").removeClass("active_innerstate");
		
	}
		

});


$(document).keypress( function(e){
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


$(document).keypress( function(e){


		if(e.which == 13) {
		
      event.preventDefault();

		$(".container_suche").toggleClass("active");
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

$(".inner1").click(function(){

		$(".ergebnisse").removeClass("active_ergebnisse");
		$(".buchstabeS").removeClass("active_innerstate");
		
		$(".buchstabeB").removeClass("active_innerstate");
		
		$(".tag1").toggleClass("active_innerstate");
		var setted = 1;

	if(setted==1){


		$("#allowSpacesTags").addClass("search_off");

	}

		
});
$("#allowSpacesTags").click(function(){

		$(this).removeClass("search_off");
	

		
});



$(".inner1").hover(function(){

		$(this).toggleClass("hover_inner1");
		$(".ghost1").toggleClass("active_innerstate");

		
});

$(".innerstate2").hover(function(){

		$(this).toggleClass("hover_inner1");
		$(".ghost2").toggleClass("active_innerstate");
		
});

$(".innerstate3").hover(function(){

		$(this).toggleClass("hover_inner1");

		
});

$(".innerstate4").hover(function(){

		$(this).toggleClass("hover_inner1");

		
});

$(".scroll_container").scroll(function(){

		$(".container_vohersage").addClass("click_v");
		$(".diagramm").addClass("click_v");



		$(".container_aktuelles").addClass("move_aktuelles");
});





	// Vorhersage Scroll Events

	var zustand = 0;
	var timeoutID;
   
    $(".scroll_container").on('scroll', { previousTop: 0 }, 
    function () {
    var currentTop = $(".scroll_container").scrollTop();
    if (currentTop < this.previousTop && currentTop > 50) {
       
	console.log("hoch");

    }


	else{

		console.log("runter");


		//aktuell > 1tagesansicht
		if(zustand == 0){


			var i = 1
!function(){
  console.log('ham')
}


			$(".1").removeClass("active_tag1");
               $(".3").addClass("active_tag1");
			$(".karten").addClass("drei_tage");
			$(".16").removeClass("active_tag1");
			

			window.setTimeout(function() {
    			zustand = 1;
			   console.log("zustand1");
			}, 500);
		}


		if(zustand == 1){
			$(".3").removeClass("active_tag1");
       		$(".16").addClass("active_tag1");
			$(".karten").addClass("sechszehn_tage");
			

			window.setTimeout(function() {
    			zustand = 2;
			   console.log("zustand2");
			}, 500);
		}





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
		$(".beschreibung_icon").addClass("versch_text");
		$(".vorhersage_temperatur").addClass("versch_text");
		$(".details").addClass("versch_text");


    }

    if(scrollPos <= 800 && scrollPos >= 3){

    	$(".3").removeClass("active_tag1");
    	$(".1").addClass("active_tag1");
    	$(".loc").removeClass("active_tag1");
		$(".karten").removeClass("drei_tage");
		$(".beschreibung").removeClass("versch_text");
		$(".beschreibung_icon").removeClass("versch_text");
		$(".vorhersage_temperatur").removeClass("versch_text");
		$(".details").removeClass("versch_text");

    }

       if(scrollPos >= 1200){
       	$(".3").removeClass("active_tag1");
       	$(".16").addClass("active_tag1");
       	$(".beschreibung").removeClass("versch_text");
		$(".beschreibung_icon").removeClass("versch_text");
		$(".vorhersage_temperatur").removeClass("versch_text");
		$(".details").removeClass("versch_text");
    	

   		
    	
    	

		$(".karten").addClass("sechszehn_tage");


		
	



    }

    if(scrollPos <= 1200){

    	

		$(".karten").removeClass("sechszehn_tage");

    }

   
});




});


		// ------------AUTOCOMPLETE-------------------------------------------------

		var overlay;
        $(function(){
            

        

            //-------------------------------
            // Tag events
            //-------------------------------
            

            //-------------------------------
            // Allow spaces without quotes.
            //-------------------------------
            $('#allowSpacesTags').tagit({
                
               
            });

           
            //-------------------------------
            // Remove confirmation
            //-------------------------------
            $('#removeConfirmationTags').tagit({
                availableTags: sampleTags,
                removeConfirmation: true
            });
            
        });
        //-------------------------------------------------        


// ------------GOOGLE MAPS API_ UNSERE BACKGROUNDKARTE-------------------------------------------------

var overlay;
USGSOverlay.prototype = new google.maps.OverlayView();

// Initialize the map and the custom overlay.
var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

   var featureOpts = [
  {
    "featureType": "road",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "stylers": [
      { "weight": 0.4 }
    ]
  },{
    "featureType": "landscape.natural",
    "elementType": "labels",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "lightness": -57 },
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape.natural.landcover",
    "elementType": "geometry",
    "stylers": [
      { "color": "#ffffff" },
      { "lightness": 100 },
      { "visibility": "on" }
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#cccccc" }
    ]
  },{
    "featureType": "administrative.country",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative"  },{
    "featureType": "administrative.locality",
    "stylers": [
      { "color": "#a8a8a8" }
    ]
  },{
    "featureType": "administrative.province",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.locality",
    "elementType": "labels.icon"  },{
    
  },{
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [
    { "color": "#ffffff" },
      { "visibility": "on" }
    ]
  },
  {
    "featureType": "landscape.natural.landcover",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.park",
    "stylers": [
        { "visibility": "off" }
    ]
},{
    "featureType": "administrative.country",
    "elementType": "geometry.stroke"  },{
    "featureType": "landscape",
    "elementType": "labels.text",
    "stylers": [
      { "saturation": -100 },
      { "lightness": 41 },
      { "visibility": "off" }
    ]
  }
  ];


  var mapOptions = {
    zoom: 6,
    maxZoom: 9,
    minZoom: 6,
    disableDefaultUI: true,
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_CENTER
    },
    scaleControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    center: new google.maps.LatLng(51.165691, 10.451526),
     mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };


  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };


  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

  var swBound = new google.maps.LatLng(30.570904, -40.678223);
  var neBound = new google.maps.LatLng(65.953962, 70.596191);

  /*var swBound = new google.maps.LatLng(44.570904, -12.678223);
  var neBound = new google.maps.LatLng(56.953962, 33.596191);*/
  var bounds = new google.maps.LatLngBounds(swBound, neBound);
  var srcImage = 'imgs/temperatur.png';

  overlay = new USGSOverlay(bounds, srcImage, map);



  // Grenze für Europa
   var strictBounds = new google.maps.LatLngBounds(
     new google.maps.LatLng(44.570904, -12.678223), 
     new google.maps.LatLng(56.953962, 33.596191)
   );

   // dragend event
   google.maps.event.addListener(map, 'dragend', function() {
     if (strictBounds.contains(map.getCenter())) return;

     // Zurück in das PNG

     var c = map.getCenter(),
         x = c.lng(),
         y = c.lat(),
         maxX = strictBounds.getNorthEast().lng(),
         maxY = strictBounds.getNorthEast().lat(),
         minX = strictBounds.getSouthWest().lng(),
         minY = strictBounds.getSouthWest().lat();

     if (x < minX) x = minX;
     if (x > maxX) x = maxX;
     if (y < minY) y = minY;
     if (y > maxY) y = maxY;

     map.setCenter(new google.maps.LatLng(y, x));
   });


}

/** @constructor */
function USGSOverlay(bounds, image, map) {

  // Initialize all properties.
  this.bounds_ = bounds;
  this.image_ = image;
  this.map_ = map;

  // Define a property to hold the image's div. We'll
  // actually create this div upon receipt of the onAdd()
  // method so we'll leave it null for now.
  this.div_ = null;

  // Explicitly call setMap on this overlay.
  this.setMap(map);
}

/**
 * onAdd is called when the map's panes are ready and the overlay has been
 * added to the map.
 */
USGSOverlay.prototype.onAdd = function() {

  var div = document.createElement('div');
  div.style.borderStyle = 'none';
  div.style.borderWidth = '0px';
  div.style.position = 'absolute';

  // Create the img element and attach it to the div.
  var img = document.createElement('img');
  img.src = this.image_;
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.position = 'absolute';
  div.appendChild(img);

  this.div_ = div;

  // Add the element to the "overlayLayer" pane.
  var panes = this.getPanes();
  panes.overlayLayer.appendChild(div);
};

USGSOverlay.prototype.draw = function() {

  // We use the south-west and north-east
  // coordinates of the overlay to peg it to the correct position and size.
  // To do this, we need to retrieve the projection from the overlay.
  var overlayProjection = this.getProjection();

  // Retrieve the south-west and north-east coordinates of this overlay
  // in LatLngs and convert them to pixel coordinates.
  // We'll use these coordinates to resize the div.
  var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
  var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

  // Resize the image's div to fit the indicated dimensions.
  var div = this.div_;
  div.style.left = sw.x + 'px';
  div.style.top = ne.y + 'px';
  div.style.width = (ne.x - sw.x) + 'px';
  div.style.height = (sw.y - ne.y) + 'px';
};

// The onRemove() method will be called automatically from the API if
// we ever set the overlay's map property to 'null'.
USGSOverlay.prototype.onRemove = function() {
  this.div_.parentNode.removeChild(this.div_);
  this.div_ = null;
};





google.maps.event.addDomListener(window, 'load', initialize);









