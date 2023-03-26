$(".info-panel").hover(function () {
    $(".faq-page").addClass("shrink");
});
$(".faq-panel").hover(function () {
    $(".info-page").addClass("shrink");
});
$(".panel").mouseleave(function () {
    $(".page").removeClass("shrink");
    $(".page").addClass("expand");
});
