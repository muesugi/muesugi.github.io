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

function draw_arc(paper, direction, start_xpos, ypos, width, height, color){
		end_xpos = start_xpos + width;
		//path_str = "M"+ start_xpos_str + " 100 "+"T" +end_xpos_str + " 100"; //+ start_xpos_str + " 100 ";
		path_str = "M"+ start_xpos+ " "+ypos+" A"+(path_width/2)+" "+height+" 0 0 "+direction+" "+end_xpos+" "+ypos;
		//path_str = "M"+ start_xpos+ " 100 "+(path_width/4)+" 20 0 0 0 "+end_xpos+" 100";
		new_path = paper.path(path_str).attr({fill: color}); 

		return new_path;
}
function draw_bar(paper, direction, bl_xpos, bl_ypos, width, height, color){
		tl_ypos = bl_ypos - (direction)*height;
		return paper.rect(bl_xpos, tl_ypos, width, height).attr({fill: color}); 
}
function graph_entries(loe, upward, paper, drawing_function){
	//given a list of entries, displays all in specified paper obj
	total_width = window.innerWidth; //change this to update automatically up to a certain device width.
	year_width = total_width/(timeline_end_year-timeline_start_year+1);
	loe = entry_sort_height(loe, year_width);

	midpoint_checker = {}; //counts the number of entries so far with a given width. Used for staggering height.

	for (var e = 0; e < loe.length; e++){
		cur_entry = loe[e];
		start_xpos = cur_entry.startXPos(year_width);
		end_xpos = cur_entry.startXPos(year_width);
		mid_xpos = cur_entry.midXPos(year_width);
		path_width =  cur_entry.pathWidth(year_width);

		if (upward){ 
			ypos = paper.height; 
			direction = 1;
		} else{ 
			ypos = 0; 
			direction = 0;
		}

		rounded_midpoint = Math.ceil(mid_xpos / 500) * 500;

		height = cur_entry.height(year_width, midpoint_checker[rounded_midpoint]);
		console.log(height);
		if (midpoint_checker[rounded_midpoint]){
			//has already been seen
			midpoint_checker[rounded_midpoint] += 1;
		} else {
			midpoint_checker[rounded_midpoint] = 1;
		}


		if (!cur_entry.hasOwnProperty("color")){
			color_hue = 360*Math.random();
			fill_color = Raphael.hsl(color_hue,  40, 50);
			cur_entry.color = fill_color;
		}

		/** draw the thing based on the provided drawing function **/
		new_path = drawing_function(paper, direction, start_xpos, ypos, path_width, height, cur_entry["color"]);
		new_path.toBack();

		/** attach handlers **/
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
		xpos = cur_award.date.scaledPosition(year_width) + (month_pixels*Math.random() - month_pixels) ; //move at most a month away, +/-
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

function today_line(book){ //a list of papers
	today_obj = new DateDrawable().fromInt(today());
	total_width = window.innerWidth;
	year_width = total_width/(timeline_end_year-timeline_start_year+1);

	if (today_obj.year <= timeline_end_year){ //present day included in timeline
		line_xpos = today_obj.scaledPosition(year_width);

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