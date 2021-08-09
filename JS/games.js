$(document).ready(function() {

    let expand = false;
    $(".game-content").hide();

    $(".game").hover(function () {

        if (!expand) {
            $('.game-preview').find("*").show();

            $('.game').not(this).stop().animate({width: "20%"}, 500);
            $(this).stop().animate({width: "59.99%"}, 500);

            $(this).children(".game-preview").css({"background": "rgba(0,0,0,.2)"});
            $(".game").not(this).children(".game-preview").css({"background": "rgba(0,0,0,.7)"});

            $(this).children(".game-preview").find('h1').css({"font-size": "50px"});
            $(this).children(".game-preview").find('h1').css({"padding-top": "40vh"});
            $(".game").not(this).children(".game-preview").find('h1').css({"font-size": "30px"});
            $(".game").not(this).children(".game-preview").find('h1').css({"padding-top": "42.5vh"});

            $(this).css({"border-width": "5px"});
            $(".game").not(this).css({"border-width": "5px"});
        }

    }, function () {

    });

    $(".game").click(function () {

        if (!expand) {
            $(this).children(".game-content").children(".tabs").children(".first-impression").show();
            $(".game-images").hide();
            $(".game-videos").hide();
        }

        expand = true;
        $('#close_game').show();
        $(".game-preview").hide();
        $(this).children(".game-content").show();

        $(".game").css({"border-width": "0px"});
        $(this).stop().animate({width: "99.99%"}, 750);
        $(".game").not(this).stop().animate({width: "0%"}, 650);

        $('.game').css({"cursor" : "default"});
    });

    $("body").on('click', '#close_game', function () {
        expand = false;
        $("#close_game").hide();
        $(".game-content").hide();
        $(".game-preview").show();
        $('.game').stop().animate({width: "33.33%"}, 500);
        $('.game').css({"cursor" : "pointer"});
    });

    $(".overview-tab-game").click(function () {
        $(this).parents(".tabs").children("div").not(".tabs-div").hide();
        $(this).parents(".tabs").children(".first-impression").show();
    });

    $(".images-tab-game").click(function () {
        $(this).parents(".tabs").children("div").not(".tabs-div").hide();
        $(this).parents(".tabs").children(".game-images").show();
    });

});