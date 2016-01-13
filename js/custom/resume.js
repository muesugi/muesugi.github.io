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
entry("Summer 2012", 20120405, 20120605, "Smthing", "sat around", ["ate chips"])
];

var timeline_paper;
var extra_paper;
var academic_paper;
var timeline_start_year;
var timeline_end_year;

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

function create_timeline(end_year){
	timeline_end_year = end_year || timeline_end_year;
	
	$("#timeline").html(""); //empty/clear canvas first
	timeline_paper = Raphael(document.getElementById('timeline'), "100%", "50");

	total_width = window.innerWidth; //change this to update automatically up to a certain device width.
	year_width = total_width/(timeline_end_year-timeline_start_year+1);
	height = 50;

	var time_st = timeline_paper.set();
	i_year = timeline_start_year;
	i_xpos = 0;
	while(i_year <= timeline_end_year){
		new_year = timeline_paper.rect(i_xpos, 0, year_width, height);

		new_year_text = timeline_paper.text(i_xpos, 0, i_year.toString());
		text_xpos = i_xpos + (year_width - new_year_text.getBBox().width)/2;
		text_ypos = (height - new_year_text.getBBox().height)/2;
		new_year_text.attr({'x': text_xpos, 'y': text_ypos, 'text-anchor':'start', 'font-family':'Open Sans'});

		i_xpos = i_xpos + year_width;
		i_year++;
	}
}

function graph_entries(loe, upward, paper){
	//given a list of entries, displays all in specified paper obj

	total_width = window.innerWidth; //change this to update automatically up to a certain device width.
	year_width = total_width/(timeline_end_year-timeline_start_year+1);

	for (var e = 0; e < loe.length; e++){
		full_date_start = loe[e]["date_start_num"] || timeline_start_year; //duration defaults to the whole timeline 
		full_date_end = loe[e]["date_end_num"] || new Date().getFullYear();

		//use parse_date to separate years, months, days as applicable
		start_date_obj = parse_date(full_date_start); 
		end_date_obj = parse_date(full_date_end);

		start_xpos = position_from_date(year_width, start_date_obj);
		end_xpos = position_from_date(year_width, end_date_obj);
		//mid_xpos = (end_xpos + start_xpos)/2;
		path_width = end_xpos - start_xpos;

		if (upward){ ypos = 180; } else{ ypos = 0;}
		//path_str = "M"+ start_xpos_str + " 100 "+"T" +end_xpos_str + " 100"; //+ start_xpos_str + " 100 ";
		path_str = "M"+ start_xpos+ " "+ypos+" A"+(path_width/2)+" 20 0 0 0 "+end_xpos+" "+ypos;
		//path_str = "M"+ start_xpos+ " 100 "+(path_width/4)+" 20 0 0 0 "+end_xpos+" 100";
		console.log(path_str);

		new_path = paper.path(path_str).attr({fill: "red"}); 
		if (upward){
			new_path.transform("r180");
		}
	}

}
function position_from_date(year_width, date_obj){
	//helper for graph_entries, 
	//calculates a postion based on a date given and the scale (year_width)
	month_width = year_width/12;
	day_width = month_width/30; //may not be necessary; assuming 30 day month for simplicity

	position = year_width*(date_obj["year"] - window.timeline_start_year); //move to correct yearbox
	console.log(window.timeline_start_year);
	if (date_obj.hasOwnProperty("month")){
		position += month_width*(date_obj["month"]); //move to correct month
		if (date_obj.hasOwnProperty("day")){
			position += day_width*(date_obj["day"]); //move to correct day
		}
	}
	return position;
}
function parse_date(number){
	//helper for graph_entries, 
	//given a number in format YYYY, YYYYMM, or YYYYMMDD, returns an object with
	// year, month, and date attributes as needed.

	date = new Object();
	num_string = number.toString();
	if (num_string.length >= 4){
		date["year"] = Number(num_string.substring(0, 4));
		if (num_string.length >= 6){
			date["month"] = Number(num_string.substring(4, 6));
			if (num_string.length >= 8){
				date["day"]  = Number(num_string.substring(6, 8));
			}
		}
	}
	else{
		//returns an empty object
		console.log("provided date is not valid, dates must contain at least a four character year");
	}
	return date;
}

function start(){
	//set defaults for globals:
	//define all entries here
	timeline_paper = Raphael(document.getElementById('timeline'), "100%", "50");
	extra_paper = Raphael(document.getElementById('extracontainer'), "100%", "200");
	academic_paper = Raphael(document.getElementById('academiccontainer'), "100%", "200");

	timeline_start_year = 2006;
	timeline_end_year = new Date().getFullYear(); //default is current year

	console.log(timeline_start_year);


	cv_entries(); create_timeline();
	graph_entries(entries, true, extra_paper);
	graph_entries(entries, false, academic_paper);
}
window.addEventListener('resize', function(event){
	create_timeline(); //timeline should always have the same total width as the window. // change this for mobile maybe. 

});

