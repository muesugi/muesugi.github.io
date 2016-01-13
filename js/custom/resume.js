function entry(dstr, dsn, den, c, p, rs){
	dstr = dstr || "Present";
	dsn = dsn || 2016;
	den = den || 2016;
	c = c || "";
	p = p || "";
	rs = rs || []; //roles is a list of strings

	new_entry = new Object({date_str: dstr, date_start_num: dsn, date_end_num: den, company: c, position: p, roles: rs});
	return new_entry;
}

//define all entries here
entries = [
entry("2015 - 2016", 2015, 2016, "Brown WebServices", "Web Developer Intern", ["Helped to create and support many sites", "Used Drupal CMS"]),
entry("Summer 2012", 20120405, 201502, "Smthing", "sat around", ["ate chips"])
];
function cv_entries(){
	//traverse entries to display correctly
	cur_html = "<table>";
	for (var e = 0; e < entries.length; e++){
		cur_entry = entries[e];
		keys = Object.keys(cur_entry);
		//cur_html = "<div class='entry'>";
		cur_html += "<tr>";
		for (var k = 0; k < keys.length; k++){
			cur_key = keys[k];
			if (cur_key.indexOf("date") >= 0){
				if (cur_key == "date_str"){
					cur_html += "<td><div class='date_str'>"+cur_entry[cur_key]+"</div></td><td>";
				}
				else{}
			}
			else if (cur_key != "roles"){
				cur_html += "<div class='"+cur_key+"'>"+cur_entry[cur_key]+"</div>";
			}
			else{
				cur_html += "<ul>";
				cur_roles = cur_entry.roles;
				for (var r = 0; r < cur_roles.length; r++){
					cur_html += "<li class='role'>"+cur_roles[r]+"</li>";
				}
				cur_html += "</ul>";
			}
		}
		//cur_html += "</div>";
		cur_html += "</td></tr>";
	}
	cur_html += "</table>";
	$('#cvlisting').append(cur_html);
}

function display_entries(){
	var extra_paper = Raphael(document.getElementById('extracontainer'), "100%", "100%");
	var academic_paper = Raphael(document.getElementById('academiccontainer'), "100%", "100%");
}
//new Date().getFullYear()
function create_timeline(end_year){
	start_year = 2006;
	end_year = end_year || new Date().getFullYear(); //default is current year
	
	$("#timeline").html(""); //empty/clear canvas first
	var timeline_paper = Raphael(document.getElementById('timeline'), "100%", "100%");

	total_width = window.innerWidth; //change this to update automatically up to a certain device width.
	year_width = total_width/(end_year-start_year+1);
	height = 50;

	var time_st = timeline_paper.set();
	i_year = start_year;
	i_xpos = 0;
	while(i_year <= end_year){
		new_year = timeline_paper.rect(i_xpos, 0, year_width, height);

		new_year_text = timeline_paper.text(i_xpos, 0, i_year.toString());
		text_xpos = i_xpos + (year_width - new_year_text.getBBox().width)/2;
		text_ypos = (height - new_year_text.getBBox().height)/2;
		new_year_text.attr({'x': text_xpos, 'y': text_ypos, 'text-anchor':'start', 'font-family':'Open Sans'});

		i_xpos = i_xpos + year_width;
		i_year++;
	}

	//time_st.attr({"text": "smthing","text-anchor": "middle", "fill": "red"});
/*
	for (var y = start_year; y <= end_year; y++){
		$("#timeline").append($("<div class='yearbox'>"+y+"</div>"));
	}*/
}

function start(){
	cv_entries(); display_entries(); create_timeline();
}
window.addEventListener('resize', function(event){
	create_timeline();
});

