 
var versionUpdate = (new Date()).getTime();
var script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://api2.gtftech.com/scripts/queryform.min.ssl.js?v=" + versionUpdate;
document.body.appendChild(script);



//Needs to be duplicate in the case of multiple forms on the same page
//--------------------------------------------------------------------------------------//
$('#preferedtime').hide();


$('.without-caption').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
    }
});

$('.with-caption').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
        verticalFit: true,
        titleSrc: function (item) {
            return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">';
        }
    },
    zoom: {
        enabled: true
    }
});

$('.navlinks').on('click', function (e) {
    var target = this.hash,
        $target = $(target);
    if ($target.length) {
        var offset = ($(window).width() <= 767) ? 150 : 90;

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - offset
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    }
});
if ($(window).width() <= 767) {
    $(".gallery-container").remove();
}
$(document).ready(function () {
    $(".nav-item-2").click(function () {
        $(".collapse").removeClass("show");
    });
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 70) {
        $(".AppHeader").addClass("HeaderFixed");
    } else {
        $(".AppHeader").removeClass("HeaderFixed");
    }
});
$(".AppNavbar .navlinks").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
});

$(".menuIcoin").click(function () {
    $(".AppNavbar").addClass("active")
    $(".overlay").addClass("active")
})
$(".AppNavbar .navlinks, .overlay").click(function () {
    $(".AppNavbar").removeClass("active")
    $(".overlay").removeClass("active")
})

$(".reamoredbtn").click(function () {
    $(".moretext").slideToggle("slow");
    if ($(this).text() == "Read More") $(this).text("Read Less")
    else $(this).text("Read More");
});

$(document).ready(function () {
    let time = 3000;
    setTimeout(() => {
        $("#customModal").modal("show");
    }, time);
});

// $(document).ready(function () {
//     $('.phone-input').each(function () {
//         const input = this;
//         const output = $(this).siblings(".output");

//         const iti = window.intlTelInput(input, {
//             allowDropdown: true,
//             separateDialCode: true,
//             initialCountry: 'auto',
//             geoIpLookup: callback => {
//                 fetch("https://ipapi.co/json")
//                     .then(res => res.json())
//                     .then(data => callback(data.country_code))
//                     .catch(() => callback("us"));
//             },
//             utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js"
//         });

//         const handleChange = () => {
//             let text;
//             if (input.value) {
//                 text = iti.isValidNumber()
//                     ? "Valid number! Full international format: " + iti.getNumber()
//                     : "Invalid number - please try again";
//             } else {
//                 text = "Please enter a valid number";
//             }
//             output.empty().text(text);
//         };

//         // listen to "keyup", but also "change" to update when the user selects a country
//         $(input).on('change keyup', handleChange);
//     });
// });

 