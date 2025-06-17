$("#show_mobile_header").click(function (e) {
    e.preventDefault();
    $("#map").toggleClass("update-map");
    $("#mobile_header").toggleClass("update-menu");
});