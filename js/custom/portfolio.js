window.addEventListener('resize', function(event){
	mobile_friendly();
});

var cs_projects = [];
var hum_projects = [];
var other_projects = [];


function add_project(tipe, t, subt, img_nm, yr, txt, lnk){
	tipe = tipe || "cs"; //type options are cs, hum, and other
	t = t || ""; //project title
	subt = subt || "";
	img_nm = img_nm; //|| default image here
	yr = yr || new Date().getFullYear(); //date not displayed, for sorting purposes only
	txt = txt || "";
	lnk = lnk || "";

	new_project = new Object({type: tipe, title: t, subtitle: subt, image: img_nm, rank: yr, text: txt, link:lnk});
	insert(new_project, window[tipe+"_projects"]);
}
function insert(new_project, sorted_lop){ //scope of entire projects list isnt too big, so 
	//insertion sort is fast enough/better than mergesort, which is used in some (Firefox) browsers
	// as the implementation for native js sort
	//+ want to maintain sorted state in case projects are added in a different way in the future
	project_rank = new_project["rank"];

	iter_proj = 0;//iterator through sorted_lop
	while ((iter_proj < sorted_lop.length) && (project_rank < sorted_lop[iter_proj]["rank"])){
		iter_proj++;
	}
	sorted_lop.splice(iter_proj, 0, new_project);
}

function display_projects(id, lop){	
	//display array of projects in div with id id.
	content_html = "";
	for (var p = 0; p < lop.length; p++){
		cur_proj = lop[p];
		content_html += "<div class='project'><a href='"+cur_proj["link"]+"''><img class='project-image' src='../images/"+cur_proj["image"]+"' /></a>";
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