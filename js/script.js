$(document).ready(function(){
    $('#ls').lightSlider({
        item: 1,
        autoWidth:false, 
        auto: false,
        loop: true,
        pause: 5000,
        speed: 1000,
        mode : 'slide',
        slideMargin: 50,


        onSliderLoad: function() {
            $('#ls').removeClass('cS-hidden');
        } 
    });  
    
    
});