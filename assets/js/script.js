$('.menu-icon').on('click', function(){
    $('.menu-icon, .menu, header').toggleClass("active");
    $('body').toggleClass("overlay");
  })
  
  $(document).click(function(e) {
    if (!$(e.target).hasClass("active") &&
        $(e.target).parents(".site-nav").length === 0) {
          $('.menu-icon, .menu, header').removeClass("active");
          $('body').removeClass("overlay");
    }
  });
  $('.menu-item').on('click', function(){
    $('.menu-icon, .menu, header').removeClass("active");
    $('body').removeClass("overlay");
  })

$(document).ready(function () {
    $('.fsc__slider').slick({
        dots: true,
        appendArrows: ".fsc__container-arrow",
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
}
            } 
        ]
    });
});