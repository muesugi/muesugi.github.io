window.addEventListener('resize', function(event){
	landing_photo_resize();
});

$(document).ready(function() {
  create_sidr();
  $('#simple-menu').sidr({
      side: 'right'
    });
  landing_photo_resize();
});

function landing_photo_resize(){
	if (window.innerWidth <= 760){ /*mobile*/
		$(".landing").width(window.innerWidth - 0.05*window.innerWidth);
		$(".landing").css("padding-right", "5%");
	}	
	else{ /*not mobile*/
	  $(".landing").width(window.innerWidth - $("#photo").width()- 0.05*window.innerWidth);
	}
}

function create_sidr(){
	var ulist = "<ul>";
	$("#menubar").find(".spacer").remove();
	new_spacer = "<div class='spacer'></div>";

	$("#menubar").append(new_spacer + new_spacer);

	$(".menu-item").each(function(){
	    ulist += "<li>"+$(this).prop('outerHTML')+"</li>";
	    $("#menubar").append($(this));
	});

	$("#menubar").append(new_spacer);
	$("#sidr").html(ulist + "</ul>");
}

$("#sidr").click(function(event){
	$.sidr('close', 'sidr');
})
function on_sidr_open(){
	//change size of landing, photo, menu

}