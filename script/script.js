$(function(){
	
	/*figure*/
	$("figure img").each(function(ea){
		$(this).css({left:(ea-1)*1920});
	});
		
	setInterval(function(){
		$("figure img").each(function(img){
			var left=parseInt($(this).css("left"));
			var move=left-1920;
			$(this).animate({left:move},1000,function(){
				if(left<=-1920){
					$(this).css({left:1920});
				};//if 끝
			});//ainimate 끝
		});//each 끝
	},3000);//set 끝
		
	/* menu*/
	$("#menu .submenu").mouseover(function(){
		$(".liu").stop().slideDown();
	});

	$(".liu").mouseout(function(){
		$(".liu").stop().slideUp();
	});
	
	/* */
	
	$("#Sec1 .left").each(function(ea){
		$(this).css({left:(ea)*300});
	});//each의 끝

	$("#Sec1 ul li:last").css("left", -300);
	
	$(".bottomL").click(function(){
		$("#Sec1 ul li").each(function(){
			var left=parseInt($(this).css("left"));
			var mov=left-300;
			$(this).animate({left:mov},1000, function(){
				if(left<=-300){
					$(this).css({left:1200});	
				};	
			});
		});
	});//click의 끝
	$(".bottomR").click(function(){
		$("#Sec1 ul li").each(function(){
			var left=parseInt($(this).css("left"));
			var mov=left+300;
			$(this).animate({left:mov},1000, function(){
				if(left>=1200){
					$(this).css({left:-300});	
				}
			});
		});
	});//click의 끝
	
	
	/*Sec3*/
	$(".box31").mouseover(function(){
		$(this).find("p").stop().animate({left:100},500);
		});
	$(".box32").mouseover(function(){
		$(".box21").stop().animate({top:200});
		$(this).find("p").stop().animate({fontSize:"5em", color:"red"});
	});
	$(".box33").mouseover(function(){
		$(".box331").stop().animate({top:-180});
		$(this).find("p").stop().animate({fontSize:"5em", color:"red"});
	});	
	
	
	$(".box31").mouseout(function(){
		$(this).find("p").stop().animate({left:-600},500);
		});
	$(".box32").mouseout(function(){
		$(".box21").stop().animate({top:250});
		$(this).find("p").stop().animate({fontSize:"4.5em", color:"#fff"});
	});
	$(".box33").mouseout(function(){
		$(".box331").stop().animate({top:-200});
		$(this).find("p").stop().animate({fontSize:"4.5em", color:"#fff"});
	});
			
});//function의 끝