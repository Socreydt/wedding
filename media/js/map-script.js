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
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle very-small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-food" style="color:#0d9a48"></i></div>',
        labelAnchor: new google.maps.Point(12, 36)
        //labelClass: "labels" // the CSS class for the label
    });
    var uncommon_groundsMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0813114, -73.7851769),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle very-small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-food" style="color:#0d9a48"></i></div>',
        labelAnchor: new google.maps.Point(12, 36)
        //labelClass: "labels" // the CSS class for the label
    });
    var mimiMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0804458, -73.7833891),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle very-small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-food" style="color:#0d9a48"></i></div>',
        labelAnchor: new google.maps.Point(12, 36)
        //labelClass: "labels" // the CSS class for the label
    });
    var ravenousMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0806164, -73.7849456),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle very-small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-food" style="color:#0d9a48"></i></div>',
        labelAnchor: new google.maps.Point(12, 36)
        //labelClass: "labels" // the CSS class for the label
    });
    var springDeliMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0785279, -73.7789044),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle very-small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-food" style="color:#0d9a48"></i></div>',
        labelAnchor: new google.maps.Point(20, 36)
        //labelClass: "labels" // the CSS class for the label
    });
    var scallionsMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0825638, -73.7820769),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle very-small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-food" style="color:#0d9a48"></i></div>',
        labelAnchor: new google.maps.Point(12, 36)
        //labelClass: "labels" // the CSS class for the label
    });
    var circuscafeMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0812902, -73.7854856),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle very-small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-food" style="color:#0d9a48"></i></div>',
        labelAnchor: new google.maps.Point(20, 36)
        //labelClass: "labels" // the CSS class for the label
    });
    var bocaBistroMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0810178, -73.7855387),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle very-small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-food" style="color:#0d9a48"></i></div>',
        labelAnchor: new google.maps.Point(12, 36)
        //labelClass: "labels" // the CSS class for the label
    });
    var brookTavernMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0765441, -73.7756642),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle very-small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-food" style="color:#0d9a48"></i></div>',
        labelAnchor: new google.maps.Point(12, 36)
        //labelClass: "labels" // the CSS class for the label
    });
    var fornoBistroMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0855478, -73.7842314),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle very-small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-food" style="color:#0d9a48"></i></div>',
        labelAnchor: new google.maps.Point(12, 36)
        //labelClass: "labels" // the CSS class for the label
    });
    var hattieMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0804988, -73.7835624),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle very-small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-food" style="color:#0d9a48"></i></div>',
        labelAnchor: new google.maps.Point(12, 36)
        //labelClass: "labels" // the CSS class for the label
    });
    var oneCarolineMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0822664, -73.7849242),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle very-small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-food" style="color:#0d9a48"></i></div>',
        labelAnchor: new google.maps.Point(12, 36)
        //labelClass: "labels" // the CSS class for the label
    });

    var pizzaMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0819874, -73.7832838),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle very-small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-food" style="color:#0d9a48"></i></div>',
        labelAnchor: new google.maps.Point(12, 36)
        //labelClass: "labels" // the CSS class for the label
    });


    // Hotels
    var hotelPavillionMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0825235, -73.7828395),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-home-1" style="color:#0094ff"></i></div>',
        labelAnchor: new google.maps.Point(12, 36)
        //labelClass: "labels" // the CSS class for the label
    });
    var hotelEmbassySuites = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0792562, -73.7901779),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-home-1" style="color:#0094ff"></i></div>',
        labelAnchor: new google.maps.Point(12, 36)
        //labelClass: "labels" // the CSS class for the label
    });
    var hamptonInnSuites = new MarkerWithLabel({
        position: new google.maps.LatLng(43.08316, -73.7825641),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-home-1" style="color:#0094ff"></i></div>',
        labelAnchor: new google.maps.Point(12, 36)
        //labelClass: "labels" // the CSS class for the label
    });
    var CourtyardSuites = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0888918, -73.7780174),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-home-1" style="color:#0094ff"></i></div>',
        labelAnchor: new google.maps.Point(12, 36)
        //labelClass: "labels" // the CSS class for the label
    });
    var HolidayInnSuites = new MarkerWithLabel({
        position: new google.maps.LatLng(43.0759712, -73.7862522),
        draggable: false,
        raiseOnDrag: false,
        icon: ' ',
        map: map,
        labelContent: '<div class="de-icon circle small-size" style="background-color:#FFF; border:1px solid #CCC"><i class="de-icon-home-1" style="color:#0094ff"></i></div>',
        labelAnchor: new google.maps.Point(12, 36)
        //labelClass: "labels" // the CSS class for the label
    });


    //INFO WINDOWS
    //=======================================================================================
    var infowindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Wedding</b><br/>Canfield Casino<br/>1 East Congress Street<br/>Saratoga Springs, NY 12866<br/><br/><b>June 26 2016, 5:30 pm' + '</b></div>'
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
        content: '<div>' + '<b style="font-size:14px;">Circus Cafe</b><br/>392 Broadway<br/>Saratoga Springs, NY 12866<br/>' + '<a href="http://www.circuscafe.com/" class="map-link" target="_blank">See menu</a></div>'
    });
    var scallionsWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Scallions</b><br/>44 Lake Ave<br/>Saratoga Springs, NY 12866<br/>' + '<a href="http://www.scallionsrestaurant.com/" class="map-link" target="_blank">See menu</a></div>'
    
    });
    var bocaWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Boca Bistro</b><br/>384 Broadway<br/>Saratoga Springs, NY 12866<br/>' + '<a href="http://www.bocabistro.com/" class="map-link" target="_blank">See menu</a></div>'
    });
    var brookWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">The Brook Tavern</b><br/>139 Union Ave<br/>Saratoga Springs, NY 12866<br/>' + '<a href="http://thebrooktavern.com/" class="map-link" target="_blank">See menu</a></div>'
    });
    var fornoWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Forno Bistro</b><br/>541 Broadway<br/>Saratoga Springs, NY 12866<br/>Italian dishes & wood-fired pizza in candlelit, <br/>Tuscan-style quarters with lively all-season patio.<br/>' + '<a href="http://www.fornobistro.com/" class="map-link" target="_blank">See menu</a></div>'
    });
    var hattieWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Hatties</b><br/>45 Phila St<br/>Saratoga Springs, NY 12866<br/>Fried chicken and other Southern fare dished <br/>out in a 1938 shack with a courtyard and late-night lounge.<br/>' + '<a href="http://hattiesrestaurant.com/" class="map-link" target="_blank">See menu</a></div>'
    });
    var oneCarolineWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">One Caroline Street Bistro</b><br/>1 Caroline St<br/>Saratoga Springs, NY 12866' + '<a href="http://onecaroline.com/" class="map-link" target="_blank">See menu</a></div>'
    });
    var pizzaWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">DAndreas Pizza</b><br/>33 Caroline St<br/>Saratoga Springs, NY 12866<br/>Perfect drunk food.' + '<a href="http://dandreaspizza.com/" class="map-link" target="_blank">See menu</a></div>'
    });


    // HOTELS
    var pavillionWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Pavilion Grand Hotel</b><br/>30 Lake Ave<br/>Saratoga Springs, NY 12866<br/>' + '<a href="http://www.paviliongrandhotel.com/" class="map-link" target="_blank">View Hotel Website</a></div>'
    });
    var embassyWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Embassy Suites Hotel</b><br/>86 Congress St<br/>Saratoga Springs, NY 12866<br/>From $160 a night<br/>' + '<a href="http://embassysuites.hilton.com/en/es/groups/personalized/A/ALBESES-DCB-20160626/index.jhtml?WT.mc_id=POG" class="map-link" target="_blank">Book now</a></div>'
    });
    var hamptonWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Hampton Inn Suites</b><br/>25 Lake St<br/>Saratoga Springs, NY 12866<br/>From $204 a night<br/>' + '<a href="https://secure3.hilton.com/en_US/hp/reservation/book.htm?execution=e1s1" class="map-link" target="_blank">Book now</a></div>'
    });
    var courtYardWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Courtyard Saratoga Springs</b><br/>11 Excelsior Ave<br/>Saratoga Springs, NY 12866<br/>From $204 a night<br/>' + '<a href="http://www.marriott.com/hotels/travel/albss-courtyard-saratoga-springs/" class="map-link" target="_blank">View Hotel</a></div>'
    });
    var holidayInnWindow = new google.maps.InfoWindow({
        content: '<div>' + '<b style="font-size:14px;">Holiday Inn Saratoga</b><br/>232 Broadway<br/>Saratoga Springs, NY 12866<br/>From $229 a night<br/>' + '<a href="http://www.ihg.com/holidayinn/hotels/us/en/saratoga-springs/sgany/hoteldetail?qAdlt=1&qBrs=6c.hi.ex.rs.ic.cp.in.sb.cw.cv.ul.vn&qChld=0&qFRA=1&qGRM=0&qGrpCd=DCR&qPSt=0&qRRSrt=rt&qRef=df&qRms=1&qRpn=1&qRpp=12&qSHp=1&qSmP=3&qSrt=sBR&qWch=0&srb_u=1&icdv=99801505&icdv=99801505" class="map-link" target="_blank">Book Hotel</a></div>'
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
    google.maps.event.addListener(bocaBistroMarker, 'click', function () {
        bocaWindow.open(map, bocaBistroMarker);
        map.setZoom(17);
        map.setCenter(bocaBistroMarker.getPosition());
    });
    google.maps.event.addListener(brookTavernMarker, 'click', function () {
        brookWindow.open(map, brookTavernMarker);
        map.setZoom(17);
        map.setCenter(brookTavernMarker.getPosition());
    });
    google.maps.event.addListener(fornoBistroMarker, 'click', function () {
        fornoWindow.open(map, fornoBistroMarker);
        map.setZoom(17);
        map.setCenter(fornoBistroMarker.getPosition());
    });
    google.maps.event.addListener(hattieMarker, 'click', function () {
        hattieWindow.open(map, hattieMarker);
        map.setZoom(17);
        map.setCenter(hattieMarker.getPosition());
    });
    google.maps.event.addListener(oneCarolineMarker, 'click', function () {
        oneCarolineWindow.open(map, oneCarolineMarker);
        map.setZoom(17);
        map.setCenter(oneCarolineMarker.getPosition());
    });
    google.maps.event.addListener(pizzaMarker, 'click', function () {
        pizzaWindow.open(map, pizzaMarker);
        map.setZoom(17);
        map.setCenter(pizzaMarker.getPosition());
    });


    google.maps.event.addListener(hotelPavillionMarker, 'click', function () {
        pavillionWindow.open(map, hotelPavillionMarker);
        map.setZoom(17);
        map.setCenter(hotelPavillionMarker.getPosition());
    });
    google.maps.event.addListener(hotelEmbassySuites, 'click', function () {
        embassyWindow.open(map, hotelEmbassySuites);
        map.setZoom(17);
        map.setCenter(hotelEmbassySuites.getPosition());
    });
    google.maps.event.addListener(hamptonInnSuites, 'click', function () {
        hamptonWindow.open(map, hamptonInnSuites);
        map.setZoom(17);
        map.setCenter(hamptonInnSuites.getPosition());
    });
    google.maps.event.addListener(CourtyardSuites, 'click', function () {
        courtYardWindow.open(map, CourtyardSuites);
        map.setZoom(17);
        map.setCenter(CourtyardSuites.getPosition());
    });
    google.maps.event.addListener(HolidayInnSuites, 'click', function () {
        holidayInnWindow.open(map, HolidayInnSuites);
        map.setZoom(17);
        map.setCenter(HolidayInnSuites.getPosition());
    });

    
}

// LOAD GMAP
google.maps.event.addDomListener(window, 'load', initialize);