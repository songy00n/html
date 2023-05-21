$(document).ready(function(){
    $(menu).on('click', function(){
        $('header nav, dim').fadeIn();
        $('header nav a:first').focus();

    });
    $('dim, header .alarm').on('click', function(){
        $('header nav, dim').fadeOut();
    });
    $('.lnb li:last a', function(){
        $('header nav, dim').fadeOut(300);
        $('.menu').focus();    
    });
});