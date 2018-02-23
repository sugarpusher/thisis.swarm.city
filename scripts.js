

$(document).ready(function(){  

  // $("body").scrollspy({target: ".navbar", offset:220});

  // ====================================
  // SMOOTH SCROLL MENU
  // ====================================

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });

  // ====================================
  // CHANGE LINK TEXT WHEN CLICKED (SHOW MORE/SHOW LESS)
  // ====================================

  $("a.more").click(function () {
    var more = $(this).attr("moretext");
    if (typeof more !== typeof undefined && more !== false) {
      // console.log(more); 
      $(this).text(function(i, text){
          return text === "show less" ? more : "show less";
      })
    }
   });

  // ====================================
  // "WHO" SECTION SLACK REQUEST FORM
  // ====================================

  $(function() {
    // Get the form.
    var form = $('#slackForm');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(event) {
      // Stop the browser from submitting the form.
      event.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
          type: 'POST',
          url: $(form).attr('action'),
          data: formData
      })
      .done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#requestEmailAddress').val('');
        $('#voucherHandle').val('');

        // Hide the form
        $(form).hide();
      })
      .fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        // Set the message text.
        if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
        } else {
            $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
      });
    });
  });

  // ====================================
  // "WHO" SECTION SLIDER INITIALIZER
  // ====================================

  $('.slider-who').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    centerMode: false,
    autoplaySpeed: 5000,
    mobileFirst: true,
    prevArrow: "<i class='fa fa-angle-left slick-prev' aria-hidden='true'></i>",
    nextArrow: "<i class='fa fa-angle-right slick-next' aria-hidden='true'></i>"
    ,
    responsive: [
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 3
      }
    }
    ,
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 4
      }
    }
    ,
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5
      }
    }
    ,
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 7
      }
    }
  ]
  });

  // ====================================
  // "WHEN" SECTION SLIDER INITIALIZER
  // ====================================

  $('.slider-when').slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    centerMode: false,
    autoplaySpeed: 5000,
    // asNavFor: ".slider-bottom",
    prevArrow: "<i class='fa fa-angle-left slick-prev' aria-hidden='true'></i>",
    nextArrow: "<i class='fa fa-angle-right slick-next' aria-hidden='true'></i>"
  });

  

});

