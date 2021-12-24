let choice = "en";

function changeLanguage(lang) {
    if (lang === "it") {
        $(".en").hide();
        $(".it").show();
        $("#it-div").show();
        $("#en-div").hide();
    } else {
        $(".it").hide();
        $(".en").show();
        $("#en-div").show();
        $("#it-div").hide();
    }
}


$(document).ready(function () {

    // LANGUAGE
    const urlParams = new URLSearchParams(window.location.search);
    const language = urlParams.get('lang');
    switch (language) {
        case "en":
            choice = "en";
            changeLanguage(choice);
            break;
        case "it":
            choice = "it";
            changeLanguage(choice);
            break;
        default:
            changeLanguage(choice);
            break;
    }

    $("#header").load("../header.html", function() {

        $(".to-en").click(function () {changeLanguage("en"); choice="en"});
        $(".to-it").click(function () {changeLanguage("it"); choice="it"});

        changeLanguage(choice);
    });
    $("#footer").load("../footer.html", function() {
        changeLanguage(choice);
    });

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