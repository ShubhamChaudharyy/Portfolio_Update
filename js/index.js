$(document).ready(function(){
 
     $('.fa-globe-americas').addClass('rotate-para-x')
     
     	$('.far').click(function(){
     		$('.l1').hover(function(){
     			$('.under-1').addClass('under-1v');

     		},
     		function(){
     			$('.under-1').removeClass('under-1v');
     		});
     		$('.l2').hover(function(){
     			$('.under-2').addClass('under-2v');

     		},
     		function(){
     			$('.under-2').removeClass('under-2v');
     		});
     		$('.l3').hover(function(){
     			$('.under-3').addClass('under-3v');

     		},
     		function(){
     			$('.under-3').removeClass('under-3v');
     		});
     		$('.l4').hover(function(){
     			$('.under-4').addClass('under-4v');

     		},
     		function(){
     			$('.under-4').removeClass('under-4v');
     		});

     		
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