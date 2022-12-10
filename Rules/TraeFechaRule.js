var clientAPI;

function system_date(dateString, formatTokens) {
  var theDate = dateString ? new Date(dateString) : new Date();

  var dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var fulldayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var monOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var keywords = fulldayOfWeek.concat(monthOfYear).concat(monOfYear).concat(dayOfWeek);
  var reOr = "|";

  // Returns keywords by regular expression format.
  function keywordsRegexString() {
  	var regexString = keywords[0];
  	for (var i = 1; i < keywords.length; i++) {
  		regexString = regexString.concat(reOr + keywords[i]);
  	}
  	return regexString;
  }

  // Returns string by replacing oldStr with newStr but escape keywords.
  function replaceEscapeKeywords(match, oldStr, newStr, escapeWords) {
  	if (escapeWords.indexOf(match) != -1) {
  		return match;
  	} else if (match == oldStr) {
  		return newStr;
  	} else {
  		return oldStr;
  	}
  }

  // Returns string by replacing oldStr with new values returned by parameter function.
  function replace(srcStr, oldStr, newStrFunc) {
  	var re = new RegExp(keywordsRegexString() + reOr + oldStr, "g");
  	var newStr = newStrFunc();
  	return srcStr.replace(re, function(match) {
  		return replaceEscapeKeywords(match, oldStr, newStr, keywords);
  	});
  }

  var transformMap = {
  	"dddd": function() {
  		return fulldayOfWeek[theDate.getDay()];
  	},
  	"ddd": function() {
  		return dayOfWeek[theDate.getDay()];
  	},
  	"dd": function() {
  		return theDate.getDate() < 10 ? "0" + theDate.getDate() : "" + theDate.getDate();
  	},
  	"d": function() {
  		return "" + theDate.getDate();
  	},
  	"MMMM": function() {
  		return monthOfYear[theDate.getMonth()];
  	},
  	"MMM": function() {
  		return monOfYear[theDate.getMonth()];
  	},
  	"MM": function() {
  		var monthNum = theDate.getMonth() + 1;
  		return monthNum < 10 ? "0" + monthNum : "" + monthNum;
  	},
  	"M": function() {
  		return "" + (theDate.getMonth() + 1);
  	},
  	"yyyy": function() {
  		return "" + theDate.getFullYear();
  	},
  	"yy": function() {
  		var yearNumber = Number(("" + theDate.getFullYear()).substr(2));
  		return yearNumber < 10 ? ("0" + yearNumber) : ("" + yearNumber);
  	},
  	"y": function() {
  		return ""+Number(("" + theDate.getFullYear()).substr(2));
  	}
  }

  // Sets default format token.
  formatTokens = formatTokens ? formatTokens : "yyyy-MM-dd";
  for (var property in transformMap) {
  	formatTokens = replace(formatTokens, property, transformMap[property]);
  }

  return formatTokens;
}

/**
 * Describe this function...
 */
export default function TraeAnoRule(clientAPI) {
  return system_date();
}