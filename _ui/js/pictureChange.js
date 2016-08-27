var pictureChange = function() {

    var width = $(window).innerWidth();
    var mediaQuery = window.matchMedia( "(max-width: 500px)" );

    console.log(width);
    console.log(mediaQuery);

    if ($(window).innerWidth() > 960) {
        console.log("match");
        $('.cute-icons').attr('src','_ui/assets/cute-icons.svg');
    } else {
        $('.cute-icons').attr('src','_ui/assets/cute-icons-mobile.svg');
    }
};

$(document).ready(pictureChange);
