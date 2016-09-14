var pictureChange = function() {

    var width = $(window).innerWidth();

    if ($(window).innerWidth() > 960) {
        if ($('.cute-icons').length) {
            $('.cute-icons').attr('src','assets/cute-icons.svg');
        } else if ($('.room-icons').length) {
            $('.room-icons').attr('src','assets/book-room.svg');
        }
    } else {
        if ($('.cute-icons').length) {
            $('.cute-icons').attr('src','assets/cute-icons-mobile.svg');
        } else if ($('.room-icons').length) {
            $('.room-icons').attr('src','assets/book-room-mobile.svg');
        }
    }
};

var resizeChange = function() {
    $(window).resize(function() {
        var windowWidth = $(window).width();
        if (windowWidth > "960") {
            if ($('.cute-icons').length) {
                $('.cute-icons').attr('src','assets/cute-icons.svg');
            } else if ($('.room-icons').length) {
                $('.room-icons').attr('src','assets/book-room.svg');
            }
        } else {
            if ($('.cute-icons').length) {
                $('.cute-icons').attr('src','assets/cute-icons-mobile.svg');
            } else if ($('.room-icons').length) {
                $('.room-icons').attr('src','assets/book-room-mobile.svg');
            }
        }
    });
};

$(document).ready(pictureChange);
$(document).ready(resizeChange);
