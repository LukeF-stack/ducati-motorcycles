// Hero Image Carousel
$(document).ready(function(){
    var image = 0;
    $("#circle1").click(function(){
    $("#home_hero-img").css("background-image", "url(./images/hero-1.png)"); /* Ducati. 2019. Ducati Panigale V4 Racing Towards Camera. Image. https://www.ducati.com/au/en/bikes/panigale/panigale-v4.*/
    image = 1;
    });
    $("#circle2").click(function(){
    $("#home_hero-img").css("background-image", "url(./images/hero-2.png)"); /* Ducati. 2019. Ducati Panigale V4 Racing Past Camera. Image. https://www.ducati.com/au/en/bikes/panigale/panigale-v4.*/
    image = 2;
    });
    $("#circle3").click(function(){
    $("#home_hero-img").css("background-image", "url(./images/hero-3.png)"); /* Ducati. 2019. Ducati Panigale V4 Racing Towards Camera 2. Image. https://www.ducati.com/au/en/bikes/panigale/panigale-v4.*/
    image = 3;
    });
    $(".ellipse").click(function(){
        if (image == 1) {
            document.getElementById("circle1").src="images/ellipse-gold.svg";
            document.getElementById("circle2").src="images/ellipse-white.svg";
            document.getElementById("circle3").src="images/ellipse-white.svg";
        }
        else if (image == 2) {
            document.getElementById("circle1").src="images/ellipse-white.svg";
            document.getElementById("circle2").src="images/ellipse-gold.svg";
            document.getElementById("circle3").src="images/ellipse-white.svg";
        }
        else if (image == 3) {
            document.getElementById("circle1").src="images/ellipse-white.svg";
            document.getElementById("circle2").src="images/ellipse-white.svg";
            document.getElementById("circle3").src="images/ellipse-gold.svg";
        }
    });
});

// Panigale Carousel
$(document).ready(function(){
    var panigale_image = 0;
    $("#panigale_circle1").click(function(){
    panigale_image = 1;
    document.getElementById("panigale").src="images/panigale_1.png"; // Ducati. 2019. Ducati Panigale V4 Side Profile. Image. https://www.ducati.com/au/en/bikes/panigale/panigale-v4.
    });
    $("#panigale_circle2").click(function(){
    panigale_image = 2;
    document.getElementById("panigale").src="images/panigale_2.png"; // Ducati. 2019. Ducati Panigale V4 S Corse Side Profile. Image. https://www.ducati.com/au/en/bikes/panigale/panigale-v4.
    });
    $("#panigale_circle3").click(function(){
        panigale_image = 3;
    document.getElementById("panigale").src="images/panigale_3.png"; // Ducati. 2019. Ducati Panigale V4 Speciale Side Profile. Image. https://www.ducati.com/au/en/bikes/panigale/panigale-v4.
    });
    $(".ellipse").click(function(){
        if (panigale_image == 1) {
            document.getElementById("panigale_circle1").src="images/ellipse-gold.svg";
            document.getElementById("panigale_circle2").src="images/ellipse-white.svg";
            document.getElementById("panigale_circle3").src="images/ellipse-white.svg";
        }
        else if (panigale_image == 2) {
            document.getElementById("panigale_circle1").src="images/ellipse-white.svg";
            document.getElementById("panigale_circle2").src="images/ellipse-gold.svg";
            document.getElementById("panigale_circle3").src="images/ellipse-white.svg";
        }
        else if (panigale_image == 3) {
            document.getElementById("panigale_circle1").src="images/ellipse-white.svg";
            document.getElementById("panigale_circle2").src="images/ellipse-white.svg";
            document.getElementById("panigale_circle3").src="images/ellipse-gold.svg";
        }
    });
});

// Monster Carousel
var monster_image = 0;
$(document).ready(function(){
    monster_image = 0;
    $("#monster_circle1").click(function(){
    monster_image = 1;
    document.getElementById("monster").src="images/monster_1.png"; // Ducati. 2019. Ducati Monster 797 Side Profile Silver. Image. https://www.ducati.com/au/en/bikes/monster/monster-797.
    });
    $("#monster_circle2").click(function(){
    monster_image = 2;
    document.getElementById("monster").src="images/monster_2.png"; // Ducati. 2019. Ducati Monster 797 Side Profile Red. Image. https://www.ducati.com/au/en/bikes/monster/monster-797.
    });
    $(".ellipse").click(function(){
        if (monster_image == 1) {
            document.getElementById("monster_circle1").src="images/ellipse-gold.svg";
            document.getElementById("monster_circle2").src="images/ellipse-white.svg";
        }
        else if (monster_image == 2) {
            document.getElementById("monster_circle1").src="images/ellipse-white.svg";
            document.getElementById("monster_circle2").src="images/ellipse-gold.svg";
        }
    });
});

// Xdiavel Carousel
var xdiavel_image = 0;
$(document).ready(function(){
    xdiavel_image = 0;
    $("#xdiavel_circle1").click(function(){
    xdiavel_image = 1;
    document.getElementById("xdiavel").src="images/xdiavel_1.png"; // Ducati. 2019. Ducati XDiavel Side Profile. Image. https://www.ducati.com/au/en/bikes/xdiavel/xdiavel.
    });
    $("#xdiavel_circle2").click(function(){
    xdiavel_image = 2;
    document.getElementById("xdiavel").src="images/xdiavel_2.png"; // Ducati. 2019. Ducati XDiavel S Side Profile. Image. https://www.ducati.com/au/en/bikes/xdiavel/xdiavel. 
    });
    $(".ellipse").click(function(){
        if (xdiavel_image == 1) {
            document.getElementById("xdiavel_circle1").src="images/ellipse-gold.svg";
            document.getElementById("xdiavel_circle2").src="images/ellipse-white.svg";
        }
        else if (xdiavel_image == 2) {
            document.getElementById("xdiavel_circle1").src="images/ellipse-white.svg";
            document.getElementById("xdiavel_circle2").src="images/ellipse-gold.svg";
        }
    });
});

// Hypermotard Carousel
var hypermotard_image = 0;
$(document).ready(function(){
    hypermotard_image = 0;
    $("#hypermotard_circle1").click(function(){
        hypermotard_image = 1;
    document.getElementById("hypermotard").src="images/hypermotard_1.png"; // Ducati. 2019. Ducati Hypermotard Side Profile. Image. https://www.ducati.com/au/en/bikes/hypermotard/hypermotard-950.
    });
    $("#hypermotard_circle2").click(function(){
        hypermotard_image = 2;
    document.getElementById("hypermotard").src="images/hypermotard_2.png"; // Ducati. 2019. Ducati Hypermotard SP Side Profile. Image. https://www.ducati.com/au/en/bikes/hypermotard/hypermotard-950.
    });
    $(".ellipse").click(function(){
        if (hypermotard_image == 1) {
            document.getElementById("hypermotard_circle1").src="images/ellipse-gold.svg";
            document.getElementById("hypermotard_circle2").src="images/ellipse-white.svg";
        }
        else if (hypermotard_image == 2) {
            document.getElementById("hypermotard_circle1").src="images/ellipse-white.svg";
            document.getElementById("hypermotard_circle2").src="images/ellipse-gold.svg";
        }
    });
});

// Panigale Gallery Carousel
$(document).ready(function(){
    panigaleGallery_image = 0;
    $("#panigale-gallery_circle1").click(function(){
        $("#centre-gallery").css("background-image", "url(./images/panigale_gallery-1.png)"); // Ducati. 2019. Ducati Panigale V4 Racing Past Camera. Image. https://www.ducati.com/au/en/bikes/panigale/panigale-v4.
        panigaleGallery_image = 1;
    });
    $("#panigale-gallery_circle2").click(function(){
        $("#centre-gallery").css("background-image", "url(./images/panigale_gallery-2.png)"); // Ducati. 2019. Ducati Panigale V4 Side Profile In Valley. Image. https://www.ducati.com/au/en/bikes/panigale/panigale-v4.
        panigaleGallery_image = 2;
    });
    $("#panigale-gallery_circle3").click(function(){
        $("#centre-gallery").css("background-image", "url(./images/panigale_gallery-3.png)"); // Ducati. 2019. Ducati Panigale V4 Racing On Track. Image. https://www.ducati.com/au/en/bikes/panigale/panigale-v4.
        panigaleGallery_image = 3;
    });
    $("#panigale-gallery_circle4").click(function(){
        $("#centre-gallery").css("background-image", "url(./images/panigale_gallery-4.png)"); // Ducati. 2019. Ducati Panigale V4 Front View Close Up. Image. https://www.ducati.com/au/en/bikes/panigale/panigale-v4.
        panigaleGallery_image = 4;
    });
    $(".ellipse").click(function(){
        if (panigaleGallery_image == 1) {
            document.getElementById("panigale-gallery_circle1").src="images/ellipse-gold.svg";
            document.getElementById("panigale-gallery_circle2").src="images/ellipse-white.svg";
            document.getElementById("panigale-gallery_circle3").src="images/ellipse-white.svg";
            document.getElementById("panigale-gallery_circle4").src="images/ellipse-white.svg";
        }
        else if (panigaleGallery_image == 2) {
            document.getElementById("panigale-gallery_circle1").src="images/ellipse-white.svg";
            document.getElementById("panigale-gallery_circle2").src="images/ellipse-gold.svg";
            document.getElementById("panigale-gallery_circle3").src="images/ellipse-white.svg";
            document.getElementById("panigale-gallery_circle4").src="images/ellipse-white.svg";
        }
        else if (panigaleGallery_image == 3) {
            document.getElementById("panigale-gallery_circle1").src="images/ellipse-white.svg";
            document.getElementById("panigale-gallery_circle2").src="images/ellipse-white.svg";
            document.getElementById("panigale-gallery_circle3").src="images/ellipse-gold.svg";
            document.getElementById("panigale-gallery_circle4").src="images/ellipse-white.svg";
        }
        else if (panigaleGallery_image == 4) {
            document.getElementById("panigale-gallery_circle1").src="images/ellipse-white.svg";
            document.getElementById("panigale-gallery_circle2").src="images/ellipse-white.svg";
            document.getElementById("panigale-gallery_circle3").src="images/ellipse-white.svg";
            document.getElementById("panigale-gallery_circle4").src="images/ellipse-gold.svg";
        }
    });
});

// monster Gallery Carousel
$(document).ready(function(){
    monsterGallery_image = 0;
    $("#monster-gallery_circle1").click(function(){
        $("#monster_centre-gallery").css("background-image", "url(./images/monster_gallery-1.png)"); // Maxabout Images. 2019. Ducati Monster 797 Riding On Road. Image. https://images.maxabout.com/bikes/ducati/monster-795/image-1960582.
        monsterGallery_image = 1;
    });
    $("#monster-gallery_circle2").click(function(){
        $("#monster_centre-gallery").css("background-image", "url(./images/monster_gallery-2.png)"); // Ducati. 2019. Ducati Monster 797 Riding On Road 2. Image. https://www.ducati.com/au/en/bikes/monster/monster-797.
        monsterGallery_image = 2;
    });
    $("#monster-gallery_circle3").click(function(){
        $("#monster_centre-gallery").css("background-image", "url(./images/monster_gallery-3.png)"); // Ducati. 2019. Ducati Monster 797 Side Profile In Front Of Rockface. Image. https://www.ducati.com/au/en/bikes/monster/monster-797. 
        monsterGallery_image = 3;
    });
    $("#monster-gallery_circle4").click(function(){
        $("#monster_centre-gallery").css("background-image", "url(./images/monster_gallery-4.png)"); // Ducati. 2019. Ducati Monster 797 Side Angle. Image. https://www.ducati.com/au/en/bikes/monster/monster-797.
        monsterGallery_image = 4;
    });
    $(".ellipse").click(function(){
        if (monsterGallery_image == 1) {
            document.getElementById("monster-gallery_circle1").src="images/ellipse-gold.svg";
            document.getElementById("monster-gallery_circle2").src="images/ellipse-white.svg";
            document.getElementById("monster-gallery_circle3").src="images/ellipse-white.svg";
            document.getElementById("monster-gallery_circle4").src="images/ellipse-white.svg";
        }
        else if (monsterGallery_image == 2) {
            document.getElementById("monster-gallery_circle1").src="images/ellipse-white.svg";
            document.getElementById("monster-gallery_circle2").src="images/ellipse-gold.svg";
            document.getElementById("monster-gallery_circle3").src="images/ellipse-white.svg";
            document.getElementById("monster-gallery_circle4").src="images/ellipse-white.svg";
        }
        else if (monsterGallery_image == 3) {
            document.getElementById("monster-gallery_circle1").src="images/ellipse-white.svg";
            document.getElementById("monster-gallery_circle2").src="images/ellipse-white.svg";
            document.getElementById("monster-gallery_circle3").src="images/ellipse-gold.svg";
            document.getElementById("monster-gallery_circle4").src="images/ellipse-white.svg";
        }
        else if (monsterGallery_image == 4) {
            document.getElementById("monster-gallery_circle1").src="images/ellipse-white.svg";
            document.getElementById("monster-gallery_circle2").src="images/ellipse-white.svg";
            document.getElementById("monster-gallery_circle3").src="images/ellipse-white.svg";
            document.getElementById("monster-gallery_circle4").src="images/ellipse-gold.svg";
        }
    });
});

// xdiavel Gallery Carousel
$(document).ready(function(){
    xdiavelGallery_image = 0;
    $("#xdiavel-gallery_circle1").click(function(){
        $("#xdiavel_centre-gallery").css("background-image", "url(./images/xdiavel_gallery-1.png)"); // Road Rider Magazine. 2019. XDiavel Riding On Road. Image. https://www.shannons.com.au/club/bike-news/ducati-xdiavel-s-the-gentleman-outlaw/. 
        xdiavelGallery_image = 1;
    });
    $("#xdiavel-gallery_circle2").click(function(){
        $("#xdiavel_centre-gallery").css("background-image", "url(./images/xdiavel_gallery-2.png)"); // Ducati. 2019. Ducati XDiavel Riding Away From Camera. Image. https://www.ducati.com/au/en/bikes/xdiavel/xdiavel. 
        xdiavelGallery_image = 2;
    });
    $("#xdiavel-gallery_circle3").click(function(){
        $("#xdiavel_centre-gallery").css("background-image", "url(./images/xdiavel_gallery-3.png)"); // Milagro. 2016. Ducati XDiavel Riding On Road. Image. https://www.motorcycle.com/manufacturer/ducati/2016-ducati-xdiavel-s-first-ride-review.html. 
        xdiavelGallery_image = 3;
    });
    $("#xdiavel-gallery_circle4").click(function(){
        $("#xdiavel_centre-gallery").css("background-image", "url(./images/xdiavel_gallery-4.png)"); // Ducati. 2019. Ducati XDiavel Riding With Girl On Back. Image. https://www.ducati.com/au/en/bikes/xdiavel/xdiavel. 
        xdiavelGallery_image = 4;
    });
    $(".ellipse").click(function(){
        if (xdiavelGallery_image == 1) {
            document.getElementById("xdiavel-gallery_circle1").src="images/ellipse-gold.svg";
            document.getElementById("xdiavel-gallery_circle2").src="images/ellipse-white.svg";
            document.getElementById("xdiavel-gallery_circle3").src="images/ellipse-white.svg";
            document.getElementById("xdiavel-gallery_circle4").src="images/ellipse-white.svg";
        }
        else if (xdiavelGallery_image == 2) {
            document.getElementById("xdiavel-gallery_circle1").src="images/ellipse-white.svg";
            document.getElementById("xdiavel-gallery_circle2").src="images/ellipse-gold.svg";
            document.getElementById("xdiavel-gallery_circle3").src="images/ellipse-white.svg";
            document.getElementById("xdiavel-gallery_circle4").src="images/ellipse-white.svg";
        }
        else if (xdiavelGallery_image == 3) {
            document.getElementById("xdiavel-gallery_circle1").src="images/ellipse-white.svg";
            document.getElementById("xdiavel-gallery_circle2").src="images/ellipse-white.svg";
            document.getElementById("xdiavel-gallery_circle3").src="images/ellipse-gold.svg";
            document.getElementById("xdiavel-gallery_circle4").src="images/ellipse-white.svg";
        }
        else if (xdiavelGallery_image == 4) {
            document.getElementById("xdiavel-gallery_circle1").src="images/ellipse-white.svg";
            document.getElementById("xdiavel-gallery_circle2").src="images/ellipse-white.svg";
            document.getElementById("xdiavel-gallery_circle3").src="images/ellipse-white.svg";
            document.getElementById("xdiavel-gallery_circle4").src="images/ellipse-gold.svg";
        }
    });
});

// hypermotard Gallery Carousel
$(document).ready(function(){
    hypermotardGallery_image = 0;
    $("#hypermotard-gallery_circle1").click(function(){
        $("#hypermotard_centre-gallery").css("background-image", "url(./images/hypermotard_gallery-1.png)"); // Ducati. 2019. Ducati Hypermotard Burnout. Image. https://www.ducati.com/au/en/bikes/hypermotard/hypermotard-950.
        hypermotardGallery_image = 1;
    });
    $("#hypermotard-gallery_circle2").click(function(){
        $("#hypermotard_centre-gallery").css("background-image", "url(./images/hypermotard_gallery-2.png)"); // Ducati. 2019. Ducati Hypermotard Kissing Girl. Image. https://www.ducati.com/au/en/bikes/hypermotard/hypermotard-950.
        hypermotardGallery_image = 2;
    });
    $("#hypermotard-gallery_circle3").click(function(){
        $("#hypermotard_centre-gallery").css("background-image", "url(./images/hypermotard_gallery-3.png)");// Ducati. 2019. Ducati Hypermotard Back Angle. Image. https://www.ducati.com/au/en/bikes/hypermotard/hypermotard-950.
        hypermotardGallery_image = 3;
    });
    $("#hypermotard-gallery_circle4").click(function(){
        $("#hypermotard_centre-gallery").css("background-image", "url(./images/hypermotard_gallery-4.png)"); // Ducati. 2019. Ducati Hypermotard Racing On Track 2. Image. https://www.ducati.com/au/en/bikes/hypermotard/hypermotard-950.
        hypermotardGallery_image = 4;
    });
    $(".ellipse").click(function(){
        if (hypermotardGallery_image == 1) {
            document.getElementById("hypermotard-gallery_circle1").src="images/ellipse-gold.svg";
            document.getElementById("hypermotard-gallery_circle2").src="images/ellipse-white.svg";
            document.getElementById("hypermotard-gallery_circle3").src="images/ellipse-white.svg";
            document.getElementById("hypermotard-gallery_circle4").src="images/ellipse-white.svg";
        }
        else if (hypermotardGallery_image == 2) {
            document.getElementById("hypermotard-gallery_circle1").src="images/ellipse-white.svg";
            document.getElementById("hypermotard-gallery_circle2").src="images/ellipse-gold.svg";
            document.getElementById("hypermotard-gallery_circle3").src="images/ellipse-white.svg";
            document.getElementById("hypermotard-gallery_circle4").src="images/ellipse-white.svg";
        }
        else if (hypermotardGallery_image == 3) {
            document.getElementById("hypermotard-gallery_circle1").src="images/ellipse-white.svg";
            document.getElementById("hypermotard-gallery_circle2").src="images/ellipse-white.svg";
            document.getElementById("hypermotard-gallery_circle3").src="images/ellipse-gold.svg";
            document.getElementById("hypermotard-gallery_circle4").src="images/ellipse-white.svg";
        }
        else if (hypermotardGallery_image == 4) {
            document.getElementById("hypermotard-gallery_circle1").src="images/ellipse-white.svg";
            document.getElementById("hypermotard-gallery_circle2").src="images/ellipse-white.svg";
            document.getElementById("hypermotard-gallery_circle3").src="images/ellipse-white.svg";
            document.getElementById("hypermotard-gallery_circle4").src="images/ellipse-gold.svg";
        }
    });
});

// Animations on Scroll
$(document).ready(function(){
    var $win = $(window);
    var home1 = $(".hero").height()/3.2; // set variable to 2/3 of the home section
    var home2 = $(".hero").height()/2.7;
    var home3 = $(".hero").height()/1.8;
    var about = $("#about").height()/1.9;
    $win.on('scroll', function(){
        var top = $win.scrollTop();
        if (top > about/3.8) {
            $("#about-body2").animate({opacity: "1"},600);
        };
        if (top > about/1.8) {
            $("#about-body3").animate({opacity: "1"},600);
        };
        if (top > about/1.1) {
            $("#about-body4").animate({opacity: "1"},600);
        };
        if (top > home1) {
            $("#footer-heading").animate({opacity: "1"},600);// when scrolling, if the scroll position is past 2/3 of the home section, animate the heading
        };
        if (top > home2) {
            $("#contact-button").animate({opacity: "1"},600);
        };
        if (top > home3) {
            $("#line1").animate({width: "75vw"},600);
            $("#container-home").animate({opacity: "1"},600);
        };
        if (top > about) {
            $("#container-about").animate({opacity: "1"},600);
            $("#about_line").animate({width: "75vw"},600);
        }
        if (top > home1) {
            $("#line2").animate({width: "75vw"},600);
        };
        if (top > home2*3) {
            $("#line3").animate({width: "75vw"},600);
        };
        if (top > home2*6.5) {
            $("#line4").animate({width: "75vw"},600);
        };
        if (top > home2*1.5) {
            $(".wrapper-2").animate({opacity: "1"},600);
            $(".wrapper-4").animate({opacity: "1"},600);
        };
        if (top > home2*4.5) {
            $(".wrapper-3").animate({opacity: "1"},600);
            $("#specs_panigale").animate({opacity: "1"},600);
            $("#specs_monster").animate({opacity: "1"},600);
            $("#specs_xdiavel").animate({opacity: "1"},600);
            $("#specs_hypermotard").animate({opacity: "1"},600);
        };
        if (top > home3*5.8) {
            $("#footer-heading2").animate({opacity: "1"},600);
        };
        if (top > home3*6) {
            $("#contact-button_main").animate({opacity: "1"},600);
        };
        if (top > home3*6.2) {
            $("#line-bottom").animate({width: "75vw"},600);
            $("#container-main").animate({opacity: "1"},600);
        };
    });
});

// Smooth Scroll
$(document).ready(function(){
    $("a[href^='#']").click(function(event){ // when an anchor tag with a href beginning with '#' is clicked
        event.preventDefault(); // prevent default scroll settings
        var section = this.hash; // set 'section' variable to selected section
    $('html, body').animate({
        scrollTop: $(section).offset().top // offset scroll position from the top of the page - relative to 'section' variable
        }, 800, 
        function(){
        window.location.hash = section; // make the url(#) = selected section/'section' variable
        });
    });
});

// Load Animation
$(document).ready(function(){
    $(".hero").animate({opacity: "1"},600);
});

// Models Dropdown 
$(document).ready(function(){
    $("#dropdown").mouseenter(function(){
        $("#dropdown").addClass("dropdown");
        $(".dropdown-text").css("display", "grid");
    });
    $("#dropdown").mouseleave(function(){
        $("#dropdown").removeClass("dropdown");
        $(".dropdown-text").css("display", "none");
    });
});

// Audio Buttons
var panigaleRev = new Audio(); 
panigaleRev.src = "audio/panigale-rev.mp3"
var monsterRev = new Audio(); 
monsterRev.src = "audio/monster-rev.mp3"
var xdiavelRev = new Audio(); 
xdiavelRev.src = "audio/xdiavel-rev.mp3"
var hypermotardRev = new Audio(); 
hypermotardRev.src = "audio/hypermotard-rev.mp3"
$(document).ready(function(){
    $("#panigale-audio").click(function(){
        panigaleRev.play();
    });$("#monster-audio").click(function(){
        monsterRev.play();
    });
    $("#xdiavel-audio").click(function(){
        xdiavelRev.play();
    });
    $("#hypermotard-audio").click(function(){
        hypermotardRev.play();
    });
});
