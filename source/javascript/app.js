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

Navegador = require('./libs/browser.js');
validateForm = require('./libs/validateForm.js');
utilities = require('./libs/utilities.js');

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