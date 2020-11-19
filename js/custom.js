/*Navigation*/
// Show/Hide transparent black navigation
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("ready-top-nav");
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("nav").addClass("ready-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});


// Close mobile menu on click
$(function () {

    $(".navbar-collapse ul li a").on("click touch", function () {

        $(".navbar-toggle").click();
    });
});

// Gallery pop-up
$(function () {

    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }

    });
});