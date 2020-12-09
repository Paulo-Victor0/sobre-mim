var page = $('body');
$('nav a').click(function(){
    page.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});