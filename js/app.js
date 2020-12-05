$(function() {

    let header = $("#header");
    let introH = $("#intro").innerHeight();
    let introRestH = $("#introRest").innerHeight();
    let navRestH = $("#navrest").innerHeight() + introRestH;
    let scrollOffset = $(window).scrollTop();

    // HEADER-FIXED

    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });
    
    function checkScroll(scrollOffset) {
        scrollOffset = $(this).scrollTop();
        if (scrollOffset >= introH || scrollOffset >= navRestH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // SMOOTH SCROLL

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let blockId = $(this).data("scroll");
        let blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500)
    });

});