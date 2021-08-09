$(document).ready(function () {

    changeLanguage("en");
    function changeLanguage(lang) {
        if (lang === "it") {
            $(".en").hide();
            $(".it").show();
            $("#it-div").show()
            $("#en-div").hide()
        } else {
            $(".it").hide();
            $(".en").show();
            $("#en-div").show();
            $("#it-div").hide();
        }
    }

    // LANGUAGE
    const urlParams = new URLSearchParams(window.location.search);
    const language = urlParams.get('lang');
    switch (language) {
        case "en":
            changeLanguage(language);
            break;
        case "it":
            changeLanguage(language);
            break;
        default:
            changeLanguage("en");
            break;
    }

    $(".to-en").click(function () {changeLanguage("en");});
    $(".to-it").click(function () {changeLanguage("it");});

    // SCROLLING MENU
    $(window).scroll(function() {
        if ($(document).scrollTop() > 10) {
            $('body').removeClass('no_scroll');
            $('.container').removeClass('transparent');
        } else {
            $('body').addClass('no_scroll');
            $('.container').addClass('transparent');
        }
    });
})