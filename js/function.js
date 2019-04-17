var $li=$('.img-list').find('> li'),
    $links=$li.find('> a'),
    $lightbox= $('.lightbox'),
    $overlay = $('.overlay'),
    $prev = $('.prev'),
    $next = $('.next'),
    liIndex,
    targetImg;

$links.click(function(event){
    event.preventDefault();
    targetImg = $(this).attr('href');
    $lightbox.find('img').attr('src', targetImg);
    $lightbox.fadeIn();
});

$overlay.click(function(){
    $lightbox.fadeOut();
});