/* declare the latidue and longitude coordinates for center of the map */
var centerLatLang = {lat: 51.508742, lng: -0.120850};

/* initialise map, set center, zoom and type of map */
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: centerLatLang,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: true
});

/* create an empty array which will be used to store all markers in */
var markers = [];
/* declare global infowindow variable  */
var infowindow;

/* function which shows infowindows and left-sidebar content when the links in the right sidebar are clicked */
function buttonClickers(buttonDiv, infoBoxHolder, latAndLang, marker, infoBoxHeader, webUrl) {

    var buttonVar = document.getElementById(buttonDiv);
    buttonVar.onclick = function () {
        $(".info_boxes").css('display', 'none');
        $(infoBoxHolder).css('display', 'block');
        map.setCenter(latAndLang);
        infowindow.open(map, marker);
        infowindow.setContent('<div class="infowindow_content"><h1 class="infowindow_heading">' + infoBoxHeader + '</h1> <a class="infowindow_btn"' + webUrl + '" target="_blank"> Buy Tickets </a></div>');
        marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
    };
}
  
/* function which shows infowindows and left-sidebar content when markers are clicked on */
function markerClickers(marker, infoBoxHeader, webUrl, latLang, infoBoxHolder, iconLoc) {
    infowindow = new google.maps.InfoWindow({
    });
        
    marker.addListener('click', function () {
        $(".info_boxes").css('display', 'none');
        $(infoBoxHolder).css('display', 'block');
        infowindow.open(map, this);
        infowindow.setContent('<div class="infowindow_content"><h1 class="infowindow_heading">' + infoBoxHeader + '</h1><a class="infowindow_btn"' + webUrl + '" target="_blank"> Buy Tickets </a></div>');
        map.setCenter(latLang);
        marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
        /*
        for (var j = 0; j < markers.length; j++) {
          markers[j].setIcon(iconLoc);
        }
        this.setIcon('images/icons/gmap_marker_active.png'); */
    });
}

/* a for loops which runs through the markerData array and assigns that data in each array to each marker */
for (var i = 0; i < markerData.length; ++i) {
    /* create a marker and assign position, title, and icons to data stored in the markerData array */ 
    var newMarker = new google.maps.Marker({
        position: markerData[i][0],
        map: map,
        title: markerData[i][2],
        icon: markerData[i][3]
    });
        
        /* assigns category variable to category items in array */ 
        newMarker.category = markerData[i][1];
        /* sets all markers to not visible on page */ 
        newMarker.setVisible(false); 
        /* adds all markers to the markers array */ 
        markers.push(newMarker);
        /* calls the markersClickers function and assign parameters to loop through array items of each marker when a marker is clicked */ 
        markerClickers(this.newMarker, markerData[i][2], markerData[i][4], markerData[i][0], markerData[i][6], markerData[i][3]);
        /* calls the buttonClickers function and assign parameters to loop through array items of each marker when the buttons in the right sidebar are clicked */
        buttonClickers(markerData[i][5], markerData[i][6], markerData[i][0], this.newMarker, markerData[i][2], markerData[i][4]);
}
     
/* a function which compares a string in the markerData array to the category parameter in this function, if the strings are equal, then content in the div will be displayed, else, it won't  */ 
function displayMarkers(category, itemsList, categoryButton) {
     $(categoryButton).click(function(){
        var myi;
        for (myi = 0; myi < markers.length; myi++) {
            /* if the markers in this category are exactly equal to the value set in the category parameter then display the markers */ 
            if (markers[myi].category === category) {
                /* for each click .list_boxes is set back to display:none; */ 
                $(".list_boxes").css('display', 'none');
                /* the div gets called in this functions parameter is set to display:block; */
                $(itemsList).css('display', 'block');
                /* make markers visible on click */ 
                markers[myi].setVisible(true);
                /* animate markers on category click */  markers[myi].setAnimation(google.maps.Animation.DROP); 
            } else {
                /* set markers visibility to false if they are not assigned to the right category*/ 
                markers[myi].setVisible(false);
                /* close all infowindows */
                infowindow.close(); 
            }
        }
    });
}

// to create a new category call the function and add new divs in html markup 
// #cat = a string stored in the markerData array which is matched to the first parameter inside teh displayMarkers Function, if this string is equal to the string inside the array then the content of the 'items_list' div will be displayed   
// #items_list = references the div in html which holds the list of locations intended to be displayed
// #category = references the id of the button/link which the user has to click on to display the content 

displayMarkers("attractions", '#att_items_list', '#att_button');
displayMarkers("bus_tours", '#bus_items_list', '#bt_button');
displayMarkers("landmarks", '#lmarks_items_list', '#lm_button');
displayMarkers("museums", '#mus_items_list', '#mus_button');
displayMarkers("river_cruise", '#rc_items_list', '#rc_button');
displayMarkers("sightseeing", '#ss_items_list', '#ss_button');
displayMarkers("theme_parks", '#tp_items_list', '#tp_button');
displayMarkers("water_parks", '#wp_items_list', '#wp_button');
displayMarkers("shows", '#shows_items_list', '#shows_button');

/* centers map when window is resized */ 
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(
        parseFloat(51.508742),
        parseFloat(-0.120850)
    ));
});