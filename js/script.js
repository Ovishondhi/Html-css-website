jQuery(document).ready(function($){
	$('.menutrigger').click(function(){
		$('.menu>ul').slideToggle();
	});

		$(window).on("load resize scroll",function(e){
	    var windowWidth = $(window).width();
	    if (windowWidth>728) {
	    	$('.menu>ul').css('display', 'block');
	    }
	    	else {
	    		$('.menu>ul').css('display', 'none');
	    	}
	});
});