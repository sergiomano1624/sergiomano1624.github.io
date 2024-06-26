/* Theme Name: Rezareo - Personal Portfolio HTML5 Template
   Author: Themes Studio
   Version: 1.0.1
   File Description: Main JS file of the template
*/

(function ($) {
  ("use strict");

  /*=============================================
	=    		 Preloader			      =
=============================================*/
  function preloader() {
    $("#preloader").delay(0).fadeOut();
  }

  $(window).on("load", function () {
    preloader();
  });

  /*=============================================
	=        Mouse Active          =
=============================================*/
  $(".slider-drag").on("mouseenter", function () {
    $(".mouseCursor").addClass("cursor-big");
  });
  $(".slider-drag").on("mouseleave", function () {
    $(".mouseCursor").removeClass("cursor-big");
  });

  $("a,.sub-menu,button").on("mouseenter", function () {
    $(".mouseCursor").addClass("opacity-0");
  });
  $("a,.sub-menu,button").on("mouseleave", function () {
    $(".mouseCursor").removeClass("opacity-0");
  });

  // Mouse Custom Cursor
  function itCursor() {
    var myCursor = jQuery(".mouseCursor");
    if (myCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
            ($(this).is("a", "button") &&
              $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
              t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  }
  itCursor();

  /*=============================================
	=    		Mobile Menu			      =
=============================================*/
  // side-bar
  $(".bar").on("click", function () {
    $(".btn-menu-main, body").addClass("btn-menu-main-right");
  });

  $(".cross").on("click", function () {
    $(".btn-menu-main, body").removeClass("btn-menu-main-right");
  });

  $(".nav-link").on("click", function () {
    $(".btn-menu-main, body").removeClass("btn-menu-main-right");
  });

  $(".menu-backdrop").on("click", function () {
    $(".btn-menu-main, body").removeClass("btn-menu-main-right");
  });

  /*=============================================
	=    5. Single Page Nav Menu Active      =
=============================================*/
  let sections = document.querySelectorAll("section.is-actv");
  let navLinks = document.querySelectorAll("header nav ul li a");
  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("is-current");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("is-current");
        });
      }
    });
  };

  /*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header-sticky").removeClass("sticky");
      $(".scroll-to-target").removeClass("open");
    } else {
      $(".header-sticky").addClass("sticky");
      $(".scroll-to-target").addClass("open");
    }
  });

  /*=============================================
	=    		 Scroll Up  	         =
=============================================*/
  if ($(".scroll-to-target").length) {
    $(".scroll-to-target").on("click", function () {
      var target = $(this).attr("data-target");
      // animate
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );
    });
  }

  /*=============================================
	=    		Button Effect  	         =
=============================================*/
  $(".btn")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find("span").css({ top: relY, left: relX });
    });

  /*=============================================
	=    		Animation Text Effect      =
=============================================*/
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // Inject CSS
    var css = document.createElement("style");
    HTMLStyleElement.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
    document.body.appendChild(css);
  };

  /*=============================================
	=    		Odometer Active  	       =
=============================================*/
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  /*=============================================
	=    		Skill Pregress Bar	       =
=============================================*/
  var firstScrolled = document.getElementById("skill");
  var fired = 0;

  $(window).on("scroll", function () {
    if (
      document.documentElement.scrollTop >= 2620 &&
      firstScrolled &&
      fired === 0
    ) {
      myFunction();
      fired = 1;
    }
  });

  function myFunction() {
    let options = {
      startAngle: -1.55,
      value: 0.94,
      size: 150,
      fill: {
        gradient: ["#1B9A81", "#1B9A81"],
      },
    };
    $(".skill_circle .skill_bar")
      .circleProgress(options)
      .on("circle-animation-progress", function (event, progress, stepValue) {
        $(this)
          .parent()
          .find("span")
          .text(String(stepValue.toFixed(2).substr(2)) + "%");
      });
    $(".sketch .skill_bar").circleProgress({
      value: 0.75,
    });
    $(".xd .skill_bar").circleProgress({
      value: 0.85,
    });
    $(".photoshop .skill_bar").circleProgress({
      value: 0.92,
    });
    $(".illustrator .skill_bar").circleProgress({
      value: 0.88,
    });
    $(".invision .skill_bar").circleProgress({
      value: 0.72,
    });
  }

  /*=============================================
	=        Testimonial Active		      =
=============================================*/
  $(".testimonial-active").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: true,
    prevArrow:
      '<span class="testimonial-prev-arrow"><i class="fas fa-chevron-left"></i></span>',
    nextArrow:
      '<span class="testimonial-next-arrow"><i class="fas fa-chevron-right"></i></span>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  /*=============================================
	=        Client Active		      =
=============================================*/
  $(".client-active").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });

  /*=============================================
	=    		Magnific Popup		      =
=============================================*/
  /* magnificPopup image view */
  $(".popup-img").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  /*=============================================
	=    		AOS Animation		      =
=============================================*/
  AOS.init();
})(jQuery);
