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
function generate_entries(){
	//traverse entries to display correctly
	for (var e = 0; e < entries.length; e++){
		cur_entry = entries[e];
		keys = Object.keys(cur_entry);
		cur_html = "<div class='entry'>"
		for (var k = 0; k < keys.length; k++){
			cur_key = keys[k];
			console.log(cur_key);
			if ((cur_key == 'date_start_num') || (cur_key == 'date_end_num')){//ignore, for computation only
			}
			else if (cur_key != "roles"){
				cur_html += "<div class='"+cur_key+"'>"+cur_entry[cur_key]+"</div>"
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
		cur_html += "</div>";
		console.log(cur_html);
		$('#cvlisting').append(cur_html);
	}
}