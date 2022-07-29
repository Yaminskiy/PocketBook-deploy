$(document).ready(function () {

    $('.carousel').owlCarousel({
      loop:true,
      margin:30,
      nav:false,
      dots: false,
      navText: [],
      autoplay: true,
      responsive:{
        0:{
          items: 1
        },
        480:{
          items: 2
        },
        680: {
          items: 3
        },
        1024: {
          items: 4
        }
      }
    });

});