(function($) {
  var $li = $('.img-list').find('> li'),
      $links = $li.find('> a'),
      $lightbox = $('.lightbox'),
      $next = $('.next'),
      $prev = $('.prev'),
      $overlay = $('.overlay'),
      liIndex,
      targetImg;
  
  //preload images
  var imgSources = [
    "imgFolder/scheme/Схема 1.jpg",
    "imgFolder/scheme/Схема 2.jpg",
    "imgFolder/scheme/Схема 3.jpg",
     "imgFolder/scheme/Схема 4.jpg",
    "imgFolder/scheme/Схема 5.jpg",
     "imgFolder/scheme/Схема 6.jpg",
    "imgFolder/scheme/Схема 7.jpg",
    "imgFolder/scheme/Схема 8.jpg",
     "imgFolder/scheme/Схема 9.jpg",
    "imgFolder/scheme/Схема 10.jpg" ,                                        
    "imgFolder/scheme/Схема 11.jpg",
     "imgFolder/scheme/Схема 12.jpg",
   "imgFolder/scheme/Схема 13.jpg",
   "imgFolder/scheme/Схема 14.jpg",
     "imgFolder/scheme/Схема 15.jpg",
     "imgFolder/scheme/Схема 16.jpg",
    "imgFolder/scheme/Схема 17.jpg"
   
  ];

  var imgs = [];
  for (var i = 0; i < imgSources.length; i++) {
    imgs[i] = new Image();
    imgs[i].src = imgSources[i];
  }

  function replaceImg(src) {
    $lightbox.find('img').attr('src', src);
  }

  function getHref(index) {
    return $li.eq(index).find('>a').attr('href');
  }

  function closeLigtbox() {
    $lightbox.fadeOut();
  }

  $overlay.click(closeLigtbox);

  $links.click(function(e) {
    e.preventDefault();
    targetImg = $(this).attr('href');
    liIndex = $(this).parent().index();
    replaceImg(targetImg);
    $lightbox.fadeIn();
  });

   $next.click( function() {  
    if ( (liIndex + 1) < $li.length ) { 
      targetImg = getHref(liIndex + 1);
      liIndex ++;
    } else {
      targetImg = getHref(0);
      liIndex = 0;
    }
    replaceImg(targetImg);
  });

   $prev.click( function() {  
    if ( (liIndex) > 0 ) { 
      targetImg = getHref(liIndex - 1);
      liIndex --;
    } else {
      targetImg = getHref($li.length - 1);
      liIndex = $li.length - 1;
    }
    replaceImg(targetImg);
  });
  
})(jQuery);
