// Checking the js is being loaded
window.onload = function()
{
	console.log('main ready');
};

// Waiting to be ready
$(document).ready(function() {
  $('#previous').on('click', function(){
    // Change to the previous image
    $('#im_' + currentImage).stop().fadeOut(1);
    decreaseImage();
    $('#im_' + currentImage).stop().fadeIn(1);
  }); 
  $('#next').on('click', function(){
    // Change to the next image
    $('#im_' + currentImage).stop().fadeOut(1);
    increaseImage();
    $('#im_' + currentImage).stop().fadeIn(1);
  }); 

  var currentImage = 1;
  var totalImages = 3;

	// When clicked 'next' button increases current image
  function increaseImage() {
    ++currentImage;
    if(currentImage > totalImages) {
      currentImage = 1;
    }
  }
  function decreaseImage() {
    --currentImage;
    if(currentImage < 1) {
      currentImage = totalImages;
    }
  }   
});

$(window).on('load', function() {
 
    var InfiniteRotator =
    {
        init: function()
        {
            // Time taken to fade in
            var initialFadeIn = 1000;
 
            // Time taken between fades
            var itemInterval = 2000;
 
            // Time taken to swtich between the two
            var fadeTime = 1500;
 
            var numberOfItems = $('.rotating-item').length;
 
            var currentItem = 0;
 
            //show first item
            $('.rotating-item').eq(currentItem).fadeIn(initialFadeIn);
 
            //loop through the items
            var infiniteLoop = setInterval(function(){
                $('.rotating-item').eq(currentItem).fadeOut(fadeTime);
 
                if(currentItem == numberOfItems -1){
                    currentItem = 0;
                }else{
                    currentItem++;
                }
                $('.rotating-item').eq(currentItem).fadeIn(fadeTime);
 
            }, itemInterval);
        }
    };
 
    InfiniteRotator.init();
 
});