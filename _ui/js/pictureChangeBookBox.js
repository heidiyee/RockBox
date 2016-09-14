var pictureChangeBookBox = function() {

    var width = $(window).innerWidth();

    if ($(window).innerWidth() > 960) {
        $('.room-icons').attr('src','assets/book-room.svg');
    } else {
        $('.room-icons').attr('src','assets/book-room-mobile.svg');
    }
};

var resizeChangeBookBox = function() {
    $(window).resize(function() {
        var windowWidth = $(window).width();
        if (windowWidth > "960") {
            $('.room-icons').attr('src','assets/book-room.svg');
        } else {
            $('.room-icons').attr('src','assets/book-room-mobile.svg');
        }
    });
};

$(document).ready(pictureChangeBookBox);
$(document).ready(resizeChangeBookBox);
