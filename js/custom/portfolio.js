window.addEventListener('resize', function(event){
	mobile_friendly();
});

var cs_projects = [];
var cs_projects_per_line;
var hum_projects = [];
var hum_projects_per_line;
//var other_projects = [];

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

function display_projects(id, lop, ppl){	
	//display array of projects in div with id id.
	content_html = "";
	for (var p = 0; p < lop.length; p++){
		cur_proj = lop[p];
		content_html += "<div class='project'>";
		if (cur_proj["image"]){ //has valid image link
			content_html += "<a href='"+cur_proj["link"]+"''><img class='project-image' src='../images/"+cur_proj["image"]+"' /></a>";
			content_html += "<div class='project-title'>"+cur_proj["title"]+"</div>";
		}
		else{//add link to title instead
			content_html += "<a href='"+cur_proj["link"]+"''><div class='project-title'>"+cur_proj["title"]+"</div></a>";
		}
		content_html += "<div class='project-subtitle'>"+cur_proj["subtitle"]+"</div>";

		text = cur_proj["text"];
		cut_index = text.indexOf(" ", 250);
		if (text.length > 250){
			shown_text = text.substr(0, cut_index); //break at the first space after 250 char mark
			hidden_text = text.substr(cut_index);
			content_html += "<div class='project-text'>"+shown_text+"<div class='ellipse'> ...</div>";

			content_html += "<div class='project-button' onclick='toggle_hidden_text(this);'>Read More</div>";
			content_html += "<div class='project-hidden-text hidden'>"+hidden_text+"</div><div class='project-button hidden' onclick='toggle_hidden_text(this);'>Hide</div>";
		}
		else {content_html += "<div class='project-text'>"+text;}
		content_html += "</div></div>";
	}
	$("#"+id).html(content_html);

	project_list = id.replace("-", "_");
	if (window[project_list + "_per_line"] == undefined){
		window[project_list + "_per_line"] = ppl;
	}

	projects_per_line(id, window[project_list + "_per_line"]);
}
function projects_per_line(id, ppl){ //ppl = projects_per_line
	//id -> projects in what div?
	//set cs_projects_per_line and/or hum_projects_per_line	
	ppl = ppl || window[id.replace("-", "_") + "_per_line"]; //optional

	project_width = $("#"+id).innerWidth()/ppl;
	project_ignore_width = 40;//accounts for .project padding and margins
	image_ignore_width = project_ignore_width - 20;
	$("#"+id+' .project').width(project_width - project_ignore_width);
	$("#"+id+' .project-image').width(project_width - image_ignore_width);
}

function mobile_friendly(){
	if (window.innerWidth < 760){//mobile
		projects_per_line("cs-projects", 1);
		projects_per_line("hum-projects", 1);
		$(".project-text").addClass("hidden"); //hide all text 
		$(".project-title").hover( function(){	
			$(this).siblings('.project-subtitle').andSelf().toggleClass('underline'); 
		}); 
		$(".project-subtitle").hover( function(){	
			$(this).siblings('.project-title').andSelf().toggleClass('underline'); 
		}); 
		$('.project-title,.project-subtitle').on('click', function(event){
			clicked = $(this).siblings(".project-text");
			clicked.toggleClass("hidden");
		});
	}
	else{
		$(".project-text").removeClass("hidden"); 
		$(".project .project-title").removeClass("clickable"); 
		$('.project').off('click');
		projects_per_line("cs-projects"); //stored previous values
		projects_per_line("hum-projects");
	}
}
function go_to_page_hovers(){
	$("a").has('.project-image').on({
		mouseenter: function(){
			if ($(this).children('.image-tint').length == 0){
				make_tint($(this));
			}
			else{toggle_tint($(this));}
		},
		mouseleave: function(){ toggle_tint($(this));}
	});
}

function toggle_hidden_text(clicked){
	$($(clicked).parent()).children().not("br, a, #wip").toggleClass('hidden');
}

function make_tint(hovered){
	$(hovered).prepend("<div class='image-tint'>Go To Page</div>");
	contained_img = $(hovered).children("img");
    $('.image-tint').css({"padding-top": (contained_img.height() + 1 + 2)*.47, "height": (contained_img.height() + 1 + 2)*.53,"width": (contained_img.width() + 1 + 2)});

}
function toggle_tint(hovered){
	$($(hovered).children('.image-tint')).toggleClass('hidden');
	contained_img = $(hovered).children("img");
    $('.image-tint').css({"padding-top": (contained_img.height() + 1 + 2)*.47, "height": (contained_img.height() + 1 + 2)*.53,"width": (contained_img.width() + 1 + 2)});
}