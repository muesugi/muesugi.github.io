//basic type definitions
function entry(tgs,dstr, dsn, den, i, c, p, loc, rs, lnk){
	tgs = tgs || []; //tgs arg is a list of applicable tags
	dstr = dstr || "Present";
	dsn = dsn || 2016;
	den = den || 2016;
	c = c || "";
	p = p || "";
	loc = loc || "";
	rs = rs || []; //roles is a list of strings
	lnk = lnk || "";

	new_entry = new Object({tags: tgs, date_str: dstr, date_start_num: dsn, date_end_num: den, id: i, company: c, position: p, location: loc, roles: rs, link: lnk});
	return new_entry;
}

function award(tgs, dstr, dnum, i, o, t, n, deets, lnk){
	n = n || "";
	deets = deets || [];
	//dnum is the award date
	lnk = lnk || "";

	//org: the organization who gives the honor/award
	//title: the title of the award
	// name: winner, runner-up, etc
	new_award = new Object({tags: tgs, date_str: dstr, date_num: dnum, id: i, org: o, title: t, name: n, details: deets, link: lnk})
	
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
entry([],"2015 - Present", 201509, 2019, "bu", "Brown University", "Bachelor of Arts in Computer Science and Comparative Literature", "Providence, RI", [], "http://www.brown.edu/academics"),
entry([],"2011 - 2015", 201109, 201506, "bhsecq", "Bard High School Early College Queens", "Bard College Associate of Arts in Liberal Arts; High School Diploma", "Long Island City, NY", [], "http://bhsec.bard.edu/queens/"),
entry([],"2008 - 2011", 200809, 201106, "ice","Institute for Collaborative Education", "Middle School"),
entry([],"2002 - 2008", 200209, 200806, "ps261", "PS 261", "Elementary School"),
];
extra_entries = [
entry(["learn", "cs", "women"],"Jul - Aug 2013", 20130708, 20130830, "gwc", "Girls Who Code", "Student", "New York, NY", 
	["Selected to participate in a full-time intensive (8 hours a day for 8 weeks) computer programming workshop for teen girls", 
	"Learned new skills and languages through various projects, 20 field trips, and 30+ speakers", 
	"Created projects from the idea to the product, and presented work with pitches and demos",
	"Built a sisterhood with other girls as part of a national movement"], "http://girlswhocode.com/"),
entry(["club", "cs", "teach"],"Feb 2014 - Jun 2015", 201402, 201506, "bhsecgwc", "Bard High School Early College Queens Girls Who Code Club", "Co-founder, Co-leader/Curriculum Director (Sept 2014 - Jun 2015)", "Long Island City, NY",
	["Helped members with curriculum using knowledge gained in the GWC summer program", 
	"Worked with two outside computer programmers to teach all interested students to code in a supportive, collaborative environment"]),
entry(["prof","cs", "teach"],"Sept 2013 - Jun 2014", 201309, 201406, "pixelaca", "Pixel Academy", "Intern", "Brooklyn, NY", 
	["Helped instructors teach kids different ways to be creative with technology (coding, games, 3D-design, etc) both one-on-one and through group workshops",
	"Worked on personal project under the instructors’ guidance"], "http://www.pixelacademy.org/"),
entry(["hum"],"Sept 2012 - Jun 2015", 201209, 201506, "gwn", "Girls Write Now", "Mentee", "New York, NY", 
	["Met with mentor once a week and established a constructive relationship",
	"Wrote fiction and memoir pieces individually between meetings",
	"Explored new fields of writing at group workshops held once a month",
	"Used feedback and criticism from others to improve"], "http://www.girlswritenow.org/"),
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
entry(["club","math"], "Oct 2014 - Jul 2015", 201410, 201507, "bhsecteams", "Bard High School Early College Queens TEAMS (Test of Engineering Aptitude, Mathematics, and Science) Club", "Team Member", "Long Island City, NY",
	["Recruited to this eight-member team by a classmate", 
	"Discussed and solved real-world problem sets", 
	"Participated in the state and national TEAMS Competitions in Texas"]),
entry(["natsci", "club"], "Nov 2014 - Jan 2015", 201411, 201501, "brainbee", "NY Region Brain Bee Competition", "School Representative (1 of 2)","Long Island City, NY",
	["Discussed neuroscience knowledge with other representative and professor during weekly meetings", 
	"Independently studied neuroscience information material and books to prepare for January 31 competition"],"http://www.dana.org/nycbrainbee/"),
entry(["club"], "Sept 2011 - Jun 2013", 201109, 201306, "bhsecqa", "Bard High School Early College Queens Queer-Straight Alliance", "Member (2011-2012), Co-leader (2012-13)","Long Island City, NY",
	["Cooperated and exchanged ideas with other leaders",
	"Planned events and meetings including workshops, discussions, and school community outreach"]),
entry(["prof","lang"], "Sept 2014 - Feb 2015", 201409, 201502, "jtranslation", "Private Translation", "", 
	["Worked for an independent filmmaker to translate raw footage in Japanese to English"]),
entry(["prof","hum","lang"], "Summers of 2010, 2011, 2012, 2013, and 2015", 201006, 201508, "upaf","Uno Port Art Films", "Assistant to Directors (2011 - Present)", "Okayama, Japan",
	["Participated in this annual mainly-outdoor non-profit film festival in Japan that shows cutting-edge films from around the world", 
	"Translated (English-Japanese, Japanese-English) and subtitled (using Final Cut Pro) a total of 5 films individually, while co-translating and co-subtitling 24 films",
	"Took charge of ticketing in the box office, sales of merchandise (T-shirts, bags), and records"], "http://unoportartfilms.org/en/"),
entry(["vol", "lang"], "Jul - Aug 2014", 20140721, 20140809, "obras", "Obras Sociales de Santo Hermano Pedro","Volunteer with Proyecto Nutricional", "Antigua Guatemala, Guatemala",
	["Cared for hospitalized babies and children (suffering from malnoutrition, Down Syndrome, and/or awaiting cleft palate surgery) by bottle feeding, carrying, and making them laugh",
	"Spoke to staff, parents and children exclusively in Spanish to communicate"]),
entry(["learn","lang"], "Jun - Aug 2014", 20140630, 20140808, "antiguena", "Spanish Academy Antigueña", "Student","Antigua Guatemala, Guatemala", 
	["Created a curriculum to study Spanish grammar and Guatemalan culture daily with native Guatemalan teachers",
	"Arranged a homestay with a Guatemalan family in Antigua Guatemala through this school"]),
entry(["prof", "teach"], "Dec 2010 - Jun 2013", 201012, 201306, "ktutoring", "Private Tutoring", "", "Brooklyn, NY",
	["Taught English, reading comprehension, and math for homework and in preparation for NY standardized tests",
	"Worked with neighborhood children, most of whom needed tutoring to advance to the next grade level"]),
entry(["vol","teach"], "Dec 2012 - Jun 2013", 201212, 201306, "starlearning", "Goddard Community Center, Star Learning Center", "Volunteer Tutor", "New York, NY",
	["Taught English and math to a 2nd grader at a NYC community center"], "http://www.goddard.org/page/tutoring-at-star-learning-center-58.html"),
entry(["cs","prof"],"Sept 2015 - Present", 201509, today(), "brownweb", "Brown WebServices", "Web Developer Intern", "Providence, RI", 
	["Use HTML/CSS/PHP and learn Drupal 6 and 7 to create and modify Brown University sites",
	"Work with a team of interns and staff to collaboratively solve problems, and tackle new fields such as design"], "http://www.brown.edu/information-technology/webservices/about/internships-web-services"),
entry(["club","hum", "lang"], "Sept 2015 - Present", 201509, today(), "brownaldus", "Aldus Journal of Translation", "Publicity Chair, Copy-Editor, Editor", "Providence, RI",
	["Use Facebook, the website, and email to promote the journal and get new editors as well as submissions", 
	"Meet weekly to review pieces of translation and decide their inclusion in our biyearly journal based on review of both the original work and the translation"], "https://www.facebook.com/aldusjournal/?fref=ts"),
entry(["club","hum", "lang"], "Sept 2015 - Present", 201509, today(), "brownjus", "Brown University US-Japan Education and Family Research Lab", "US Team Research Assistant, Japan Team Research Assistant", "Providence, RI",
	["Transcribe and analyze transcripts taken from interviews of Japanese and US mothers on their beliefs about their children and their futures, especially as related to education", 
	"Meet weekly for case analysis meets with each team to discuss individual mothers and how their beliefs may connect to greater systems in the world or specific to either country of interest"], "https://www.facebook.com/USJapanEducationLab"),
entry(["club","vol"], "Oct 2015 - Present", 201510, today(), "brownfrn", "Brown University Food Recovery Network", "Brown University Campus Chapter Representative", "Providence, RI",
	["Pick up unsold food from Brown eateries to donate to nearby RI shelters such as the Crossroads Rhode Island homeless shelter and the McAuley House",
	"Contribute to a culture of food waste awareness and help the chapter reach its current poundage (around 7000 - 9000 lbs) of food saved per semester"]),
];
honors = [
award(["cs", "women"], "2015", 201502, "ncwit", "National Center for Women & Information Technology", "Award for Aspirations in Computing New York City", "Winner", "", "https://www.aspirations.org/"),
award(["natsci"], "Feb 2015", 201502, "danabrain", "The Dana Foundation", "National Design a Brain Experiment Competition", "First Place", "Award for neurobiology grant proposal. <a href='portfolio.html#dana'>See more</a> about this project.", "http://danablog.org/2015/03/16/2015-winners-of-design-a-brain-experiment-competition/"),
award(["hum"], "2014", 2014, "mariewanek", "The Mid-Atlantic Association for Asian Studies", "Marie Wanek High School Essay Prize", "First Place", 'Awarded for for essay, “A Sexual WWII: The Key as an Allegory for the Relationship between Japan and the West.” Published online on the Mid-Atlantic Association for Asian Studies page.', "portfolio.html#maaras"),
award(["hum"], "Feb 2013", 201302, "scholastic", "Scholastic", "Arts and Writing Awards NYC", "Honorable Mention", "Awarded for Creative Writing piece <a href='portfolio.html#rooted'>'Rooted'</a>", "http://www.artandwriting.org/"),
award(["vol"], "2015", 201506, "milken", "Milken Institute, Milken Family Foundation", "Milken Scholar", "", "", "http://www.milkenscholars.org/scholars.taf"),
award(["cs", "math"], "2015", 201506, "popisilli", "Design Automation Conference", "P.O. Pistilli Undergraduate Scholarship", "1 of 2 National 2015 Scholars", "", "https://dac.com/content/po-pistilli-undergraduate-scholarship-0"),
award(["vol","club"], "2016", 201606, "kimandharold", "Kim and Harold Louie Family Foundation", "Scholar"),
award(["hum"], "2015", 201506, "penguinwriting", "Penguin Random House", "Creative Writing Competition", "Artist Recognition Award","", "http://www.penguinrandomhouse.com/creativewriting/"),
award(["vol","club"], "2015", 201506,"cumberland", "Cumberland Farms", "Scholar"),
];
school_honors = [
award(["cs"], "2015", 201506, "bhseccs", "Bard High School Early College Queens", "Computer Science Award", "Winner"),
award(["lang"], "2015", 201506, "bhsecspanish", "Bard High School Early College Queens", "Spanish Language Award", "Winner"),
award(["club"], "Sept 2013", 201309,"bhsecstudentlife", "Bard High School Early College Queens", "Student Life Award", "Award presented for involvement in the BHSECQ community at the stepping-up ceremony")
]

var timeline_paper;
var extra_paper;
var academic_paper;
var timeline_start_year;
var timeline_end_year;

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


function cv_entries(entries, type){
	//traverse entries to display correctly
	cur_html = "<table id='table-"+type+"'>";
	for (var e = 0; e < entries.length; e++){
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
		month_pixels = year_width/(12);
		xpos = position_from_date(year_width, parse_date(cur_award.date_num)) + (month_pixels*Math.random() - month_pixels) ; //move at most a month away, +/-
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
function date_subtraction(date_a, date_b){ //datea - dateb
	diff_year = date_a.year - date_b.year;
	diff_month = date_a.month - date_b.month;
	diff_day = date_a.day - date_b.day;
	return {year: diff_year, month: diff_month, day: diff_day};
}
function date_bigger(date_a, date_b){
	difference = date_subtraction(date_a, date_b);

	if (difference.year < 0){ return -1; }
	else if (difference.year > 0){ return 1; }
	else{
		if (difference.month < 0){ return -1; }
		else if (difference.month > 0){ return 1; }
		else{ 
			if (difference.day < 0){ return -1; }
			else if (difference.day > 0){ return 1; }
			else{ return 0; }
		}
	}
}

function entry_sort_duration(arr){
	//sort by end date
	arr.sort(function(b, a){
		a_duration = date_subtraction(parse_date(a.date_end_num), parse_date(a.date_start_num));
		b_duration = date_subtraction(parse_date(b.date_end_num), parse_date(b.date_start_num));

		return date_bigger(a_duration, b_duration);
	})
	return arr;
}
function entry_sort_year(arr){
	//sort by end date
	arr.sort(function(b, a){//switch to make ascending
		a_end = parse_date(a.date_end_num);
		b_end = parse_date(b.date_end_num);
		end_return = date_bigger(a_end, b_end);

		if (end_return !== 0){
			return end_return;
		}
		else{ //end dates are the same, comapre start dates
			//earlier start dates are better
			a_start = parse_date(a.date_start_num);
			b_start = parse_date(b.date_start_num);
			return date_bigger(b_start,a_start);
		}
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

	extra_paper = Raphael(document.getElementById('extracontainer'), "100%", extra_height);
	//height based on ps261 being the longest/tallest acadmic entry
	aca_tallest_end = position_from_date(year_width, parse_date(200806));
	aca_tallest_start = position_from_date(year_width, parse_date(200209));
	aca_height = 20 + (aca_tallest_end - aca_tallest_start)/10;
	academic_paper = Raphael(document.getElementById('academiccontainer'), "100%", aca_height);
}
/*function start(){}*/

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
courses = [
		course("Bard College Associate of Arts", "Spring 2015", 201501, ["cs", "teach"], "Practicum and Theory of Computer Science Education", "Single-Person Independent Study; Introduction to Java Teaching Assistant, etc", "A"),
		course("Bard College Associate of Arts", "Spring 2014", 201401, ["cs"], "Object-Oriented Programming", "Introduction to Object Oriented principles in Python", "A"),
		course("Bard College Associate of Arts", "Fall 2014", 201409,  ["hum"], "Ancient Japanese Literature", "", "A"),
		course("Bard College Associate of Arts", "Fall 2014", 201409, ["cs"], "Introduction to Java, Object-Oriented Programming", "Single-Person Independent Study", "A"),
		course("Bard College Associate of Arts", "Spring 2015", 201501,  ["hum"], "Modern Japanese Literature", "", "A"),
		course("Bard College Associate of Arts", "Spring 2014", 201409,  ["math"], "Calculus I", "", "A"),
		course("Bard College Associate of Arts", "Fall 2014", 201409,  ["math"], "Calculus II", "", "A"),
		course("Bard College Associate of Arts", "Fall 2013", 201309,  ["natsci"], "Organic Chemistry I", "", "A"),
		course("Bard College Associate of Arts", "Spring 2014", 201401,  ["natsci"], "Organic Chemistry II", "", "A"),
		course("Bard College Associate of Arts", "Spring 2014", 201401,  ["natsci"], "Organic Chemistry II", "", "A"),
		course("Bard College Associate of Arts", "Fall 2014", 201409,  ["natsci"], "Neurobiology", "", "A"),
		course("Bard College Associate of Arts", "Fall 2014", 201409,  ["lang", "hum"], "Cervantes' Don Quixote I", "", "A"),
		course("Bard College Associate of Arts", "Spring 2015", 201501,  ["lang", "hum"], "Cervantes' Don Quixote II", "", "A"),
	]
function course(d, dstr, dnum, ty, ttl, desc, score){
	return new Object({degree:d, date_str: dstr, date_num:dnum, type:ty, title:ttl, description: desc, grade: score});
}

function cv_courses(course_arr){
	arr_courses = course_arr.sort(function(b, a){ //sort array
		a_date = parse_date(a.date_num);
		b_date = parse_date(b.date_num);

		return date_bigger(a_date, b_date);
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
