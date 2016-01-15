window.addEventListener('resize', function(event){
	landing_photo_resize();
	fit_sizing("about");
});
/*
$(document).ready(function() {
  	landing_photo_resize();
});*/

function landing_photo_resize(){
	if (window.innerWidth <= 760){ /*mobile*/
		$(".landing").width(window.innerWidth - 0.05*window.innerWidth);
		$(".landing").css("padding-right", "5%");
	}	
	else{ /*not mobile*/
	  $(".landing").width(window.innerWidth - $("#photo").width()- 0.05*window.innerWidth);
	}
}
