function fit_sizing(id){
	//set about size to vh - menu height - contact height
	new_height = window.innerHeight - $("#menubar").outerHeight() - $("#contact").outerHeight() - 120;
	$("#"+id).css("height", new_height);
}

window.addEventListener('resize', function(event){
	if (window.innerWidth > 760){ /*not mobile*/
		$.sidr('close', 'sidr');
	}
});

$(document).ready(function() {
  create_sidr();
  $('#simple-menu').sidr({
      side: 'right'
    });
});

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

	document.body.addEventListener('click', function(event){ //close sidr once anything (menu or body) is clicked
		jQuery.sidr('close', 'sidr');
	})
}
function on_sidr_open(){
	//change size of landing, photo, menu
}

function scrollTo(id){
	console.log("#"+id);
	$("html, body").animate({ 
		scrollTop: parseInt( $("#"+id).offset().top ) - 60 - window.innerHeight*0.02
	});
}