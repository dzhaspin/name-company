$(document).ready(function () {

  $(".toggle").click(function () {
    // $(this).toggleClass("toggle-active");
    $('.header__menu').toggleClass('header-active');
  });

  $(document).mouseup(function (e) {
    var menu = $('.menu__block');
    if (e.target != menu[0] && menu.has(e.target).length === 0) {
        $(".header__menu").removeClass("header-active");
    }
  });

  $(".menu-close span").click(function () {
    $('.header__menu').removeClass('header-active');
  });

  $(".search-icon").click(function () {
    $(".search-box__wrap").fadeToggle("active");
    $(this).closest("body").toggleClass("active");
    $("input[type='search']").focus();
  });

  $('.main__slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    appendArrows: $('.main__arrows .container'),
    speed: 1000,
    responsive: [{
      breakpoint: 480,
      settings: {
        arrows: false
      }
    }]
  });

  $('.offer__slide').slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    appendArrows: $('.offer__arrows'),
    // autoplay:true,
    // autoplaySpeed:800,
    speed: 1000,
    responsive: [{
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  // Popup open
  $('.callback-link').click(function () {
    $('.js-overlay-campaign').fadeIn();
    $('.js-overlay-campaign').addClass('disabled');
  });
  // close Х
  $('.js-close-campaign').click(function () {
    $('.js-overlay-campaign').fadeOut();

  });
  // close on click windows
  $(document).mouseup(function (e) {
    var popup = $('.js-popup-campaign');
    if (e.target != popup[0] && popup.has(e.target).length === 0) {
      $('.js-overlay-campaign').fadeOut();
    }
  });

  //CHECK
  $.each($('.check'), function (index, val) {
    if ($(this).find('input').prop('checked') == true) {
      $(this).addClass('active');
    }
  });
  $('body').off('click', '.check', function (event) {});
  $('body').on('click', '.check', function (event) {
    if (!$(this).hasClass('disable')) {
      var target = $(event.target);
      if (!target.is("a")) {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
          $(this).find('input').prop('checked', true);
        } else {
          $(this).find('input').prop('checked', false);
        }
      }
    }
  });

  // up scroll--------------
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) { //crollTop-1000px
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 700); //speed
  });

  // spoller--------------
  $.each($('.spoller.active'), function (index, val) {
    $(this).next().show();
  });
  $('body').on('click', '.spoller', function (event) {
    if ($(this).hasClass('mob') && !isMobile.any()) {
      return false;
    }
    if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
      $.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
        $(this).removeClass('active');
        $(this).next().slideUp(300);
      });
    }
    $(this).toggleClass('active').next().slideToggle(300, function (index, val) {
      if ($(this).parent().find('.slick-slider').length > 0) {
        $(this).parent().find('.slick-slider').slick('setPosition');
      }
    });
    return false;
  });

  // header add header-scroll
  sectors($(this).scrollTop());
  $(window).scroll(function(event) {
      var scr=$(this).scrollTop();
    sectors(scr);
  });
  function sectors(scr){
      var w=$(window).outerWidth();
      var h=$(window).outerHeight();
      var headerheight=80;
    if(w<768){headerheight=50;}
    if(scr>0){
      $('header').addClass('header-scroll');
    }else{
      $('header').removeClass('header-scroll');
    }
    if(scr>h){
      $('#up').fadeIn(300);
    }else{
      $('#up').fadeOut(300);
    }
  }

});