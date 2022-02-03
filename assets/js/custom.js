// NAVIGATION
initializeStellarNav(1, '#main-nav');
function initializeStellarNav(index, element) {
  $(element).stellarNav({
    breakpoint: 1024,
    position: 'left'
  });
}

// Home Page Categories Toogle
$(document).ready(function(){
  $(".homecategories").click(function(){
    $(".homecategories-listing").toggle();
  });
});

//showandhide-sidebar-home-page
$(document).ready(function(){
  $('.head-wrap').click(function(){
    $('.inner-category-listing').fadeToggle();
    //  $('.category-listing').toggle();
  });
});


// INDEX SECTION 1 SLIDER JS
$('.indexSec1-slider').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
  }
});

// INDEX SECTION 1 SLIDER JS
$('.Sec7-slider').owlCarousel({
  loop:true,
  margin:20,
  nav:false,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:6
    },
    1400: {
      items:6
    },
  }
});


//PRODUCT QUANTITY SELECT INPUT
$(document).ready(function(){
    $('.count').prop('disabled', false);
    $(document).on('click','.plus',function(){
       $(this).siblings('.count').val(parseInt($(this).siblings('.count').val()) + 1 );
   });
    $(document).on('click','.minus',function(){
      $(this).siblings('.count').val(parseInt($(this).siblings('.count').val()) - 1 );
      if ($(this).siblings('.count').val() == 0) {
        $(this).siblings('.count').val(1);
        }
    });
});

// Swiper-1 js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1600: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1680: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  }
});
// Team Swiper
var swiper = new Swiper(".myteamSwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  // autoplay: true,
  loop: true,
  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
  },
});

// Testimonial slider
var swiper = new Swiper(".mySwipertestimonial", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});