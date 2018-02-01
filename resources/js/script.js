// run this code after the document has been loaded
$(document).ready(function() {
    // ------------- SITCKY NAVIGATION - used plugin waypoint to achieve that! ----------------
    // select a section nr 1 */
    // direction - scts like a detection if the user is scrolling down or up
    $(".js-section-features").waypoint(function(direction) {
        if(direction === "down") {
            //if the user scrolls down then add the sticky class to the nav tag
            $("nav").addClass("sticky");
        }
        else {
            // if the user scrolls up then remove the sticky class from the nav tag
            $("nav").removeClass("sticky");
        }
    }, {
        // add the sticky class 50px before it hits the section-features
        offset: "50px;"
    });

    // ---------------- SCROLL BUTTONS ----------------
    // target full button
    $(".js-scroll-to-plan").click(function (){
        //trigger animation scroll. Pick inside scrollTop where we want to go to, set an offset and how fast it should go
       $("html, body").animate({scrollTop: $(".js-section-plans").offset().top}, 1000);
    });
    // target ghost button
    $(".js-scroll-to-start").click(function(){
        $("html, body").animate({scrollTop: $(".js-section-features").offset().top}, 1000);
    });

    // ------------------- SCROLL NAVIGATION -----------------
    // target cake delivery link
    $(".js-cake-delivery").click(function(){
        $("html, body").animate({ scrollTop: $(".js-section-features").offset().top}, 1000);

    });
    //target how it works link
    $(".js-how-it-works").click(function(){
        $("html, body").animate({ scrollTop: $(".js-section-steps").offset().top}, 1000);

    });
    // target our cities link
    $(".js-our-cities").click(function(){
        $("html, body").animate({ scrollTop: $(".js-section-cities").offset().top}, 1000);
    });
    // target sing up link
    $(".js-sign-up").click(function(){
        $("html, body").animate({ scrollTop: $(".js-section-plans").offset().top}, 1000);
    });

	// ---------- SCROLL STICKY LOGO --------
	$(".js-logo-black").click(function(){
		$("html, body").animate({ scrollTop: $("header").offset().top}, 1000);
	});

	// ----------------- ANIAMATION ON SCROLL ---------------
	$(".js-wp-1").waypoint(function(){
		// fade in this row
		$(".js-wp-1").addClass("animated fadeIn");
	}, {
		// animate when the user is in the middle of this section
		offset: "50%"
	});

	$(".js-wp-2").waypoint(function(){
	// fade in this row
	$(".js-wp-2").addClass("animated fadeInUp");
	}, {
		// animate when the user is in the middle of this section
		offset: "50%"
	});


	$(".js-wp-3").waypoint(function(){
	// fade in this row
	$(".js-wp-3").addClass("animated fadeIn");
	}, {
		// animate when the user is in the middle of this section
		offset: "50%"
	});


	$(".js-wp-4").waypoint(function(){
	// fade in this row
	$(".js-wp-4").addClass("animated pulse");
	}, {
		// animate when the user is in the middle of this section
		offset: "50%"
	});

	/* --------- MOBILE NAVIGATION - hamburger-------------- */
	$('.js-nav-icon').click(function() {
		var nav = $('.js-main-nav');
		var icon = $('.js-nav-icon i');
		// open and close the hamburger
		nav.slideToggle(200);
		// change hamburger into cross
		if(icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close');
			icon.removeClass('ion-navicon-round');
		}
		else { // change cross into hamburger
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close');
		}

	});

	/* Google Map */
    var map = new GMaps({
      div: '.map',
      lat: 40.6971494,
      lng: -72.3,
      zoom: 8
    });

    map.addMarker({
      lat: 40.6971494,
      lng: -74.2598655,
      title: 'New York',
      infoWindow: {
          content: '<p>Our New York HQ</p>'
        }
    });
});