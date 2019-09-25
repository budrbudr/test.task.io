$(".slider").slick({
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    dotsClass: "my-dots",
});

$('.nav-block__button').click(function () {
    $('header, main').css('filter', 'blur(5px)');
    $('.overlay').fadeIn().addClass('disabled');

});

$('.close-popup').click(function () {
    $('.overlay').fadeOut();
    $('header, main').css('filter','none');
});


///send massage
/*
$("#send-form").submit(function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "send_form.php",
        data: $("#send-form").serialize(),
        success: function(data) {
            $("#wdh_result_form").html(data);
        }
    });
});*/
