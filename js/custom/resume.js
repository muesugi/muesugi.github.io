//basic type definitions
function entry(tgs,dstr, dsn, den, i, c, p, loc, rs){
	tgs = tgs || []; //tgs arg is a list of applicable tags
	dstr = dstr || "Present";
	dsn = dsn || 2016;
	den = den || 2016;
	c = c || "";
	p = p || "";
	loc = loc || "";
	rs = rs || []; //roles is a list of strings

	new_entry = new Object({tags: tgs, date_str: dstr, date_start_num: dsn, date_end_num: den, id: i, company: c, position: p, location: loc, roles: rs});
	return new_entry;
}

function award(tgs, dstr, dnum, i, o, t, n, deets){
	n = n || "";
	deets = deets || [];
	//dnum is the award date

	//org: the organization who gives the honor/award
	//title: the title of the award
	// name: winner, runner-up, etc
	new_award = new Object({tags: tgs, date_str: dstr, date_num: dnum, id: i, org: o, title: t, name: n, details: deets})
	
	return new_award;
}
function today(){
	//returns today's date in number (YYYYMMDD) format
	this_day = new Date();
	function leading_0(n){
		if (n < 10){
			return "0" + n.toString();
		}
		else { return n.toString(); }
	}

	return this_day.getFullYear().toString() + leading_0(this_day.getMonth()) + leading_0(this_day.getDate());
}

//define all entries here
academic_entries = [
entry([],"2015 - Present", 201509, 2019, "bu", "Brown University", "Undergraduate School"),
entry([],"2011 - 2015", 201109, 201506, "bhsecq", "Bard High School Early College Queens", "High School"),
entry([],"2008 - 2011", 200809, 201106, "ice","Institute for Collaborative Education", "Middle School"),
entry([],"2002 - 2008", 200209, 200806, "ps261", "PS 261", "Elementary School"),
];
extra_entries = [
entry(["cs","prof"],"Sept 2015 - Present", 201509, today(), "brownweb", "Brown WebServices", "Web Developer Intern", "Providence, RI", 
	["Use HTML/CSS/PHP and learn Drupal 6 and 7 to create and modify Brown University sites",
	"Work with a team of interns and staff to collaboratively solve problems, and tackle new fields such as design"]),
entry(["learn", "cs", "women"],"Jul - Aug 2013", 20130708, 20130830, "gwc", "Girls Who Code", "Student", "New York, NY", 
	["Selected to participate in a computer programming workshop for teen girls", 
	"Learned new skills and languages through various projects, 20 field trips, and 30+ speakers", 
	"Created projects from the idea to the product, and presented work with pitches and demos",
	"Built a sisterhood with other girls as part of a national movement"]),
entry(["club", "cs", "teach"],"Feb 2014 - Jun 2015", 201402, 201506, "bhsecgwc", "Bard High School Early College Queens Girls Who Code Club", "Co-founder, Co-leader/Curriculum Director (Sept 2014 - Jun 2015)", "Long Island City, NY",
	["Helped members with curriculum using knowledge gained in the GWC summer program", 
	"Worked with two outside computer programmers to teach all interested students to code in a supportive, collaborative environment"]),
entry(["prof","cs", "teach"],"Sept 2013 - Jun 2014", 201309, 201406, "pixelaca", "Pixel Academy", "Intern", "Brooklyn, NY", 
	["Helped instructors teach kids different ways to be creative with technology (coding, games, 3D-design, etc) both one-on-one and through group workshops",
	"Worked on personal project under the instructors’ guidance"]),
entry(["hum"],"Sept 2012 - Jun 2015", 201209, 201506, "gwn", "Girls Write Now", "Mentee", "New York, NY", 
	["Met with mentor once a week and established a constructive relationship",
	"Wrote fiction and memoir pieces individually between meetings",
	"Explored new fields of writing at group workshops held once a month",
	"Used feedback and criticism from others to improve"]),
entry(["learn"], "Apr 2005 - Jun 2015", 200504, 201506, "tachibana", "Tachibana Japanese Dance Group", "Dancer", "New York Branch, NY", 
	["Learned the art of traditional Japanese dance while coordinating with other dancers",
	"Performed 4-5 times a year at the annual recital, New Year’s dance ritual, and other events at elderly homes and cultural venues in New York"]),
entry(["club", "hum"], "Oct 2012 - Jun 2015", 201210, 201506, "bhsecgov", "Bard High School Early College Queens Student Government", "Minute-taker (all), Elected Advisory Representative (Sept 2013 - Jun 2015)", "Long Island City, NY",
	["Listened and responded to others’ opinions", "Recorded ideas and oppositions in a clear, concise way",
	"Created the minute-taker role for organization and school community awareness"]),
entry(["club", "teach"], "Oct 2012 - Jun 2015", 201210, 201506, "bhsecpeertutor", "Bard High School Early College Queens Peer Tutoring", "Biology (Fall 2012), Writing/English (all), Math (all) peer tutor", "Long Island City, NY",
	["Helped fellow students with homework, test preparation and more"]),
entry(["hum"], "Feb 2012 - Dec 2013, Sept 2014 - Feb 2015", 201202, 201502, "bhseclibrary", "Bard High School Early College Queens Library", "Intern","Long Island City, NY",
	["Helped students at the desk by checking books in and out, helping with homework, and directing students to the right section of the library",
	"Recommended, ordered, and catalogued new books",
	"Familiarized myself with library software"]),
entry(["club","cs"], "Oct 2014 - Jul 2015", 201410, 201507, "bhsecteams", "Bard High School Early College Queens TEAMS (Test of Engineering Aptitude, Mathematics, and Science) Club", "Member", "Long Island City, NY",
	["Recruited to this eight-member team by a classmate", 
	"Discussed and solved real-world problem sets", 
	"Participated in the state and national TEAMS Competitions"]),
entry(["neuro", "club"], "Nov 2014 - Jan 2015", 201411, 201501, "brainbee", "NY Region Brain Bee Competition", "School Representative (1 of 2)","Long Island City, NY",
	["Discussed neuroscience knowledge with other representative and professor during weekly meetings", 
	"Independently studied neuroscience information material and books to prepare for January 31 competition"]),
entry(["club"], "Sept 2011 - Jun 2013", 201109, 201306, "bhsecqa", "Bard High School Early College Queens Queer-Straight Alliance", "Member (2011-2012), Co-leader (2012-13)","Long Island City, NY",
	["Cooperated and exchanged ideas with other leaders",
	"Planned events and meetings including workshops, discussions, and school community outreach"]),
entry(["prof","lang"], "Sept 2014 - Feb 2015", 201409, 201502, "jtranslation", "Private Translation", "", 
	["Worked for an independent filmmaker to translate raw footage in Japanese to English"]),
entry(["prof","hum","lang"], "Summers of 2010, 2011, 2012, 2013, and 2015", 201006, 201508, "upaf","Uno Port Art Films", "Assistant to Directors (2011 - Present)", "Okayama, Japan",
	["Participated in this annual mainly-outdoor non-profit film festival in Japan that shows cutting-edge films from around the world", 
	"Translated (English-Japanese, Japanese-English) and subtitled (using Final Cut Pro) a total of 5 films individually, while co-translating and co-subtitling 24 films",
	"Took charge of ticketing in the box office, sales of merchandise (T-shirts, bags), and records"]),
entry(["vol"], "Jul - Aug 2014", 20140721, 20140809, "obras", "Obras Sociales de Santo Hermano Pedro","Volunteer with Proyecto Nutricional", "Antigua Guatemala, Guatemala",
	["Cared for hospitalized babies and children by bottle feeding, carrying, and playing with them",
	"Spoke to staff, parents and children exclusively in Spanish to communicate"]),
entry(["prof", "teach"], "Dec 2010 - Jun 2013", 201012, 201306, "ktutoring", "Private Tutoring", "", "Brooklyn, NY",
	["Taught English, reading comprehension, and math for homework and in preparation for NY standardized tests",
	"Worked with neighborhood children, most of whom needed tutoring to advance to the next grade level"]),
entry(["vol","teach"], "Dec 2012 - Jun 2013", 201212, 201306, "starlearning", "Goddard Community Center, Star Learning Center", "Volunteer Tutor", "New York, NY",
	["Taught English and math to a 2nd grader at community center"]),
entry(["club","hum", "lang"], "Sept 2015 - Present", 201509, today(), "brownaldus", "Aldus Journal of Translation", "Publicity Chair, Copy-Editor, Editor", "Providence, RI",
	["Use Facebook, the website, and email to promote the journal and get new editors as well as submissions", 
	"Meet weekly to review pieces of translation and decide their inclusion in our biyearly journal"]),
entry(["club","hum", "lang"], "Sept 2015 - Present", 201509, today(), "brownjus", "Brown University US-Japan Education and Family Research Lab", "US Team Member, Japan Team Member", "Providence, RI",
	["Transcribe and analyze transcripts taken from interviews of Japanese and US mothers on their beliefs about their children and their futures, especially as related to education", 
	"Meet weekly for case analysis meets with each team to discuss individual mothers and families"])
];
honors = [
award(["cs", "women"], "2015", 201502, "ncwit", "National Center for Women & Information Technology", "Award for Aspiration in Computing New York City", "Winner"),
award(["cs"], "2015", 201506, "bhseccs", "Bard High School Early College Queens", "Computer Science Award", "Winner"),
award(["lang"], "2015", 201506, "bhsecspanish", "Bard High School Early College Queens", "Spanish Language Award", "Winner"),
award(["neuro"], "Feb 2015", 201502, "danabrain", "The Dana Foundation", "National Design a Brain Experiment Competition", "First Place", "Award for neurobiology grant writing"),
award(["hum"], "2014", 2014, "mariewanek", "The Mid-Atlantic Association for Asian Studies", "Marie Wanek High School Essay Prize", "First Place", 'Awarded for for essay, “A Sexual WWII: The Key as an Allegory for the Relationship between Japan and the West.” Published online on the Mid-Atlantic Association for Asian Studies page.'),
award(["hum"], "Feb 2013", 201302, "scholastic", "Scholastic", "Arts and Writing Awards NYC", "Honorable Mention", "for Rooted"),
award(["club"], "Sept 2013", 201309,"bhsecstudentlife", "Bard High School Early College Queens", "Student Life Award", "Award presented for involvement in the BHSECQ community at the stepping-up ceremony"),
award(["vol"], "2015", 201506, "milken", "Milken Scholars", "Scholar"),
award(["cs"], "2015", 201506, "popisilli", "Design Automation Conference", "P.O. Pistilli Scholarship Awardee"),
award(["vol","club"], "2016", 201606, "kimandharold", "Kim and Harold Louie Family Foundation", "Scholar"),
award(["hum"], "2015", 201506, "penguinwriting", "Penguin Random House", "Creative Writing Competition", "Artist Recognition Award"),
award(["vol","club"], "2015", 201506,"cumberland", "Cumberland Farms", "Scholar"),
]

var timeline_paper;
var extra_paper;
var academic_paper;
var timeline_start_year;
var timeline_end_year;

var tag_hash = 
{"cs":"Computer Science", 
	"hum": "Humanities", 
	"learn": "Learning", 
	"teach": "Teaching", 
	"club": "Clubs",
	"lang": "Language", 
	"prof": "Professional",
	"vol": "Volunteer",
	"neuro": "Neurobiology"};


function cv_entries(entries, type){
	//traverse entries to display correctly
	cur_html = "<table id='table-"+type+"'>";
	for (var e = 0; e < entries.length; e++){
		cur_entry = entries[e];
		keys = Object.keys(cur_entry);
		//cur_html = "<div class='entry'>";
		cur_html += "<tr class='"+type+" anchor' id='"+cur_entry["id"]+"'>";
		/*cur_html += "<td><div class='date_str'>"+cur_entry["date_str"]+"</div></td>";
		cur_html += "<td><div class='company'>"+cur_entry["company"]+"</div>";
		cur_html += "<div class='position'>"+cur_entry["position"]+"</div>";
		cur_html += "<div class='location'>"+cur_entry["location"]+"</div>";
		cur_html += "<ul>";
		if (cur_entry.hasOwnProperty("roles")){
			cur_roles = cur_entry["roles"];
			console.log(cur_roles);
			for (var r = 0; r < cur_roles.length; r++){
				cur_html += "<li class='role'>"+cur_roles[r]+"</li>";
			}
			cur_html += "</ul>";
		}
		cur_html += "</td></tr>";

		$("#"+cur_entry["id"]+".company").css("color", Raphael.hsb2rgb(cur_entry["color"]));
		
		*/
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
			else if (cur_key.indexOf("date") >= 0){
				if (cur_key == "date_str"){
					cur_html += "<td class='td-dates'><div class='date_str'>"+cur_entry["date_str"]+"</div></td><td>";
				}
				else{}
			}
			else if (cur_key == "color"){
				//$("#"+cur_entry["id"]).css("color", cur_entry["color"]);

				style = $('<style> #'+cur_entry["id"]+' .company { color: '+cur_entry["color"]+'; }</style>');
				$('html > head').append(style);
			}
			else if (cur_key == "id"){} //dont print 
			else if (cur_key == "roles"){
				cur_html += "<ul>";
				cur_roles = cur_entry.roles;
				for (var r = 0; r < cur_roles.length; r++){
					cur_html += "<li class='role'>"+cur_roles[r]+"</li>";
				}
				cur_html += "</ul>";
			}
			else{
				cur_html += "<div class='"+cur_key+"'>"+cur_entry[cur_key]+"</div>";
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
	
	/*$("#timeline").html(""); //empty/clear canvas first
	timeline_paper = Raphael(document.getElementById('timeline'), "100%", "50");*/

	total_width = window.innerWidth; //change this to update automatically up to a certain device width.
	year_width = total_width/(timeline_end_year-timeline_start_year+1);
	height = 30;

	var time_st = timeline_paper.set();
	i_year = timeline_start_year;
	i_xpos = 0;
	while(i_year <= timeline_end_year){
		new_year = timeline_paper.rect(i_xpos, 0, year_width, height).attr("fill", "#D3D3D3");

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
		cur_entry = loe[e];

		full_date_start = cur_entry["date_start_num"] || timeline_start_year; //duration defaults to the whole timeline 
		full_date_end = cur_entry["date_end_num"] || new Date().getFullYear();

		//use parse_date to separate years, months, days as applicable
		start_date_obj = parse_date(full_date_start); 
		end_date_obj = parse_date(full_date_end);
		start_xpos = position_from_date(year_width, start_date_obj);

		end_xpos = position_from_date(year_width, end_date_obj);
		mid_xpos = (end_xpos + start_xpos)/2;
		path_width = end_xpos - start_xpos;
		if (upward){ ypos = paper.height; direction = 1;} else{ ypos = 0; direction = 0;}

		height = path_width/10 + 10*Math.random();
		console.log(path_width/10 + 10, cur_entry["id"]);
		//path_str = "M"+ start_xpos_str + " 100 "+"T" +end_xpos_str + " 100"; //+ start_xpos_str + " 100 ";
		path_str = "M"+ start_xpos+ " "+ypos+" A"+(path_width/2)+" "+height+" 0 0 "+direction+" "+end_xpos+" "+ypos;
		//path_str = "M"+ start_xpos+ " 100 "+(path_width/4)+" 20 0 0 0 "+end_xpos+" 100";

		if (!cur_entry.hasOwnProperty("color")){
			color_hue = 360*Math.random();
			fill_color = Raphael.hsl(color_hue,  40, 50);
			cur_entry["color"] = fill_color;
		}

		new_path = paper.path(path_str).attr({fill: cur_entry["color"]}); 
		
		new_path.node.onclick = graph_click(cur_entry);
		//binding function has to be called separately bc all bindings depend on cur_entry 

		if (upward){ text_ypos = ypos - height - 10; } 
		else{ text_ypos = ypos + height + 10;}
		path_text = paper.text(mid_xpos, text_ypos, cur_entry["company"]);
		path_text.hide();//start hidden
		
		new_path.hover(
			graph_hover_show(path_text),
			graph_hover_hide(path_text));
	}
}
function graph_click(entry_obj){
	click_func = function (){scrollTo(entry_obj["id"])};
	return click_func; //ready to be called later
	//scrollTo is in custom.js
}
function graph_hover_show(path_text_obj){
	hover_show_func = function (){path_text_obj.show()};
	return hover_show_func;
}
function graph_hover_hide(path_text_obj){
	hover_hide_func = function (){path_text_obj.hide()};
	return hover_hide_func;
}


function graph_awards(loa, upward, paper){
	total_width = window.innerWidth; //change this to update automatically up to a certain device width.
	year_width = total_width/(timeline_end_year-timeline_start_year+1);

	for (var a = 0; a < loa.length; a++){
		cur_award = loa[a];
		xpos = position_from_date(year_width, parse_date(cur_award.date_num));
		mag = 30;
		if (upward){ start_ypos = paper.height; mag = -1*mag; } else{ start_ypos = 0;}
		path_str = "M"+xpos+" "+start_ypos+"v"+mag;

		new_path = paper.path(path_str).attr("stroke-width", 3);
		new_path.node.onclick = graph_click(cur_award);

		if (upward){ text_ypos = start_ypos - 30 - 10; } 
		else{ text_ypos = start_ypos + 30 + 10;}
		path_text = paper.text(xpos, text_ypos, cur_award["org"]+"\n"+cur_award["title"]);
		
		path_text.hide();
		new_path.hover(
			graph_hover_show(path_text),
			graph_hover_hide(path_text));
	}

}
function position_from_date(year_width, date_obj){
	//helper for graph_entries, 
	//calculates a postion based on a date given and the scale (year_width)
	month_width = year_width/12;
	day_width = month_width/30; //may not be necessary; assuming 30 day month for simplicity

	position = year_width*(date_obj["year"] - window.timeline_start_year); //move to correct yearbox
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

function entry_sort_duration(arr){
	//sort by end date
	arr.sort(function(b, a){
		a_duration_year = parse_date(a.date_end_num).year - parse_date(a.date_start_num).year;
		b_duration_year = parse_date(b.date_end_num).year - parse_date(b.date_start_num).year;

		if (a_duration_year < b_duration_year){
			return -1;
		}
		else if (a_duration_year > b_duration_year){
			return 1;
		}
		else{
			a_duration_month = parse_date(a.date_end_num).month - parse_date(a.date_start_num).month;
			b_duration_month = parse_date(b.date_end_num).month - parse_date(b.date_start_num).month;
			if (a_duration_month < b_duration_month){ return -1; }
			else if (a_duration_month > b_duration_month){ return 1; }
			else{
				a_duration_day = parse_date(a.date_end_num).day - parse_date(a.date_start_num).day;
				b_duration_day = parse_date(b.date_end_num).day - parse_date(b.date_start_num).day;
				if (a_duration_day < b_duration_day){ return -1; }
				else if (a_duration_day > b_duration_day){ return 1; }
				else { return 0; }
			}

		}
	})
	return arr;
}
function entry_sort_year(arr){
	//sort by end date
	arr.sort(function(a, b){
	 return parse_date(b.date_end_num).year - parse_date(a.date_end_num).year;
	})
	return arr;
}
function award_arr_sort(arr){
	//sort by end date
	arr.sort(function(a, b){
	 return parse_date(b.date_num).year - parse_date(a.date_num).year;
	})
	return arr;
}
function today_line(book){ //a list of papers
	today_obj = parse_date(today());
	total_width = window.innerWidth;
	year_width = total_width/(timeline_end_year-timeline_start_year+1);

	if (today_obj.year <= timeline_end_year){ //present day included in timeline
		line_xpos = position_from_date(year_width, today_obj);

		for (var p = 0; p < book.length; p++){
			paper = book[p];
			
			paper.rect(line_xpos+1, 0, total_width - (line_xpos + 1), paper.height).attr({"fill": "white", "fill-opacity": ".8", "stroke": "none"});

			if (p + 1 == book.length){ //last iteration
				p_line = paper.path("M"+line_xpos+" 0v"+(paper.height - 14)).attr("stroke", "#88382D");
				paper.text(line_xpos, paper.height - 6.5, "Today").attr({"fill": "#88382D", "font-family": "Open Sans"});
			}
			else{
				p_line = paper.path("M"+line_xpos+" 0v"+paper.height).attr("stroke", "#88382D");
			}
		}
	}
}
function defaults(){
	$("#timeline").html(""); //empty/clear canvas first
	$("#extracontainer").html("");
	$("#academiccontainer").html("");
	timeline_paper = Raphael(document.getElementById('timeline'), "100%", "20");

	year_width = window.innerWidth/(timeline_end_year-timeline_start_year+1);
	//height based on tachibana being the longest/tallest extra entry
	extra_tallest_end = position_from_date(year_width, parse_date(201506));
	extra_tallest_start = position_from_date(year_width, parse_date(200504));
	extra_height = 30 + (extra_tallest_end - extra_tallest_start)/10;
	console.log("extra_height", year_width);

	extra_paper = Raphael(document.getElementById('extracontainer'), "100%", extra_height);
	//height based on ps261 being the longest/tallest acadmic entry
	aca_tallest_end = position_from_date(year_width, parse_date(200806));
	aca_tallest_start = position_from_date(year_width, parse_date(200209));
	aca_height = 20 + (aca_tallest_end - aca_tallest_start)/10;
	academic_paper = Raphael(document.getElementById('academiccontainer'), "100%", aca_height);
}
function start(){
	//define all entries here
	timeline_start_year = 2006;
	timeline_end_year = new Date().getFullYear(); //default is current year

	//set defaults for globals:
	defaults();

	create_timeline();

	graph_entries(entry_sort_duration(extra_entries), true, extra_paper);
	graph_entries(academic_entries, false, academic_paper);
	graph_awards(honors, true, extra_paper);
	today_line([timeline_paper,extra_paper,academic_paper]);

	cv_entries(entry_sort_year(academic_entries), "academic_entry"); 

	/*create filter box/search bar*/

	filter_box_html = '<div id="filter"><select id="filter-select" name="select-boxes" multiple="multiple">';
	option_ids = Object.keys(tag_hash);
	//hash so that it's easier to add tags in the future

	for (var k = 0; k < option_ids.length; k++){
		cur_id = option_ids[k];//computer name
		cur_val = tag_hash[cur_id];//pretty text
		filter_box_html += "<option id='"+cur_id+"'>"+cur_val+"</option>";
	}
	filter_box_html += "</select>";
    filter_box_html += "<select id='and-or-select'><option id='or' selected='selected'>OR</option><option id='and'>AND</option></select>"
	filter_box_html += "</div>";
	$("#cvlisting").append(filter_box_html);

	$("#filter-select").select2(
		{placeholder: "Filter Experiences and Honors",
    	allowClear: true,
    	tokenSeparators: [",", " "]}
    );
    $("#and-or-select").select2();
    $("#filter-select, #and-or-select").on("change",function(event){
    	filter_for_tag();
    })  
    /* end create filter box/search bar*/

	cv_entries(entry_sort_year(extra_entries), "extra_entry"); 
	cv_entries(award_arr_sort(honors), "award"); 
	mobile_friendly();

	//event listeners

	$("#to-top-button").on('click',function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	$("#to-download-button").on('click',function(){ scrollTo("download");
	});

	top_offset = 200;
	download_offset = 700;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() < top_offset) { //before top offset
        	fade_out_if_visible("to-top-button");
        	fade_in_if_hidden("to-download-button");
        }
        //after download offset mark
        else if (jQuery(this).scrollTop() > ($(document).height() - download_offset)){
        	fade_out_if_visible("to-download-button");
        	fade_in_if_hidden("to-top-button");
        }
      	//between two marks
        else{ 
        	fade_in_if_hidden("to-download-button");
        	fade_in_if_hidden("to-top-button");
   		 }
    });

	$(".cv-icon").hover(function(event){
		$(this).next(".icon-text").toggleClass('hidden');
	})

	$(".cv-icon").on('click',function(event){
		icon_tag = $(this).attr('class').substring(8);
		$("option#"+icon_tag).attr('selected','selected');
		$("#filter-select").select2("destroy");
		$("#filter-select").append("<option value='1'>Text</option>");
		$("#filter-select").select2(
			{placeholder: "Filter Experiences and Honors",
	    	allowClear: true,
	    	tokenSeparators: [",", " "]}
	    );
	    filter_for_tag();
	})

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
	graph_entries(entry_sort_duration(extra_entries), true, extra_paper);
	graph_entries(academic_entries, false, academic_paper);
	graph_awards(honors, true, extra_paper);
	today_line([timeline_paper,extra_paper,academic_paper]);
	mobile_friendly();
});

function mobile_friendly(){
	child_hoverers = ".company,.position,.location, .org,.title,.name";
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

function filter_for_tag(){
	tags = $("#filter-select option:selected");
	bool_connector = $("#and-or-select option:selected").attr("id");
	if (tags.length == 0){
		$("tr").removeClass('hidden');//show all
	}
	else{
		selected_tags = []; //collect tags (selected option ids) only
		tags.each(function(){ selected_tags.push(this.id); });
		console.log(selected_tags);

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

			console.log(found);
			if (found){ $(this).parent().removeClass('hidden'); }
			else{ $(this).parent().addClass('hidden'); }

		});
	}
}
