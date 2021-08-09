$(document).ready(function () {

    let galleryIndex = 1;
    function changeImage(n) {

        let i;
        const dots = document.getElementsByClassName("dot");
        const images = document.getElementsByClassName("gallery-div");

        if (n > images.length) {
            galleryIndex = 1;
        }
        if (n < 1) {
            galleryIndex = images.length;
        }

        for (i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        images[galleryIndex - 1].style.display = "block";
        dots[galleryIndex - 1].className += " active";
    }

    changeImage(galleryIndex);
    setInterval(function () {
        changeImage(galleryIndex += 1);
    }, 5000);

});