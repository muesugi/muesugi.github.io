var tag_hash = {"cs":"Computer Science", 
	"hum": "Humanities", 
	"learn": "Learning", 
	"teach": "Teaching", 
	"club": "Clubs",
	"lang": "Language", 
	"prof": "Professional",
	"vol": "Volunteer",
	"natsci": "Natural Sciences", 
	"math": "Math and Engineering"};

/**
*
* Sorters
*/
function entry_sort_height(arr, year_width){
	//sort by height
	height_tracker = {};
	arr.sort(function(a, b){
		a_height = a.height(year_width);
		b_height = b.height(year_width);

		if (a_height > b_height) return 1;
		else if (a_height == b_height) return 0;
		else return -1;
	});
	console.log(arr);
	return arr;
}
function entry_sort_duration(arr){
	//sort by end date
	arr.sort(function(a, b){
		a_duration = a.end.subtract(a.start);
		b_duration = b.end.subtract(b.start);

		return a_duration.isBigger(b_duration);
	});
	return arr;
}

function entry_sort_year(arr){
	//sort by end date
	arr.sort(function(b, a){//switch to make ascending
		endsCompare = a.end.isBigger(b.end);

		if (endsCompare != 0){
			return endsCompare;
		}
		else{ //end dates are the same, comapre start dates
			//earlier start dates are better
			return a.start.isBigger(b.start)
		}
	})
	return arr;
}
function award_arr_sort(arr){
	//sort by date
	arr.sort(function(a, b){
		return a.date.isBigger(b.date);
	})
	return arr;
}

function defaults(){
	$("#timeline").html(""); //empty/clear canvas first
	$("#extracontainer").html("");
	$("#academiccontainer").html("");
	timeline_paper = Raphael(document.getElementById('timeline'), "100%", "20");

	year_width = window.innerWidth/(timeline_end_year-timeline_start_year+1);
	//height based on tachibana being the longest/tallest extra entry
	extra_tallest_start = new DateDrawable().fromInt(200504).scaledPosition(year_width);
	extra_tallest_end = new DateDrawable().fromInt(201506).scaledPosition(year_width);
	extra_height = 30 + (extra_tallest_end - extra_tallest_start)/10;

	extra_paper = Raphael(document.getElementById('extracontainer'), "100%", extra_height);
	//height based on ps261 being the longest/tallest acadmic entry

	aca_tallest_start = new DateDrawable().fromInt(200209).scaledPosition(year_width);
	aca_tallest_end = new DateDrawable().fromInt(200806).scaledPosition(year_width);
	aca_height = 20 + (aca_tallest_end - aca_tallest_start)/10;
	academic_paper = Raphael(document.getElementById('academiccontainer'), "100%", aca_height);
}

function fade_in_if_hidden(id){
	/*if ($("#"+id).is(':hidden')){
		$("#"+id).css('visibility','visible').hide().fadeIn("slow");
	}*/
	if ($("#"+id).css('opacity') == 0){ //hidden
		$("#"+id).fadeTo('slow', 1);
	}
}
function fade_out_if_visible(id){
	/*if ($("#"+id).is(':visible')){
		$("#"+id).css('visibility','visible').hide().fadeOut("slow");
	}*/
	if ($("#"+id).css('opacity') == 1){ //shown
		$("#"+id).fadeTo('slow', 0);
	}
}

window.addEventListener('resize', function(event){
	defaults();
	create_timeline(); //timeline should always have the same total width as the window. // change this for mobile maybe. 
	graph_entries(extra_entries, true, extra_paper, draw_bar);
	graph_entries(academic_entries, false, academic_paper, draw_arc);
	graph_awards(honors, true, extra_paper);
	today_line([timeline_paper,extra_paper,academic_paper]);
	mobile_friendly();
});

function mobile_friendly(){
	child_hoverers = ".position,.location,.name";
	if (window.innerWidth < 770){//mobile
		//hide all lis, award details, and tag icons
		$(".role, .details, .td-tags").addClass("hidden"); 

		//make tds clickable//hide all lis, award details, and tag icons
		$(".academic_entry,.extra_entry,.award").find(child_hoverers).hover(
			function(){ $(this).siblings(child_hoverers).andSelf().addClass('underline'); }, 
			function(){ $(this).siblings(child_hoverers).andSelf().removeClass('underline'); });
		$('.academic_entry, .extra_entry').on('click', function(event){
			clicked_id = $(this).attr('id');
			$("#"+clicked_id + " td .role").toggleClass("hidden");
		});
		$('.award').on('click', function(event){
			clicked_id = $(this).attr('id');
			$("#"+clicked_id + " td .details").toggleClass("hidden");
		});

	}
	else{
		$(".role, .details, .td-tags").removeClass("hidden"); 
		$(".academic_entry, .extra_entry, .award").children("td").not(".td-dates").removeClass("clickable"); 
		$('.academic_entry, .extra_entry, .award').off('click');
		$('.academic_entry, .extra_entry, .award').find(child_hoverers).off('mouseenter mouseleave');
	}
}
function cv_entries(entries, type){
	//traverse entries to display correctly
	cur_html = "<table id='table-"+type+"'>";
	for (let e = 0; e < entries.length; e++){
		cur_entry = entries[e];
		keys = Object.keys(cur_entry);
		//cur_html = "<div class='entry'>";
		cur_html += "<tr class='"+type+" anchor' id='"+cur_entry["id"]+"'>";
		
		for (var k = 0; k < keys.length; k++){
			cur_key = keys[k];
			if (cur_key == "tags"){
				if (type == "academic_entry"){} //dont allow filter within academic
				else{
					tag_arr = cur_entry["tags"];
					cur_html += "<td class='td-tags'>";
					for (var t = 0; t < tag_arr.length; t++){
						cur_html += "<div class='cv-icon "+tag_arr[t]+"'> </div>";
						cur_html += "<div class='icon-text hidden'>"+tag_hash[tag_arr[t]]+" </div>";
					}
					cur_html += "</td>";
				}
			}
			else if (cur_key == "date_str"){
				cur_html += "<td class='td-dates'><div class='date_str'>"+cur_entry["date_str"]+"</div></td><td>";
			}
			else if (cur_key == "color"){
				//$("#"+cur_entry["id"]).css("color", cur_entry["color"]);

				style = $('<style> #'+cur_entry["id"]+' .company { color: '+cur_entry["color"]+'; }</style>');
				$('html > head').append(style);
			}
			else if ((cur_key == "id") || (cur_key == "link")){} //dont print 
			else if (cur_key == "roles"){
				cur_html += "<ul>";
				cur_roles = cur_entry.roles;
				for (var r = 0; r < cur_roles.length; r++){
					cur_html += "<li class='role'>"+cur_roles[r]+"</li>";
				}
				cur_html += "</ul>";
			}
			else if ((cur_key == "company") || (cur_key == "title")){
				if (cur_entry["link"]){
					link_start_html = "<a href='"+cur_entry["link"]+"'><div class='"+cur_key+" clickable'>";
					link_end_html = "</a>";
				}
				else{
					link_start_html = "<div class='"+cur_key+"'>";
					link_end_html = "";
				}
				cur_html += link_start_html+cur_entry[cur_key]+"</div>"+link_end_html;
			}
			else if(cur_key == "position" || cur_key == "location"|| cur_key == "name" || cur_key == "org"){
				cur_html += "<div class='"+cur_key+"'>"+cur_entry[cur_key]+"</div>";
			}
			
		}
		//cur_html += "</div>";
		cur_html += "</td></tr>";
	}
	cur_html += "</table>";
	$('#cvlisting').append(cur_html);
}

function cv_courses(course_arr){
	arr_courses = course_arr.sort(function(b, a){ //sort array
		// a_date = parse_date(a.date_num);
		// b_date = parse_date(b.date_num);

		return a.date.isBigger(b.date);
	});

	return_html = "<div id='course-table-head' class='table-head'>Selected Classes</div><table id='table-course_entry'>";
	for (var c = 0; c < arr_courses.length; c++){
		cur_course = arr_courses[c];
		cur_types = cur_course["type"];
		return_html += "<tr class='hidden'><td class='td-tags'>";
		for (var t = 0; t < cur_types.length; t++){
			cur_tag = cur_types[t];
			return_html += "<span class='cv-icon "+cur_tag+"'> </span>";
			return_html += "<div class='icon-text hidden'>"+tag_hash[cur_tag]+" </div>";
		}
		return_html += "</td>";
		return_html += "<td class='td-dates'>"+cur_course["date_str"]+"</td>";
		return_html += "<td class='details'><div class='title'>"+cur_course["title"]+"</div>"+cur_course["degree"]+"<br>"+cur_course["description"]+"</td>";
		return_html += "<td>"+cur_course["grade"]+"</td></tr>";
	}
	return_html += "</table>";
	$('#cvlisting').append(return_html);
	$("#course-table-head").addClass('hidden');
}

function filter_for_tag(){
	tags = $("#filter-select option:selected");
	bool_connector = $("#and-or-select option:selected").attr("id");
	if (tags.length == 0){
		$("tr").removeClass('hidden');//show all
		$("#course-table-head").addClass('hidden');
		$("#table-course_entry tr").addClass('hidden');
	}
	else{
		selected_tags = []; //collect tags (selected option ids) only
		tags.each(function(){ selected_tags.push(this.id); });

		$(".td-tags").each(function(){
			//traverses set of td-tags
			///returns all of the divs (icons) that are any of the selected classes
			
			if (bool_connector == "or"){ start_val = false; }//found one up to a given point in search?
			//and
			else{ start_val = true; }//found all up to the given point in the seach?
			
			//condition that causes break out of while loop
			function break_checker(arr_len){
				if (bool_connector == "or"){ return arr_len > 0; }
				else { return arr_len == 0; }; 
			}

			
			found = start_val;
			tag_i = 0;
			while ((found == start_val) && (tag_i < selected_tags.length)){
				if (break_checker($(this).children("."+selected_tags[tag_i]).length)){
					found = !start_val;
				}
				tag_i++;
			}

			if (found){ $(this).parent().removeClass('hidden'); }
			else{ $(this).parent().addClass('hidden'); }
		});

		//show table header if course table has shown elements
		if ($("#table-course_entry").find("tr").not(".hidden").length > 0){
			$("#course-table-head").removeClass('hidden');
		}
		else{
			$("#course-table-head").addClass('hidden');
		}
	}
}
