window.addEventListener('resize', function(event){
	mobile_friendly();
});

var cs_projects = [];
var hum_projects = [];
var other_projects = [];


function add_project(tipe, t, subt, img_nm, yr, txt){
	tipe = tipe || "cs"; //type options are cs, hum, and other
	t = t || ""; //project title
	subt = subt || "";
	img_nm = img_nm; //|| default image here
	yr = yr || new Date().getFullYear(); //date not displayed, for sorting purposes only
	txt = txt || "";

	new_project = new Object({type: tipe, title: t, subtitle: subt, image: img_nm, year: yr, text: txt});

	window[tipe+"_projects"].push(new_project);
}

function display_projects(id, lop){	
	//display array of projects in div with id id.
	content_html = "";
	for (var p = 0; p < lop.length; p++){
		cur_proj = lop[p];
		content_html += "<div class='project'><img class='project-image' src='../images/"+cur_proj["image"]+"' />";
		content_html += "<div class='project-title'>"+cur_proj["title"]
			+"</div><div class='project-subtitle'>"+cur_proj["subtitle"]+"</div>";
		content_html += "<div class='project-text'>"+cur_proj["text"]+"</div></div>";
	}
	$("#"+id).html(content_html);
}
function mobile_friendly(){
	if (window.innerWidth < 760){//mobile
		$(".project-text").addClass("hidden"); //hide all text

		$('.project').on('click', function(event){
			clicked = $(this).find(".project-text");
			console.log($(this).find(".project-text"));
			clicked.toggleClass("hidden");
		});
	}
}