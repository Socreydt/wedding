'use strict';	
	
// CHECK WINDOW RESIZE
var is_windowresize = false;
$(window).resize(function(){
    is_windowresize = true;
});
	
	
//INITIALIZE MAP
function initialize() {

    //DEFINE MAP OPTIONS
    //=======================================================================================
    var mapOptions = {
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(43.0780966, -73.7837961),
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        //scaleControl: false,
        streetViewControl: true,
        overviewMapControl: true,
        //rotateControl:true,

    };

    //CREATE NEW MAP
    //=======================================================================================
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    //ADD NEW MARKER WITH LABEL
    //=======================================================================================
    var marker1 = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0781755, -73.7840096),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle small-size" style="background-color:#FFF; border:1px solid #f0394d"><i class="de-icon-heart" style="color:#f0394d"></i></div>',
        labelAnchor: new google.maps.Point(20, 36),
        //labelClass: "labels" // the CSS class for the label
    });
    var comptonsMarker2 = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0828459, -73.7854259),
        draggable: false,
        raiseOnDrag: false,
        //icon: ' ',
        map: map,
        //labelClass: "labels" // the CSS class for the label
    });
    var uncommon_groundsMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0813114, -73.7851769),
        draggable: false,
        raiseOnDrag: false,
        //icon: ' ',
        map: map,
        //labelClass: "labels" // the CSS class for the label
    });

    var mimiMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0804458, -73.7833891),
        draggable: false,
        raiseOnDrag: false,
        //icon: ' ',
        map: map,
        //labelClass: "labels" // the CSS class for the label
    });

    var ravenousMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0806164, -73.7849456),
        draggable: false,
        raiseOnDrag: false,
        //icon: ' ',
        map: map,
        //labelClass: "labels" // the CSS class for the label
    });

    var springDeliMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0785279, -73.7789044),
        draggable: false,
        raiseOnDrag: false,
        //icon: ' ',
        map: map,
        //labelClass: "labels" // the CSS class for the label
    });

    var scallionsMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0825638, -73.7820769),
        draggable: false,
        raiseOnDrag: false,
        map: map,
        //labelClass: "labels" // the CSS class for the label
    });

    var circuscafeMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0812902, -73.7854856),
        draggable: false,
        raiseOnDrag: false,
        map: map,
        //labelClass: "labels" // the CSS class for the label
    });

    var hotelPavillionMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0825235, -73.7828395),
        draggable: false,
        raiseOnDrag: false,
        //icon: ' ',
        map: map,
        //labelClass: "labels" // the CSS class for the label
    });

    //INFO WINDOWS
    //=======================================================================================
    var infowindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Wedding</b><br/>Canfield Casino<br/>1 East Congress Street<br/>Saratoga Springs, NY 12866<br/><br/>June 26 2016, 5:30 pm' + '</div>'
    });

    var comptonsWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Compton&#39;s</b><br/>457 Broadway<br/>Saratoga Springs, NY 12866<br/><br/>Breakfast! Open late.' + '</div>'
    });

    var uncommon_groundsWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Uncommon Grounds</b><br/>402 Broadway<br/> Saratoga Springs, NY 12866<br/><br/>Delicious coffee and awesome bagels' + '</div>'
    });

    var mimiWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Sweet Mimis Cafe</b><br/>47 Phila St<br/> Saratoga Springs, NY 12866<br/><br/>Looking for something with full <br/>service and delicious food?<br/> This is your place!' + '</div>'
    });

    var ravenousWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Ravenous</b><br/>21 Phila St<br/> Saratoga Springs, NY 12866<br/><br/>You like crepes? You go here.' + '</div>'
    });

    var springWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Spring Street Deli & Pizzeria</b><br/>132 Spring St<br/> Saratoga Springs, NY 12866<br/><br/>Sam makes sure he visits at<br/>least once every time he is in Saratoga.<br/>His favorite is the chicken caesar<br/>wrap… are you surprised?' + '</div>'
    });

    var circusWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Circus Cafe</b><br/>392 Broadway<br/>Saratoga Springs, NY 12866<br/>' + '<a href="http://www.circuscafe.com/" target="_blank">View menu.</a></div>'
    });

    var scallionsWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Scallions</b><br/>44 Lake Ave<br/>Saratoga Springs, NY 12866<br/>' + '<a href="http://www.scallionsrestaurant.com/" target="_blank">View menu.</a></div>'
    });

    var pavillionWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Pavilion Grand Hotel</b><br/>30 Lake Ave<br/>Saratoga Springs, NY 12866<br/>' + '<a href="http://www.paviliongrandhotel.com/" target="_blank">View Hotel Website</a></div>'
    });


    //OPEN INFO WINDOWS ON LOAD
    //=======================================================================================
    infowindow.open(map, marker1);

    //ON MARKER CLICK EVENTS
    //=======================================================================================
    google.maps.event.addListener(marker1, 'click', function () {
        infowindow.open(map, marker1);
        map.setZoom(17);
        map.setCenter(marker.getPosition());			
    });
    google.maps.event.addListener(comptonsMarker2, 'click', function () {
        comptonsWindow.open(map, comptonsMarker2);
        map.setZoom(17);
        map.setCenter(comptonsMarker2.getPosition());
    });
    google.maps.event.addListener(uncommon_groundsMarker, 'click', function () {
        uncommon_groundsWindow.open(map, uncommon_groundsMarker);
        map.setZoom(17);
        map.setCenter(uncommon_groundsMarker.getPosition());
    });
    google.maps.event.addListener(mimiMarker, 'click', function () {
        mimiWindow.open(map, mimiMarker);
        map.setZoom(17);
        map.setCenter(mimiMarker.getPosition());
    });
    google.maps.event.addListener(ravenousMarker, 'click', function () {
        ravenousWindow.open(map, ravenousMarker);
        map.setZoom(17);
        map.setCenter(ravenousMarker.getPosition());
    });
    google.maps.event.addListener(springDeliMarker, 'click', function () {
        springWindow.open(map, springDeliMarker);
        map.setZoom(17);
        map.setCenter(springDeliMarker.getPosition());
    });
    google.maps.event.addListener(scallionsMarker, 'click', function () {
        scallionsWindow.open(map, scallionsMarker);
        map.setZoom(17);
        map.setCenter(scallionsMarker.getPosition());
    });
    google.maps.event.addListener(circuscafeMarker, 'click', function () {
        circusWindow.open(map, circuscafeMarker);
        map.setZoom(17);
        map.setCenter(circuscafeMarker.getPosition());
    });
    google.maps.event.addListener(hotelPavillionMarker, 'click', function () {
        pavillionWindow.open(map, hotelPavillionMarker);
        map.setZoom(17);
        map.setCenter(hotelPavillionMarker.getPosition());
    });
}

// LOAD GMAP
google.maps.event.addDomListener(window, 'load', initialize);