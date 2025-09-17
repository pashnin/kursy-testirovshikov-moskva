$(document).ready(function() {
	adapt();
	$(window).scroll(function () {if ($(this).scrollTop() > 0) {$('#scroller').fadeIn();} else {$('#scroller').fadeOut();}});
	$('#scroller').click(function () {$('body,html').animate({scrollTop: 0}, 400); return false;});
	/* Search */
	$('.button-search').bind('click', function() {
		url = $('base').attr('href') + 'index.php?route=product/search';
		var search = $('input[name=\'search\']').attr('value');
		if (search) {
			url += '&search=' + encodeURIComponent(search);
		}
		location = url;
	});
	$('#search input').bind('keydown', function(e) {
		if (e.keyCode == 13) {
			url = $('base').attr('href') + 'index.php?route=product/search';
			var search = $('input[name=\'search\']').attr('value');
			if (search) {
				url += '&search=' + encodeURIComponent(search);
			}
			location = url;
		}
	});
	// IE6 & IE7 Fixes
	if ($.browser.msie) {
		if ($.browser.version <= 6) {
			$('#column-left + #column-right + #content, #column-left + #content').css('margin-left', '195px');
			
			$('#column-right + #content').css('margin-right', '195px');
		
			$('.box-category ul li a.active + ul').css('display', 'block');	
		}
		
		if ($.browser.version <= 7) {
			$('#menu > ul > li').bind('mouseover', function() {
				$(this).addClass('active');
			});
				
			$('#menu > ul > li').bind('mouseout', function() {
				$(this).removeClass('active');
			});	
		}
	}
	$('.success img, .warning img, .attention img, .information img').live('click', function() {
		$(this).parent().fadeOut('slow', function() {
			$(this).remove();
		});
	});	
});
function getURLVar(key) {
	var value = [];
	
	var query = String(document.location).split('?');
	
	if (query[1]) {
		var part = query[1].split('&');

		for (i = 0; i < part.length; i++) {
			var data = part[i].split('=');
			
			if (data[0] && data[1]) {
				value[data[0]] = data[1];
			}
		}
		
		if (value[key]) {
			return value[key];
		} else {
			return '';
		}
	}
} 





$( window ).resize(function() {
	adapt();
});
if (window.onorientationchange) {
    window.onorientationchange=function() {
		adapt();
	}
}

function adapt(){
	return;
	var wh = windowWidth();
	if( wh>1010){ 
		wh=''; 
	}else{
		wh = wh +'px';
	}
	$('body').css('width',wh );
	$('.body_top').css('width',wh );
	$('#container').css('width',wh );
	$('#footer').css('width',wh );
}

//	for adaptive
function windowWidth () {
	var ww = document.documentElement;
	var wiwi = self.innerWidth - getScrollBarWidth() || (ww && ww.clientWidth)-getScrollBarWidth() || document.body.clientWidth-getScrollBarWidth();
	if(wiwi<200){ wiwi = 200; }
	return wiwi;
}
function getScrollBarWidth () {
	var inner = document.createElement('p');
	inner.style.width = "100%";
	inner.style.height = "200px";
	var outer = document.createElement('div');
	outer.style.position = "absolute";
	outer.style.top = "0px";
	outer.style.left = "0px";
	outer.style.visibility = "hidden";
	outer.style.width = "200px";
	outer.style.height = "150px";
	outer.style.overflow = "hidden";
	outer.appendChild (inner);
	document.body.appendChild (outer);
	var w1 = inner.offsetWidth;
	outer.style.overflow = 'scroll';
	var w2 = inner.offsetWidth;
	if (w1 == w2) w2 = outer.clientWidth;
	document.body.removeChild (outer);
	return (w1 - w2);
};
function windowHeight() {
	var hh = document.documentElement;
	var hihi = self.innerHeight || (hh && hh.Height) || document.body.Height ;
	if(hihi<400){ hihi = 400; }
	return hihi;
}