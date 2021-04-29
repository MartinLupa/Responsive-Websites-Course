/*Changing element class when scrolling the screen*/

let scrollpos = window.scrollY
const header = document.querySelector("nav")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("sticky")
const remove_class_on_scroll = () => header.classList.remove("sticky")

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll()
  } else {
    remove_class_on_scroll()
  }

  console.log(scrollpos)

})

/* Code suggested by the course. Ended up using different one to practice */
/*$(document).ready(function() {
  $(".js--section-features").waypoint(function(direction) { /* Direction function detects scrolling down or up*/
/*    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });
});*/

/* Scroll to sections */
$(document).ready(function() {
  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate({
      scrollTop: $('.js--section-plans').offset().top
    }, 1000);
  });

  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({
      scrollTop: $('.js--section-features').offset().top
    }, 1000);
  });


  /* Navigation scroll */

  $(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  /* Animations on scroll */

  $(".js--wp-1").waypoint(function(direction) {
    $(".js--wp-1").addClass("animated fadeIn");
  }, {
    offset: "50%"
    /*If the offset is not defined, the animation only starts when the row element is reached. This generates a late response of the animation. To avoid that, offset is used. */
  });

  /* iPhone animation */
  $(".js--wp-2").waypoint(function(direction) {
    $(".js--wp-2").addClass("animated fadeInLeft");
  }, {
    offset: "50%"
  });

  $(".js--wp-3").waypoint(function(direction) {
    $(".js--wp-3").addClass("animated fadeIn");
  }, {
    offset: "50%"
  });

  $(".js--wp-3").waypoint(function(direction) {
    $(".js--wp-3").addClass("animated pulse");
  }, {
    offset: "50%"
  });

  /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

});
