$(document).ready(function(){
   
     
     
     	$('.far').click(function(){
     		
		$('.sidebar_menu').addClass('hide_menu');
		$(this).addClass('hide-fas');
		$('.sidebar').addClass('close-over-other');
		$('.first').addClass('slideright');
		$('.fa-times').addClass('rotateX');
		setTimeout(function(){
          $('.second').addClass('slideleft');
		},900)
		setTimeout(function(){
         $('.third').addClass('slideright');
		},1500)
         $('.text').show();
         $('.col-lg-6').addClass('col-shadow');
		
		

    
   

	});
    $('.fa-times').click(function(){
     $('.sidebar_menu').removeClass('hide_menu');
     $('.far').removeClass('hide-fas')
     $('.sidebar').removeClass('close-over-other');
     $(this).removeClass('rotateX');
     $('.first').removeClass('slideright');
     $('.second').removeClass('slideleft');
     $('.third').removeClass('slideright');
    });
});