$(function(){
	setInterval(function(){
		if ($('body').width() > 270 * 4) {
			$('#produtos').width(270 * 4)
			$('#produtos').height(380);
		}else if($('body').width() > 270 * 3) {
			$('#produtos').width(270 * 3);
			$('#produtos').height(750);
		}else if($('body').width() > 270 * 2) {
			$('#produtos').width(270 * 2)
		}
	},100);
});

$(function(){
	var count = 0
	setInterval(function(){
		count++;
		if(count > $('section.slide div.container div').length - 1){
		count = 0;
		}
		$('.slide .container').css('left','-'+100*count+'%');
		},4000);
});

$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() != 0){
			$('nav#menu').css('top','-30px');
		}else{
			$('nav#menu').css('top','0');
		}
		if($(window).scrollTop() >= 905){
			$('nav#menu').addClass('on');
		}else{
			$('nav#menu').removeClass('on');
		}
	});
});

$(function(){
	$('div.down').click(function(){
		$(window).scrollTop($('div#port').height() - 50);
	});
});

$(function(){
	$('input.cpf').mask('000.000.000-00');
	$('input.tel').mask('00 00 00000-0000');
});