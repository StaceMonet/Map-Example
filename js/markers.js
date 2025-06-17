function isMobile() {
    return window.innerWidth <= 520;
}

const centerLatLang = { lat: 51.508742, lng: -0.120850 };

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: centerLatLang,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    streetViewControl: true
});

let markers = [];
let infowindow = new google.maps.InfoWindow();

// Global close function for custom close button
function closeInfoWindow() {
    if (infowindow) infowindow.close();
}

// Create InfoWindow content
function createInfoWindowContent(infoBoxHeader, webUrl) {
    return `
        <div class="infowindow_content">
            <button class="custom-close-btn" onclick="closeInfoWindow()">×</button>
            <h1 class="infowindow_heading">${infoBoxHeader}</h1>
            <a class="infowindow_btn" href="${webUrl}" target="_blank">Buy Tickets</a>
        </div>
    `;
}

function buttonClickers(buttonDiv, infoBoxHolder, latAndLang, marker, infoBoxHeader, webUrl) {
    document.getElementById(buttonDiv).onclick = function () {
        $(".info_boxes").hide();
        $(infoBoxHolder).show();

        if (!isMobile()) {
            map.setCenter(latAndLang);
        }

        infowindow.setContent(createInfoWindowContent(infoBoxHeader, webUrl));
        infowindow.open(map, marker);
        marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
    };
}

function markerClickers(marker, infoBoxHeader, webUrl, latLang, infoBoxHolder) {
    marker.addListener('click', function () {
        $(".info_boxes").hide();
        $(infoBoxHolder).show();

        infowindow.setContent(createInfoWindowContent(infoBoxHeader, webUrl));
        infowindow.open(map, marker);

        if (!isMobile()) {
            map.setCenter(latLang);
        }

        marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
    });
}

// Add markers
for (let i = 0; i < markerData.length; i++) {
    const newMarker = new google.maps.Marker({
        position: markerData[i][0],
        map: map,
        title: markerData[i][2],
        icon: markerData[i][3]
    });

    newMarker.category = markerData[i][1];
    newMarker.setVisible(false);
    markers.push(newMarker);

    markerClickers(newMarker, markerData[i][2], markerData[i][4], markerData[i][0], markerData[i][6]);
    buttonClickers(markerData[i][5], markerData[i][6], markerData[i][0], newMarker, markerData[i][2], markerData[i][4]);
}

// Show markers by category
function displayMarkers(category, itemsList, categoryButton) {
    $(categoryButton).click(function () {
        for (let i = 0; i < markers.length; i++) {
            if (markers[i].category === category) {
                if (isMobile()) {
                    $('html, body').animate({ scrollTop: $('#mobile_header').offset().top });
                }

                $(".list_boxes").hide();
                $(itemsList).show();
                markers[i].setVisible(true);

                // Animate with slight delay on mobile
                setTimeout(() => {
                    markers[i].setAnimation(google.maps.Animation.DROP);
                }, isMobile() ? 90 : 0);
            } else {
                markers[i].setVisible(false);
                infowindow.close();
            }
        }
    });
}

// Register category buttons
displayMarkers("attractions", '#att_items_list', '.att_button');
displayMarkers("bus_tours", '#bus_items_list', '.bt_button');
displayMarkers("landmarks", '#lmarks_items_list', '.lm_button');
displayMarkers("museums", '#mus_items_list', '.mus_button');
displayMarkers("river_cruise", '#rc_items_list', '.rc_button');
displayMarkers("sightseeing", '#ss_items_list', '.ss_button');
displayMarkers("theme_parks", '#tp_items_list', '.tp_button');
displayMarkers("water_parks", '#wp_items_list', '.wp_button');
displayMarkers("shows", '#shows_items_list', '.shows_button');

// Keep map centered on resize
google.maps.event.addDomListener(window, 'resize', () => {
    map.setCenter(new google.maps.LatLng(51.508742, -0.120850));
});

// Inject custom styles & remove default close button
google.maps.event.addListener(infowindow, 'domready', function () {
    const defaultClose = document.querySelector('.gm-ui-hover-effect');
    if (defaultClose) defaultClose.style.display = 'none';
});