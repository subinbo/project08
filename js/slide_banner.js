$(function(){
	//메인슬라이드
	var visual=$('#brandVisual ul li');
	var button=$('.slide_num>ul>li');
	var current=0;
	var setIntervalId;
	
	function move(tg, start, end){ //매개변수 tg,start,end
		tg.css('left',start).stop().animate({left:end},500);
	}
	
	function timer(){ //사용자 정의함수
		
		setIntervalId=setInterval(function(){
			var prev=visual.eq(current);
			var pn=button.eq(current);
			move(prev, 0, '-100%');
			pn.removeClass('on');
			current++; //1씩증가
			if(current==visual.size()){current=0;}
			var next=visual.eq(current);
			var pnn=button.eq(current);
			move(next, '100%', 0)
			pnn.addClass('on');
			
		},3000);
		
	}
	
	timer();
	
	$('#brandVisual').on({mouseover:function(){
		
		clearInterval(setIntervalId);
	},mouseout:function(){
		timer();
	}
	
	});
	
	button.click(function(){
		
		var tg=$(this);
		var i=tg.index();
		
		button.removeClass('on');
		tg.addClass('on');
		move1(i);
		
	});
	
	function move1(i){
		
		if(current==i){return}
		var currentEl=visual.eq(current);
		var nextEl=visual.eq(i);
		currentEl.css({left:0}).stop().animate({left:'-100%'},500);
		nextEl.css({left:'100%'}).stop().animate({left:0},500);
		
		current=i;
		
	}

});

$(function(){
	 //베스트 배너
	 var banner = $('.best .best_banner>ul>li');
	 var button1 = $('.arrow1_1_center>img.next');
	 var button2 = $('.arrow1_1_center>img.prev');
	 var current = 0;
	 var setIntervalId00;
	 var p = $('.section_number>p');
 
	 timer();
 
	 function timer(){
		 setIntervalId00 = setInterval(function(){
			 var prev = banner.eq(current);
			 var pn = p.eq(current);
 
			 move(prev, 0, '-100%');
			 pn.removeClass('bl');
 
			 current++; //1씩 증가
 
			 if(current == banner.size()){current=0}
 
			 var next = banner.eq(current);
			 var pnn = p.eq(current);
 
			 move(next, '100%',0);
			 pnn.addClass('bl');
		 },2000);
	 }
 
	 function move(tg, start, end){
		 tg.css('left',start).stop().animate({left:end},{duration:500,ease:'easeOutCubic'});
	 }
 
	 //배너 멈추기
	 $('.best').on({mouseover:function(){
		 clearInterval(setIntervalId00);
	 }, mouseout:function(){
		 timer();
	 }});
 
	 button1.click(function(){
		 var prev = banner.eq(current);
		 var pn = p.eq(current);
 
		 move(prev,0,'-100%');
		 pn.removeClass('bl');
 
		 current++;
 
		 if(current == banner.size()){current=0}
 
		 var next = banner.eq(current);
		 var pnn = p.eq(current);
		 move(next,'100%',0);
		 pnn.addClass('bl');
 
		 return false; 
	 });
 
	 button2.click(function(){
		 var prev = banner.eq(current);
		 var pn = p.eq(current);
 
		 move(prev,0,'100%');
		 pn.removeClass('bl');
 
		 current--; //1씩 감소
 
		 if(current == -banner.size()){current=0}
 
		 var next = banner.eq(current);
		 var pnn = p.eq(current);
		 move(next,'-100%',0);
		 pnn.addClass('bl');
 
		 return false; 
	 });
})