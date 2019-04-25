/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	$(document).ready(main);
	function main () {
	  $(window).scroll(function(){
	    var window_y = $(window).scrollTop();
	    var scroll_critical = parseInt($("#header-menu").height());
	    if( !isMobile.any() ){
	      if (window_y > scroll_critical) {
	        $("#header-menu").addClass("menuJS");
	        $("header nav").addClass("navJS");
	        $("main img").addClass("menu_top");
	        $(".header__redes").css("display","none");
	      } else if(window_y <= scroll_critical) {
	        $("#header-menu").removeClass("menuJS");
	        $("header nav").removeClass("navJS");
	        $("main img").removeClass("menu_top");
	        $(".header__redes").css("display","flex");
	      }
	    }
	  })
	}

	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};

	$().ready(function(){
	  $('.slick-carousel').slick({
	    arrows: true,
	    dots: false,
	    slidesToShow: 3,
	    infinite: true,
	    prevArrow: "<img src='images/arrow_left.png' class='arrow_left'>",
	    nextArrow: "<img src='images/arrow_right.png' class='arrow_right'>",
	    responsive: [
	      {
	        breakpoint: 960,
	        settings: {
	          slidesToShow: 2,
	          slidesToScroll: 2
	        }
	      },
	      {
	        breakpoint: 640,
	        settings: {
	          slidesToShow: 1,
	          slidesToScroll: 1,
	          dots: true
	        }
	      }
	    ]
	  });
	});

	$ (function () {
	  jcf.replaceAll ();
	});


	var Navegador, browser, form, txtCelular, txtDni, txtEmail, txtNombre, txtCompany, txtPosition, util, utilities, validateForm, validateGeneral;

	Navegador = __webpack_require__(1);
	validateForm = __webpack_require__(2);
	utilities = __webpack_require__(3);

	validateGeneral = new validateForm;
	browser = new Navegador;
	util = new utilities;



	/* Validación de formulario */

	form = document.getElementById("form");
	txtNombre = document.getElementsByName("name");
	txtDni = document.getElementsByName("document");
	txtEmail = document.getElementsByName("email");
	txtCelular = document.getElementsByName("phone");
	txtCompany = document.getElementsByName("company");
	txtPosition = document.getElementsByName("position");


	validateGeneral.isValidate(txtNombre, 'text');
	validateGeneral.isValidate(txtDni, 'numeric');
	validateGeneral.isValidate(txtEmail, 'email');
	validateGeneral.isValidate(txtCelular, 'numeric');
	validateGeneral.isValidate(txtCompany, 'text');
	validateGeneral.isValidate(txtPosition, 'text');

	$(form).validate({
	  rules: {
	    name: {
	      required: true,
	      rangelength: [2, 150]
	    },
	    document: {
	      required: true,
	      min: 1,
	      rangelength: [8, 8]
	    },
	    email: {
	      required: true,
	      emailCustom: true
	    },
	    phone: {
	      required: true,
	      min: 1,
	      valphone: true
	    },
	    company:{
	      required: true,
	      rangelength: [2, 150]
	    },
	    position:{
	      required: true,
	      rangelength: [2, 150]
	    }
	  },
	  messages: {
	    name: {
	      required: 'Ingresa un Nombre(s)',
	      rangelength: 'Ingresa un Nombre(s)'
	    },
	    document: {
	      required: 'Ingrese DNI',
	      min: 'Ingrese un DNI válido',
	      rangelength: 'Debe ingresar 8 dígitos'
	    },
	    email: {
	      required: 'Ingresa un Correo',
	      emailCustom: 'Ingresa un Correo válido'
	    },
	    phone: {
	      required: 'Ingresa un Número celular',
	      min: 'Ingresa un Número celular',
	      valphone: 'Ingresa un Celular válido'
	    },
	    company: {
	      required: 'Ingresa nombre de la empresa',
	      rangelength: 'Ingresa nombre de la empresa'
	    },
	    position: {
	      required: 'Ingresa tu cargo',
	      rangelength: 'Ingresa tu cargo'
	    }


	  },
	  errorPlacement: function(error, element) {
	    var $element, type;
	    $element = $(element);
	    type = $element.prop("type").toLowerCase();
	    if (type === "checkbox") {
	      return $element.parents(".checkWrapper").append(error);
	    } else {
	      return $(element).parent().append(error);
	    }
	  },
	  highlight: function(element) {
	    var $element;
	    $element = $(element).parent();
	    $element.addClass('error');
	  },
	  unhighlight: function(element) {
	    var $element;
	    $element = $(element).parent();
	    return $element.removeClass('error');
	  }
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	/**
	 * Validador de navegador y versiĆ³n
	 * @modulo libs/browser
	 */
	var Browser = function() {
	  var os = {},
	      userAgent = navigator.userAgent;

	  os.webkit  = (userAgent.match(/WebKit\/([\d.]+)/) ? true : false);
	  os.android = (userAgent.match(/(Android)\s+([\d.]+)/) ? true : false);
	  os.mobile  = (os.android && userAgent.match(/Mobile/i) ? true : false);
	  os.tablet  = (os.android && !userAgent.match(/Mobile/i) ? true : false);
	  os.ipad    = (userAgent.match(/(iPad).*OS\s([\d_]+)/) ? true : false);
	  os.iphone  = (!os.ipad && userAgent.match(/(iPhone\sOS)\s([\d_]+)/) ? true : false);
	  os.ios8    = ((os.ipad || os.iphone) && userAgent.match(/8_/) ? true : false);
	  os.ios     = os.ipad || os.iphone;
	  os.wp      = (userAgent.match(/Windows Phone/i) ? true : false);
	  os.chrome  = (userAgent.match(/Chrome/) ? true : false);
	  os.opera   = (userAgent.match(/Opera/) ? true : false);
	  os.ie11    = (userAgent.match(/MSIE 11.0/i) || userAgent.match(/Trident\/7/i) ? true : false);
	  os.ie10    = (userAgent.match(/MSIE 10.0/i) || userAgent.match(/Trident\/6/i) ? true : false);
	  os.ie9     = (userAgent.match(/MSIE 9.0/i) || userAgent.match(/Trident\/5/i) ? true : false);
	  os.ie8     = (userAgent.match(/MSIE 8.0/i) || userAgent.match(/Trident\/4/i) ? true : false);
	  os.ie      = os.ie9 || os.ie10 || os.ie11;

	  /**
	   * Verifica el navegador y su versión según el parámetro browser
	   *
	   * @method  isVersion
	   * @param   {String}   browser   Tipo de navegador
	   * @returns {Boolean}
	   */
	  this.isVersion = function ( browser ) {
	      return os[browser];
	  }
	};

	module.exports = Browser;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	var validateFormGeneral = function() {
	  var blacklist = 'ºÂ¡Â°!$%^&*()+=[]\\;Â´,/{}|":<>?~`¢∞“”≠ª·÷»¿«\u2764\u2713\u2600\u2605\u2602\u265E\u262F\u262D\u2622\u20AC\u260E\u221E\u2744\u266B\u20BD\u00A3\u00A4\u00A5\u00A6\u00A7\u00A8\u00A9\u00AA\u00AB\u00BB\u00AC\u00AE\u00AF\u00B0\u00B1\u00B5\u00B6\u00B7\u00BA\u00D7\u00C0\u00C1\u00C2\u00C3\u00C4\u00C5\u00C6\u00C7\u00C8\u00C9\u00CA\u00CB\u2620\u2621\u2622\u2623\u2624\u2625\u2626\u2627\u2628\u2629\u262A\u262B\u262C\u262D\u262F\u2630\u2631\u2632\u2633\u2634\u2635\u2636\u2637\u2638\u2639\u263a\u263b\u263c\u263d\u263e\u263f\u2640\u2641\u2642\u2643\u2644\u2645\u2646\u2647\u2648\u2649\u264A\u264B\u264C\u264D\u264F\u2650\u2651\u2652\u2653\u2654\u2655\u2656\u2657\u2658\u2659\u265a\u265b\u265c\u265d\u265e\u265f\u2664\u2661\uFFE5\uFFE6\uFFED\u00D7\u20A9\u2022\u2023\u2024\u2025\u2026\u2027\u2028\u2029\u2032\u2033\u2034\u2035\u2036\u2037\u2038\u2039\u203A\u203B\u203C\u203D\u203E\u203F\u220F\u0060\u007e\u005c\u007c\u003c\u003e\u007b\u007d\u005b\u005d\u2667\u2662\u2661\u2664\u25a0\u25a1\u25cf\u25cb\u2022\u00b0\u2606\u25aa\u00a4\u300a\u300b\u00a5\u20a9\u2665\u2299';

	  $.validator.addMethod('emailCustom', function(value, element) {
	    return this.optional(element) || /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(value);
	  }, '');
	  $.validator.addMethod('ruc', (function(value, element) {
	    return this.optional(element) || /(^1|2)+0[0-9]{9}$/i.test(value);
	  }), '');
	  $.validator.addMethod('ccdate', (function(value, element) {
	    return this.optional(element) || /^(\d{2})\/(\d){2}$/i.test(value);
	  }), '');
	  $.validator.addMethod('valphone', function(value, element) {
	    return this.optional(element) || /^9+[0-9]{8}/.test(value);
	  }, '');
	  $.validator.addMethod('valname', function(value, element) {
	    return this.optional(element) || /^[A-Za-z]+(\s[A-Za-z]+){0,2}$/.test(value);
	  }, '');
	  $.validator.addMethod('urlFacebook', function(value, element) {
	    return this.optional(element) || /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/.test(value);
	  }, '');
	  $.validator.addMethod('urlYoutube', function(value, element) {
	    return this.optional(element) || /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/.test(value);
	  }, '');

	  this.isValidate = function(eleToFilter, filterType){
	    switch (filterType) {
	      case 'numeric':
	        $(eleToFilter).numeric({
	          allowPlus: false,
	          allowMinus: false,
	          allowDecSep: false,
	          allowThouSep: false,
	          allowNumeric: true,
	          min: 0
	        });
	        break;
	      case 'text':
	        $(eleToFilter).alpha({
	          allow: '\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1\u00FC\u00DC',
	          disallow: blacklist + '@-_.'
	        });
	        break;
	      case 'codepack':
	        $(eleToFilter).alphanum({
	          allowSpace: false,
	          disallow: blacklist
	        });
	        break;
	      case 'urlOnly':
	        $(eleToFilter).alphanum({
	          allowSpace: true,
	          allow: ':/-_.?!$%&()+=[];',
	          disallow: blacklist
	        });
	        break;
	      case 'email':
	        $(eleToFilter).alphanum({
	          allow: '@-_.',
	          allowSpace: false,
	          disallow: blacklist
	        });
	    }
	  }
	};

	module.exports = validateFormGeneral;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	var utilities = function() {
	  var iswebkit = (navigator.userAgent.match(/WebKit\/([\d.]+)/) ? true : false);
	  function animateToTop(event, time) {
	    event.preventDefault();
	    var scrollToTop = window.setInterval(function() {
	        var pos = window.pageYOffset;
	        if ( pos > 0 ) {
	            window.scrollTo( 0, pos - 20 );
	        } else {
	            window.clearInterval( scrollToTop );
	        }
	    }, time);
	  };


	  this.tabsNew = function(ptab, ctab) {
	    var pestana = $(ptab);
	    var container = $(ctab);
	    pestana.on('click', function(e) {
	      var i;
	      e.preventDefault();
	      i = $(this).index();
	      pestana.removeClass('active');
	      $(this).addClass('active');
	      container.css('display', 'none');
	      container.eq(i).fadeIn('1000');
	    });
	    pestana.eq(0).trigger("click");
	  };

	  this.topScroll = function(element){
	    el = document.querySelector(element);
	    el.addEventListener('click', function(event){
	      animateToTop(event, 10)
	    },false);
	  }

	  this.scrollElement = function(el,contain,time,callback){
	    var menuLink = $(el);
	    var boxContent = $(contain);
	    var scrollElem='html';
	    menuLink.on('click', function(e){
	      e.preventDefault();
	      var $this = this;
	      menuLink.removeClass('active');
	      boxContent.removeClass('active');
	      var $dataId = $this.getAttribute("data-id");
	      var elBlock = document.getElementById($dataId);
	      $this.classList.add('active');
	      elBlock.classList.add("active");
	      //animate body for webkit browsers that don't support html animation
	      if(iswebkit){
	        scrollElem='body';
	      }
	      $(scrollElem).animate({
	        scrollTop: $("#"+$dataId).offset().top
	      }, time, function(){
	        if (callback) {
	          callback();
	        }
	      });
	    });
	  }

	  this.getParameterByName = function(name){
	    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
	        results = regex.exec(location.search);
	    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	  }

	  this.accordion = function(elItem, init, finish) {
	    var classAccordion = document.getElementsByClassName(elItem);
	    var i;
	    for (i = 0; i < classAccordion.length; i++) {
	      classAccordion[i].onclick = function() {
	        this.classList.toggle("active");
	        var panel = this.nextElementSibling;
	        if (panel.style.height){
	          panel.style.height = null;
	          if (finish) {
	            finish();
	          }
	        } else {
	          panel.style.height = panel.scrollHeight + 'px';
	          if (init) {
	            init();
	          }
	        }
	      }
	    }
	  }
	};
	module.exports = utilities;




/***/ })
/******/ ]);