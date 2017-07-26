/*****************************************************

CUSTOM JQUERY SCRIPT CREATED BY NITHESH |  DOMTAGS.COM
THIS IS A LICENSED WORK UNDER THE CREATIVE COMMONS ATTRIBUTION 3.0.

******************************************************/

$(document).ready(function(){

	$(".facts_section_scroller").click(function(){
		$("html, body").animate({scrollTop: $("#facts_section_scroll").offset().top-0 }, "slow");
		//alert($("#facts_section_scroll").scrollTop() + " px");
	});		

	$(".options_scroller").click(function(){
		$("html, body").animate({scrollTop: $("#options_id").offset().top-0 }, "slow");
	});

});



$(document).foundation();



/*****************************************************

CUSTOM JQUERY SCRIPT CREATED BY NITHESH |  DOMTAGS.COM
THIS IS A LICENSED WORK UNDER THE CREATIVE COMMONS ATTRIBUTION 3.0.

******************************************************/

