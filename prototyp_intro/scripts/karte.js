// This example creates a custom overlay called USGSOverlay, containing
// a U.S. Geological Survey (USGS) image of the relevant area on the map.

// Set the custom overlay object's prototype to a new instance
// of OverlayView. In effect, this will subclass the overlay class.
// Note that we set the prototype to an instance, rather than the
// parent class itself, because we do not wish to modify the parent class.

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

  var swBound = new google.maps.LatLng(44.570904, -12.678223);
  var neBound = new google.maps.LatLng(56.953962, 33.596191);
  var bounds = new google.maps.LatLngBounds(swBound, neBound);

  // The photograph is courtesy of the U.S. Geological Survey.
  var srcImage = 'imgs/temperatur.png';
  //srcImage += 'examples/full/images/talkeetna.png';

  // The custom USGSOverlay object contains the USGS image,
  // the bounds of the image, and a reference to the map.
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






