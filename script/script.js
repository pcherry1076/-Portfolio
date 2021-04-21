$(function(){


/*분할창*/

$(window).on("scroll",function(){
	var now=$(window).scrollTop();
	
	var index;
	if(now>1 && now<=900){index=0;}
	if(now>901 && now<=1800){index=1;}
	if(now>1801 && now<=3000){index=2;}
	if(now>3001 && now<=4200){index=3;}
	if(now>4201 && now<=5400){index=4;}
	if(now>5401 && now<=6600){index=5;}
	if(now>6601 && now<=7800){index=6;}
	if(now>7801 && now<=9000){index=7;}
	if(now>9001 && now<=10200){index=8;}
	if(now>10201 && now<=11400){index=9;}
	if(now>11401 && now<=12600){index=10;}
	if(now>12601 && now<=13800){index=11;}
	if(now>13801 && now){index=12;}
	
	$(".menu li").eq(index).children("a").addClass("Color");
	$(".menu li").eq(index).siblings().children("a").removeClass("Color");
	
})//window

/*Section*/
	/*Se1*/
	$("#Sec1").mouseover(function(){
		$(".h1").stop().animate({opacity:1},1000);
	});//#Sec1의 사라짐
	
	$("#Sec1").mouseout(function(){
		$(".h1").stop().animate({opacity:0},1000);
	});//#Sec1의 나타남 
	
	/*Se2*/
	$("#Sec2").mouseover(function(){
		$(this).find(".neme").stop().animate({top:100},1000);
	});
	$("#Sec2").mouseout(function(){
		$(this).find(".neme").stop().animate({top:-300},1000);
	});
	
	/*Se3*/
	$("#Sec3").click(function(){
		$(this).find("img").stop().animate({width:264, opacity:1});
	});
	
	$("#Sec3 img").click(function(){
		$(".imag1").stop().show();
		$(".main1").addClass("maina")
	});	
	
	$(".main1, .imag1").click(function(){
		$(".imag1").stop().hide();
		$(".main1").removeClass("maina")
	});	
	

	
	/*Se4*/
	$("#Sec4").click(function(){
		$(this).find("img").stop().animate({width:222, opacity:1});
	});
	
	$("#Sec4 img").click(function(){
		$(".imag2").stop().show();
		$(".main2").addClass("maina")
	});
	
	$(".main2, .imag2").click(function(){
		$(".imag2").stop().hide();
		$(".main2").removeClass("maina")
	});
	
	/*Sec5*/
	$("#Sec5").click(function(){
		$(this).find("img").stop().animate({width:325, opacity:1});
	});
	
	$("#Sec5 img").click(function(){
		$(".imag3").stop().show();
		$(".main3").addClass("maina")
	});
	
	$(".main3, .imag3").click(function(){
		$(".imag3").stop().hide();
		$(".main3").removeClass("maina")
	});
	
	
	/*Sec6*/
	$("#Sec6").click(function(){
		$(this).find("img").stop().animate({width:225, opacity:1});
	});
	
	$("#Sec6 img").click(function(){
		$(".imag4").stop().show();
		$(".main4").addClass("maina")
	});
	
	$(".main4, .imag4").click(function(){
		$(".imag4").stop().hide();
		$(".main4").removeClass("maina")
	});	
	
	/*Sec7*/
	$("#Sec7").click(function(){
		$(this).find("img").stop().animate({width:302, opacity:1});
	});
	
	$("#Sec7 img").click(function(){
		$(".imag5").stop().show();
		$(".main5").addClass("maina")
	});
	
	$(".main5, .imag5").click(function(){
		$(".imag5").stop().hide();
		$(".main5").removeClass("maina")
	});	

	/*Sec8*/
	$("#Sec8").click(function(){
		$(this).find("img").stop().animate({width:294, opacity:1});
	});
	
	$("#Sec8 img").click(function(){
		$(".imag6").stop().show();
		$(".main6").addClass("maina")
	});
	
	$(".main6, .imag6").click(function(){
		$(".imag6").stop().hide();
		$(".main6").removeClass("maina")
	});	
	
	/*Sec9*/
	$("#Sec9").click(function(){
		$(this).find("img").stop().animate({width:339, opacity:1});
	});
	
	$("#Sec9 img").click(function(){
		$(".imag7").stop().show();
		$(".main7").addClass("maina")
	});
	
	$(".main7, .imag7").click(function(){
		$(".imag7").stop().hide();
		$(".main7").removeClass("maina")
	});	
	
	/*Sec10*/
	$("#Sec10").click(function(){
		$(this).find("img").stop().animate({width:197, opacity:1});
	});
	
	$("#Sec10 img").click(function(){
		$(".imag8").stop().show();
		$(".main8").addClass("maina")
	});
	
	$(".main8, .imag8").click(function(){
		$(".imag8").stop().hide();
		$(".main8").removeClass("maina")
	});	
	
	
	
	/*Sec11*/
	$("#Sec11").click(function(){
		$(this).find("img").stop().animate({width:229, opacity:1});
	});
	
	$("#Sec11 img").click(function(){
		$(".imag9").stop().show();
		$(".main9").addClass("maina")
	});
	
	$(".main9, .imag9").click(function(){
		$(".imag9").stop().hide();
		$(".main9").removeClass("maina")
	});	
	
	/*Sec12*/
	$("#Sec12").click(function(){
		$(this).find("img").stop().animate({width:267, opacity:1});
	});	
	
	$("#Sec12 img").click(function(){
		$(".imag10").stop().show();
		$(".main10").addClass("maina")
	});
	
	$(".main10, .imag10").click(function(){
		$(".imag10").stop().hide();
		$(".main10").removeClass("maina")
	});	
	
	/*Sec13*/
	$("#Sec13").click(function(){
		$(".img1").stop().animate({opacity:1},500,function(){
			$(".img2").stop().animate({opacity:1},500,function(){
				$(".img3").stop().animate({opacity:1},500,function(){
					$(".img4").stop().animate({opacity:1},500,function(){
						$(".img5").stop().animate({opacity:1},500);
					})//img4
				})//img3
			})//img2
		});//img1
	});
});//전체 function의 사라짐 