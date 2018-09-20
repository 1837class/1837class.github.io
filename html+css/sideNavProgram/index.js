$(function(){
	$('.content button').click(function(){
		$('.container').addClass('active');
		$('.grayTip').addClass('active');
	})
	$('.content button').eq(0).click(function() {		
		$('.leftNav').addClass('active');		
	});
	$('.content button').eq(1).click(function(){		
		$('.leftNav-eq1').addClass('active');		
	})
	$('.content button').eq(2).click(function(){		
		$('.leftNav-eq2').addClass('active');
	})
	$('.content button').eq(3).click(function(){		
		$('.leftNav-eq3').addClass('active');
	})
	$('.content button').eq(4).click(function(){
		$('.leftNav-eq4').addClass('active');	
	})
	$('.content button').eq(5).click(function(){
		$('.container').addClass('active-eq5');
		$('.leftNav-eq2').addClass('active');	
	})
	$('.grayTip').click(function(){
		$('.container').removeClass('active');
		$('.container').removeClass('active-eq5');
		$('.leftNav').removeClass('active');
		$('.grayTip').removeClass('active');
		$('.leftNav-eq1').removeClass('active');
		$('.leftNav-eq2').removeClass('active');
		$('.leftNav-eq3').removeClass('active');
		$('.leftNav-eq4').removeClass('active');
		$('.leftNav-eq5').removeClass('active');



	})

})