'use strict'

$(function(){
    
    var width=500;
   
    var animatedSpeed = 2500;
   
    var pause = animatedSpeed + 500
    var currentSlide = 1

  
    var $slideContainer = $('.slides')
    var $slides = $('.slide')

    var interval;

    function startSlider(){
        interval = setInterval(function(){
    
            $slideContainer.animate({'margin-left': '-='+ width},animatedSpeed, function(){

currentSlide++

if(currentSlide===$slides.length){
    currentSlide =1;
    $slideContainer.css('margin-left',0)
}
            })
           
        }, pause)
    }

 
    function pauseSlider(){
        clearInterval(interval)
    }
   
    startSlider();

  
    $slideContainer.on('mouseenter', pauseSlider).on('mouseleave', startSlider)
})