// sidebars.js
/* code to show/hide sidebars */
$("#show_sidebar_left").click(function (e) {
    e.preventDefault();
    $("#show_sidebar_left").toggleClass("clear_left");
    $("#sidebar_left").toggleClass("open_left_sidebar");
});

$("#sidebar_left a").click(function (event) {
    event.preventDefault();
});
              
$("#close_sidebar_left").click(function (e) {
    e.preventDefault();
    $("#show_sidebar_left").toggleClass("clear_left");
    $("#sidebar_left").toggleClass("open_left_sidebar");
});

$("#sidebar_left a").click(function (event) {
    event.preventDefault();
});
    
$("#show_sidebar_right").click(function (e) {
    e.preventDefault();
    $("#show_sidebar_right").toggleClass("clear_right");
    $("#sidebar_right").toggleClass("open_right_sidebar");
});
		
$("#sidebar_right a").click(function (event) {
    event.preventDefault();
});
              
$("#close_sidebar_right").click(function (e) {
    e.preventDefault();
    $("#show_sidebar_right").toggleClass("clear_right");
    $("#sidebar_right").toggleClass("open_right_sidebar");
});

$("#sidebar_right a").click(function (event) {
    event.preventDefault();
}); 

$("#more_info").click(function (e) {
    e.preventDefault();
    $("#show_sidebar_right").toggleClass("clear_right");
    $("#sidebar_right").toggleClass("open_right_sidebar");
});

