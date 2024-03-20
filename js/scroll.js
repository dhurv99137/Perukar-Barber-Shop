$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        $(".copy-right-icon").fadeIn();
    } else {
        $(".copy-right-icon").fadeOut();
    }
});