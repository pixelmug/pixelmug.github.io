$(document).ready(function() {

    let timer = null;
    let expand = false;
    let galleryIndex = 1;
    $(".game-content").hide();

    // Hover expand
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

    // Focus on game
    $(".game").click(function () {

        if (!expand) {
            $(this).children(".game-content").children(".tabs").children(".first-impression").show();
            $(".game-images").hide();
            $(".game-videos").hide();
        }

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

    // Gallery management
    let galleries = [
        ["test3.jpg", "test4.jpg", "test4.jpg", "test3.jpg", "test4.jpg"],
        ["test3.jpg", "test4.jpg", "test4.jpg"],
        ["test3.jpg", "test4.jpg", "test4.jpg", "test3.jpg", "test4.jpg", "test4.jpg"]
    ];

    $(".game").click(function() {

        if(!expand) {
            let n_game;
            expand = true;
            switch ($(this).attr('id')) {
                case "game-1":
                    n_game = 0;
                    break;
                case "game-2":
                    n_game = 1;
                    break;
                case "game-3":
                    n_game = 2;
                    break;
            }

            let gallery = '<div class="game-gallery">\n';
            for (let i = 0; i < galleries[n_game].length; i++) {
                gallery += '<div class="game-gallery-div fade">\n' +
                    '<img class="game-gallery-image" src="Images/' + galleries[n_game][i] + '" alt="gallery-img">\n' +
                    '</div>';
            }

            gallery += '<div style="text-align: center" class="game-dot-div">';

            for (let j = 1; j < galleries[n_game].length + 1; j++) {
                gallery += '<span class="game-dot" data-dot-n="' + j + '"></span>';
            }
            gallery += '</div></div>';

            $(".game-gallery").remove();
            $(this).children(".game-content").children(".tabs").children(".game-images").append(gallery);
            changeImage(1);
        }
    });

    $(document).on('click', '.game-dot', function(){
       changeImage($(this).data("dot-n"));
    });

    function plusImage(n) {
        changeImage(galleryIndex += n);
    }

    function changeImage(n) {

        let i;
        galleryIndex = n;
        clearInterval(timer);
        timer = setInterval(function(){plusImage(1);}, 5000);

        const dots = document.getElementsByClassName("game-dot");
        const images = document.getElementsByClassName("game-gallery-div");

        if (n > images.length) {galleryIndex = 1}
        if (n < 1) {galleryIndex = images.length}

        for (i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        images[galleryIndex - 1].style.display = "block";
        dots[galleryIndex - 1].className += " active";
    }

    timer = setInterval(function(){plusImage(1);}, 5000);

});