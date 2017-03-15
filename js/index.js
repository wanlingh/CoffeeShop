$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

$(document).ready(function(){
	$(".switch").hover(function() {
		$(this).attr("src","img/coffee-title.png");
			}, function() {
		$(this).attr("src","img/coffee.png");
	});
});

$(document).ready(function(){
	$(".switch2").hover(function() {
		$(this).attr("src","img/latte-title.png");
			}, function() {
		$(this).attr("src","img/latte.png");
	});
});

$(document).ready(function(){
	$(".switch3").hover(function() {
		$(this).attr("src","img/cappucino-title.png");
			}, function() {
		$(this).attr("src","img/cappucino.png");
	});
});

$(document).ready(function(){
	$(".switch4").hover(function() {
		$(this).attr("src","img/espresso-title.png");
			}, function() {
		$(this).attr("src","img/espresso.png");
	});
});

$(document).ready(function(){
	$(".switch5").hover(function() {
		$(this).attr("src","img/americano-title.png");
			}, function() {
		$(this).attr("src","img/americano.png");
	});
});

$(document).ready(function(){
	$(".switch6").hover(function() {
		$(this).attr("src","img/mocha-title.png");
			}, function() {
		$(this).attr("src","img/mocha.png");
	});
});

$(document).ready(function(){
	$(".switch7").hover(function() {
		$(this).attr("src","img/chai-title.png");
			}, function() {
		$(this).attr("src","img/chai.png");
	});
});

 $(document).ready(function(){
	$(".switch8").hover(function() {
		$(this).attr("src","img/icedcoffee-title.png");
			}, function() {
		$(this).attr("src","img/icedcoffee.png");
	});
});


