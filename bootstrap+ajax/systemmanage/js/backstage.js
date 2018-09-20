function getUseList(listPage){
	$.ajax({
		url:"http://192.168.15.2/gz0820web/users",
		dataType:"json",
		data:{page:listPage},
		type:'POST',
		success:function(redata){
			var sex;
			var pageBack=redata.current_page;
			var datas=redata.data;
			for(var i in datas){
					var tr = $('table tbody tr').eq(i);
					if(datas[i].gender==1){
						sex='男';
					}else{
						sex='女';
					}
					tr.find('td').eq(0).html(datas[i].id);
					tr.find('td').eq(1).html(datas[i].username);
					tr.find('td').eq(2).html(datas[i].password);
					tr.find('td').eq(3).html(datas[i].age);
					tr.find('td').eq(4).html(sex);			
			}
		}/*end success*/
	})
}


$(window).on('load',function(){
	$('.list-group-item').click(function() {
    $(this).find('.iconSpread').css('display', 'block');
    $(this).siblings().find('.iconSpread').css('display', 'none');
    $(this).parent().siblings().find('.iconSpread').css('display','none')
	})

	$('.nav > li > a').click(function(){
	    if($(this).attr('aria-expanded')=='true'){
	            $(this).find('span').eq(1).removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down')
	    }else {
	        $(this).find('span').eq(1).removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up')
	    }
	})

	getUseList(1);  //起初就显示第一页的数据
 	var lis = $('#userlist .pagination li').not('.liClass');
 	$('.liClass').eq(0).addClass('disabled');  //起初就禁用上一页按钮
	lis.click(function(){
		if($(this).next('.liClass').length > 0){
			$(this).next().addClass('disabled')
		}else{
			$(this).siblings('.liClass').removeClass('disabled')
		}
		if($(this).prev('.liClass').length > 0){
			$(this).prev().addClass('disabled')
		}else{
			$(this).siblings('.liClass').removeClass('disabled')
		}
		var num = $(this).text();
		$(this).addClass('active').siblings().removeClass('active');
		getUseList(num);
	});

	$('.liClass').eq(0).click(function(){  //上一页
		if($(this).siblings('.active').text()==1){
			$(this).addClass('disabled');
			return;
		}else{
			$(this).removeClass('disabled');
		}
		$(this).siblings('.active').removeClass('active').prev().addClass('active');
		getUseList($(this).siblings('.active').text());
	});
	$('.liClass').eq(1).click(function(){  //下一页
		if($(this).siblings('.active').text()==8){
			$(this).addClass('disabled');
			return;
		}else{
			$(this).removeClass('disabled');
		}
		$(this).siblings('.active').removeClass('active').next().addClass('active');
		getUseList($(this).siblings('.active').text());
	})
})