class DateDrawable{
	constructor(){}

	fromInt(date_int){
		const num_string = date_int.toString();
		if (num_string.length >= 4){
			this.year = Number(num_string.substring(0, 4));
			if (num_string.length >= 6){
				this.month = Number(num_string.substring(4, 6));
				if (num_string.length >= 8){
					this.day =  Number(num_string.substring(6));
				}
			} 
		} else {
			//returns an empty object
			console.log("provided date is not valid, dates must contain at least a four character year");
		}

		return this;
	}

	fromYearMonthDay(yr, mnth, dy){
		this.year = yr;
		this.month = mnth;
		this.day = dy;

		return this;
	}

	scaledPosition(year_width){
		const month_width = year_width/12;
		const day_width = month_width/30; //may not be necessary; assuming 30 day month for simplicity

		let position = year_width*(this.year- window.timeline_start_year); //move to correct yearbox
		if (this.hasOwnProperty("month")){
			position += month_width*(this.month); //move to correct month
			if (this.hasOwnProperty("day")){
				position += day_width*(this.day); //move to correct day
			}
		}
		return position;
	}

	subtract(subtrahend){
		const diff_year = (this.year && subtrahend.year) ? this.year - subtrahend.year : 0;
		const diff_month = (this.month && subtrahend.month) ? this.month - subtrahend.month : 0;
		const diff_day = (this.day && subtrahend.day) ? this.day - subtrahend.day : 0;
		return new DateDrawable().fromYearMonthDay(diff_year, diff_month, diff_day);
	}

	isBigger(compareDate){
		const difference = this.subtract(compareDate);

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
}

class Entry{
	constructor(tgs,dstr, date_start_num, date_end_num, i, c, p, loc, rs, lnk){
		this.tags = tgs || []; //tgs arg is a list of applicable tags
		this.date_str = dstr || "Present";
		// this.date_start_num = dsn || 2017;
		// this.date_end_num = den = den || 2017;
		this.start = new DateDrawable().fromInt(date_start_num);
		this.end = new DateDrawable().fromInt(date_end_num);
		this.id = i;
		this.company = c = c || "";
		this.position = p || "";
		this.location = loc || "";
		this.roles = rs || []; //roles is a list of strings
		this.link = lnk || "";
	}
}

class Award{
	constructor(tgs, dstr, dnum, i, o, t, n, deets, lnk){
		this.tags = tgs || []; //tgs arg is a list of applicable tags
		this.date_str = dstr || "Present";
		this.date = new DateDrawable().fromInt(dnum || 2017);
		this.id = i;
		//org: the organization who gives the honor/award
		this.org = o || "";

		//title: the title of the award
		this.title = t || "";
		// name: winner, runner-up, etc
		this.name = n || "";
		this.details = deets || "";
		//dnum is the award date
		this.link = lnk || "";
	}
}

class Course{
	constructor(d, dstr, dnum, ty, ttl, desc, score){
		this.degree = d;
		this.date_str = dstr;
		this.date = new DateDrawable().fromInt(dnum);
		this.type = ty;
		this.title = ttl;
		this.description = desc;
		this.grade = score;
	}
}
//utility
function today(){
	//returns today's date in number (YYYYMMDD) format
	this_day = new Date();
	function leading_0(n){
		if (n < 10){
			return "0" + n.toString();
		}
		else { return n.toString(); }
	}

	return parseInt(this_day.getFullYear().toString() + leading_0(this_day.getMonth()) + leading_0(this_day.getDate()));
}