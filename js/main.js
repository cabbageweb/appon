$('.home_slider').slick({ slidesToShow: 1, slidesToScroll: 1, dots: true, autoplay: true, arrows:false, autoplaySpeed: 2000, dotsClass: 'home-dots', pauseOnFocus: false, infinite: true, pauseOnHover: false, fade: true, speed: 4000, }); $(".home-dots li button").text(""); $('.screen_slider').slick({ slidesToShow: 5, slidesToScroll: 1, centerPadding:0, dots: true, centerMode: true, autoplay: true, arrows:false, autoplaySpeed: 2000, dotsClass: 'screen-dots', pauseOnFocus: false, infinite: true, pauseOnHover: false, }); $(".screen-dots li button").text(""); $("#video_modal").on('hidden.bs.modal', function (e) { $("#video_modal iframe").attr("src", $("#video_modal iframe").attr("src")); }); $('.team_slider').slick({ slidesToShow: 3, slidesToScroll: 1, centerPadding:0, dots: false, centerMode: true, autoplay: true, arrows:false, autoplaySpeed: 2000, pauseOnFocus: false, infinite:true, }); $('.feedback_for').slick({ slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, asNavFor: '.feedback_nav' }); $('.feedback_nav').slick({ slidesToShow: 3, slidesToScroll: 1, asNavFor: '.feedback_for', dots: true, arrows:false, centerMode: true, centerPadding: 0, focusOnSelect: true, focusOnSelect: true, infinite: true, autoplay: true, autoplaySpeed: 2000, pauseOnFocus: false, dotsClass: 'feedback-dots', }); $(".feedback-dots li button").text(""); $(window).scroll(function () { if ($(this).scrollTop() > 20) { $('.header_wraper').addClass("sticky_nav"); } else { $('.header_wraper').removeClass("sticky_nav"); } }); $('.appon_nav').onePageNav({ currentClass: 'active', changeHash: true, scrollSpeed: 0, });