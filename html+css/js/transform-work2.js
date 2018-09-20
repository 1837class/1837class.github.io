$(function() {
    $('.rotate .fill').hover(function() {
        $(this).css('transform', 'rotate(45deg)')
    }, function() {
        $(this).css('transform', 'rotate(0deg)')
    })

    $('.rotateX .fill').hover(function(){
    	$(this).css('transform', 'rotateX(45deg)')
    },function(){
    	$(this).css('transform', 'rotateX(0deg)')
    })

    $('.rotateY .fill').hover(function(){
    	$(this).css('transform', 'rotateY(45deg)')
    },function(){
    	$(this).css('transform', 'rotateY(0deg)')
    })

    $('.rotateZ .fill').hover(function(){
    	$(this).css('transform', 'rotateZ(45deg)')
    },function(){
    	$(this).css('transform', 'rotateZ(0deg)')
    })

    $('.scale .fill').hover(function(){
    	$(this).css('transform', 'scale(2)')
    },function(){
    	$(this).css('transform', 'scale(1)')
    })

    $('.scaleX .fill').hover(function(){
    	$(this).css('transform', 'scaleX(2)')
    },function(){
    	$(this).css('transform', 'scaleX(1)')
    })

    $('.scaleY .fill').hover(function(){
    	$(this).css('transform', 'scaleY(2)')
    },function(){
    	$(this).css('transform', 'scaleY(1)')
    })

    $('.skew .fill').hover(function(){
    	$(this).css('transform', 'skew(45deg,45deg)')
    },function(){
    	$(this).css('transform', 'skew(0deg,0deg)')
    })

    $('.skewX .fill').hover(function(){
    	$(this).css('transform', 'skewX(45deg)')
    },function(){
    	$(this).css('transform', 'skewX(0deg)')
    })

    $('.skewY .fill').hover(function(){
    	$(this).css('transform', 'skewY(45deg)')
    },function(){
    	$(this).css('transform', 'skewY(0deg)')
    })

    $('.translate .fill').hover(function(){
    	$(this).css('transform', 'translate(45px,45px)')
    },function(){
    	$(this).css('transform', 'translate(0px)')
    })

    $('.translateX .fill').hover(function(){
    	$(this).css('transform', 'translateX(45px)')
    },function(){
    	$(this).css('transform', 'translate(0px)')
    })

    $('.translateY .fill').hover(function(){
    	$(this).css('transform', 'translateY(45px)')
    },function(){
    	$(this).css('transform', 'translateY(0px)')
    })

    $('.matrix .fill').hover(function(){
    	$(this).css('transform', 'matrix(2, 2, 0, 2, 45, 0)')
    },function(){
    	$(this).css('transform', '')
    })

    $('.perspective-100 .rotateX .fill').hover(function(){
    	$(this).parent().css('perspective','100px')
    	$(this).css('transform', 'rotateX(45deg)')
    },function(){
    	$(this).css('transform', 'rotateX(0deg)')
    })

    $('.perspective-100 .rotateY .fill').hover(function(){
    	$(this).parent().css('perspective','100px')
    	$(this).css('transform', 'rotateY(45deg)')
    },function(){
    	$(this).css('transform', 'rotateY(0deg)')
    })

    $('.perspective-200 .rotateX .fill').hover(function(){
    	$(this).parent().css('perspective','200px')
    	$(this).css('transform', 'rotateX(45deg)')
    },function(){
    	$(this).css('transform', 'rotateX(0deg)')
    })

    $('.perspective-200 .rotateY .fill').hover(function(){
    	$(this).parent().css('perspective','200px')
    	$(this).css('transform', 'rotateY(45deg)')
    },function(){
    	$(this).css('transform', 'rotateY(0deg)')
    })

    $(' .rotate .to-100-0-0').hover(function(){
    	$(this).css({
    		transform: 'rotate(45deg)',
    		transformOrigin: '100% 0 0'
    	})
    },function(){
    	$(this).css('transform', 'rotate(0deg)')
    })

    $(' .rotate .to-0-100-0').hover(function(){
    	$(this).css({
    		transform: 'rotate(45deg)',
    		transformOrigin: '0 100% 0'
    	})
    },function(){
    	$(this).css('transform', 'rotate(0deg)')
    })

    $(' .rotateX .to-0-100-0').hover(function(){
    	$(this).css({
    		transform: 'rotateX(45deg)',
    		transformOrigin: '0 100% 0'
    	})
    },function(){
    	$(this).css('transform', 'rotateX(0deg)')
    })

    $(' .rotateX .to-100-0-0').hover(function(){
    	$(this).css({
    		transform: 'rotateX(45deg)',
    		transformOrigin: '100% 0 0'
    	})
    },function(){
    	$(this).css('transform', 'rotateX(0deg)')
    })

    $(' .rotateY .to-0-100-0').hover(function(){
    	$(this).css({
    		transform: 'rotateY(45deg)',
    		transformOrigin: '0 100% 0'
    	})
    },function(){
    	$(this).css('transform', 'rotateY(0deg)')
    })

     $(' .rotateY .to-100-0-0').hover(function(){
    	$(this).css({
    		transform: 'rotateY(45deg)',
    		transformOrigin: '100% 0 0'
    	})
    },function(){
    	$(this).css('transform', 'rotateY(0deg)')
    })

     $(' .scale .to-100-0-0').hover(function(){
    	$(this).css({
    		transform: 'scale(45deg)',
    		transformOrigin: '100% 0 0'
    	})
    },function(){
    	$(this).css('transform', 'scale(0deg)')
    })

     $(' .scale .to-0-100-0').hover(function(){
    	$(this).css({
    		transform: 'scale(45deg)',
    		transformOrigin: '0 100% 0'
    	})
    },function(){
    	$(this).css('transform', 'scale(0deg)')
    })

      $(' .scaleX .to-100-0-0').hover(function(){
    	$(this).css({
    		transform: 'scaleX(45deg)',
    		transformOrigin: '100% 0 0'
    	})
    },function(){
    	$(this).css('transform', 'scaleX(0deg)')
    })

       $(' .scaleX .to-0-100-0').hover(function(){
    	$(this).css({
    		transform: 'scaleX(45deg)',
    		transformOrigin: '0 100% 0'
    	})
    },function(){
    	$(this).css('transform', 'scaleX(0deg)')
    })

        $(' .scaleY .to-100-0-0').hover(function(){
    	$(this).css({
    		transform: 'scaleY(45deg)',
    		transformOrigin: '100% 0 0'
    	})
    },function(){
    	$(this).css('transform', 'scaleY(0deg)')
    })

        $(' .scaleY .to-0-100-0').hover(function(){
    	$(this).css({
    		transform: 'scaleY(45deg)',
    		transformOrigin: '0 100% 0'
    	})
    },function(){
    	$(this).css('transform', 'scaleY(0deg)')
    })
})