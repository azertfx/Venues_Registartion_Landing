$(".button-collapse").sideNav();
$("#btnToTop").click(function() {
    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 500);
});
