// object 0: [{lat: latitude, long: longitude},
// object 1: category name, 
// object 2: 'Product Title', 
// object 3: 'images/icons/markername.png',
// object 4: 'href="http://www.365tickets.com/itempage'],
// object 5: "link_div", - assigns marker to the button in right sidebar 
// object 6: "#info_box_holder" - div which contains product info in left sidebar 

var markerData = [
// -------------- 1: attractions -------------------------
    
        [{lat: 51.510257, lng: -0.134037}, 
         "attractions", 
         'Ripleys Believe it or Not',
         'images/marker_icons/attractions_marker.png',
         'href="http://www.365tickets.co.uk/ripleys-believe-it-or-not-london', 
         "rbion_button", 
         "#rbion_info"
        ],
    
        [{lat: 51.690958, lng: -0.417791}, 
         "attractions", 
         'Warner Bros. Studio Tour London',
         'images/marker_icons/attractions_marker.png',
         'href="http://www.365tickets.com/warner-bros-studio-tour-london', 
         "wbstl_button", 
         "#wbstl_info"
        ],
    
        [{lat: 51.503894, lng: -0.149120}, 
         "attractions", 
         'Hard Rock Cafe', 
         'images/marker_icons/attractions_marker.png', 'href="http://www.365tickets.co.uk/hard-rock-cafe',
         "hrc_button", 
         "#hrc_info"
        ],
    
        [{lat: 51.507472, lng: -0.071180}, 
         "attractions", 
         'Medieval Banquet', 
         'images/marker_icons/attractions_marker.png', 'href="http://www.365tickets.co.uk/medieval-banquet',
         "mb_button", 
         "#mb_info"
        ],
    
        [{lat: 51.503538, lng: -0.119564}, 
         "attractions", 
         'London Eye', 
         'images/marker_icons/attractions_marker.png',
         'href="http://www.365tickets.co.uk/london-eye-tickets',
         "le_button", 
         "#le_info"
        ],
    
        [{lat: 51.5019803, lng: -0.1302734}, 
         "attractions", 
         'London Aquarium', 
         'images/marker_icons/attractions_marker.png',
         'href="http://www.365tickets.co.uk/london-eye-tickets',
         "la_button", 
         "#la_info"
        ],
    
        [{lat: 51.5352875, lng: -0.155619}, 
         "attractions", 
         'London Zoo', 
         'images/marker_icons/attractions_marker.png',
         'href="http://www.365tickets.com/london-zoo',
         "lz_button", 
         "#lz_info"
        ],
    
        
    
//-------------------- 2: bus_tours ------------------------
        
        [{lat: 51.507036, lng: -0.141632}, 
         "bus_tours", 
         'See London By Night Bus Tour', 
         'images/marker_icons/bus_tour_marker.png', 
         'href="http://www.365tickets.com/see-london-by-night-bus-tour', 
         "slbn_button", 
         "#slbn_info"
        ],
    
        [{lat: 51.507622, lng: -0.1473005}, 
         "bus_tours", 
         'The Original London Sightseeing Tour',
         'images/marker_icons/bus_tour_marker.png',
         'href="http://www.365tickets.com/the-original-london-sightseeing-tour-standard-tickets', 
         "olst_button", 
         "#olst_info"
        ],
    
        [{lat: 51.4940535, lng: -0.149120}, 
         "bus_tours", 
         'The Big Bus London Sightseeing Tour', 
         'images/marker_icons/bus_tour_marker.png', 
         'href="http://www.365tickets.com/the-big-bus-london-sightseeing-tour',
         "bblst_button", 
         "#bblst_info"
        ],
    
//--------------------- 3: landmarks --------------------------- 
    
        [{lat: 51.404008, lng: -0.337796}, 
         "landmarks", 
         'Hampton Court Palace', 
         'images/marker_icons/landmark_marker.png',
         'href="http://www.365tickets.co.uk/hampton-court-palace-london-standard-tickets', 
         "hcp_button", 
         "#hcp_info"
        ],
    
        [{lat: 51.484109, lng: -0.604432}, 
         "landmarks", 
         'Windsor Castle', 
         'images/marker_icons/landmark_marker.png',
         'href="http://www.365tickets.co.uk/windsor-castle',
         "wc_button", 
         "#wc_info"
        ],
    
        [{lat: 51.505677, lng: -0.075303}, 
         "landmarks", 
         'Tower Bridge Exhibition',
         'images/marker_icons/landmark_marker.png',
         'href="http://www.365tickets.co.uk/tower-bridge-exhibition', 
         "tb_button", 
         "#tb_info"
        ],
    
        [{lat: 51.508319, lng: -0.075939}, 
         "landmarks", 
         'Tower of London', 
         'images/marker_icons/landmark_marker.png',
         'href="http://www.365tickets.co.uk/tower-of-london',
         "tol_button", 
         "#tol_info"
        ],
    
        [{lat: 51.503538, lng: -0.119564}, 
         "landmarks", 
         'London Eye', 
         'images/marker_icons/landmark_marker.png',
         'href="http://www.365tickets.co.uk/london-eye-tickets',
         "le_button2", 
         "#le_info"
        ],

// ---------------------- 4: museums -----------------------
    
    [{lat: 51.5021538, lng: -0.1314094}, 
         "museums", 
         'Churchill War Rooms', 
         'images/marker_icons/museum_marker.png',
         'href="http://www.365tickets.com/churchill-museum-cabinet-war-rooms', 
         "cwr_button", 
         "#cwr_info"
        ],
    
// --------------------- 5: river_cruise -----------------
    
        [{lat: 51.502792, lng: -0.115805}, 
         "river_cruise", 
         'London Duck Tours', 
         'images/marker_icons/river_cruise_marker.png',
         'href="http://www.365tickets.co.uk/london-ducktours',
         "ldt_button", 
         "#ldt_info"
        ],
    
//-----------------------  6: sightseeing -----------------
    
        [{lat: 51.502792, lng: -0.115805}, 
         "sightseeing", 
         'London Duck Tours', 
         'images/marker_icons/sightseeing_marker.png',
         'href="http://www.365tickets.co.uk/london-ducktours',
         "ldt_button2", 
         "#ldt_info"
        ],
    
        [{lat: 51.507036, lng: -0.141632}, 
         "sightseeing", 
         'See London By Night Bus Tour', 
         'images/marker_icons/sightseeing_marker.png', 
         'href="http://www.365tickets.com/see-london-by-night-bus-tour', 
         "slbn_button2", 
         "#slbn_info"
        ],
    
        [{lat: 51.507622, lng: -0.1473005}, 
         "sightseeing", 
         'The Original London Sightseeing Tour',
         'images/marker_icons/sightseeing_marker.png',
         'href="http://www.365tickets.com/the-original-london-sightseeing-tour-standard-tickets', 
         "olst_button2", 
         "#olst_info"
        ],
    
        [{lat: 51.4940535, lng: -0.149120}, 
         "sightseeing", 
         'The Big Bus London Sightseeing Tour', 
         'images/marker_icons/sightseeing_marker.png', 
         'href="http://www.365tickets.com/the-big-bus-london-sightseeing-tour',
         "bblst_button2", 
         "#bblst_info"
        ],
    
//------------------------ 7: theme_parks -----------------
        
        [{lat: 51.3431938, lng: -0.3277377}, 
         "theme_parks", 
         'Chessington World of Adventures', 
         'images/marker_icons/theme_parks_marker.png', 
         'href="http://www.365tickets.com/chessington-world-of-adventures-resort',
         "cwoa_button", 
         "#cwoa_info"
        ],
    
    
//------------------------ 8: water_parks -----------------
    
//--------------------------- 9: shows --------------------
        [{lat: 51.508742, lng: -0.120850},
         "shows",
         'Mamma Mia!',
         'images/marker_icons/shows_marker.png',
         'href="http://www.365tickets.com/mamma-mia', 
         "mm_button", 
         "#mm_info"
        ],
    
        [{lat: 51.508298, lng: -0.131801},
         "shows", 
         'Phantom of the Opera', 
         'images/marker_icons/shows_marker.png',
         'href="http://www.365tickets.com/the-phantom-of-the-opera', 
         "poto_button", 
         "#poto_info"
        ],
    
        [{lat: 51.495737, lng: -0.142708}, 
         "shows", 
         'Wicked', 
         'images/marker_icons/shows_marker.png',
         'href="http://www.365tickets.com/wicked', 
         "wkd_button", 
         "#wkd_info"
        ],
    
        [{lat: 51.511646, lng: -0.119772}, 
         "shows", 
         'The Lion King', 
         'images/marker_icons/shows_marker.png',
         'href="http://www.365tickets.com/the-lion-king-london',
         "tlk_button", 
         "#tlk_info"
        ],
    
        [{lat: 51.512857, lng: -0.120363}, 
         "shows", 
         'Charlie and the Chocolate Factory',
         'images/marker_icons/shows_marker.png',
         'href="http://www.365tickets.com/charlie-and-the-chocolate-factory', 
         "catcf_button", 
         "#catcf_info"
        ]
      
    ];    