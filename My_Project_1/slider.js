var $bigImg=$('.slider__big-img .slider__img');
var $previews = $('.slider__previews');
var $preview = $previews.find('.slider__preview');
var $previewImg=$('.slider__preview .slider__img');
var currentIndex = 0;

console.log ($previewImg);

$previewImg.on ('click', function(){
    var src = $(this).attr('src');
    $bigImg.fadeOut(function() {
        $bigImg.attr('src', src);
        $bigImg.fadeIn();});

    currentIndex=$(this).closest('li').index();
});

$('.slider__arrow_right').on('click', function() {
    if(currentIndex<($previewImg.length-1)) {var src =        $previewImg.eq(currentIndex+1).attr('src');
        $bigImg.fadeOut(function() {
            $bigImg.attr('src', src);
            $bigImg.fadeIn();});                                        currentIndex++;

    }

});

$('.slider__arrow_left').on('click', function() {
    if(currentIndex>0) {
        var src =  $previewImg.eq(currentIndex-1).attr('src');
        $bigImg.fadeOut(function() {
            $bigImg.attr('src', src);
            $bigImg.fadeIn();});

        currentIndex--;

    }
});
