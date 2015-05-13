(function (db) {

	var codes = {}, patterns = {}, categories = {};

  var bugData = JSON.parse(cat('Analysis-July30.json'));
  var messages = JSON.parse(cat('messages.json'));

	var cleanText = function (text) {
		var newText = text.replace('\n', ' ');
		newText = newText.replace(/\s+/g, ' ');
		newText = newText.replace(/> /g, '>');
		newText = newText.replace(/ </g, '<');
		return newText;
	};

	var patternMap = function (p) {
		return {
			_id: p._type, 
			description: p.ShortDescription, 
			details: cleanText(p.Details.__cdata)
		};
	};

	var categoryMap = function (c) {
		return {
			_id: c._category, 
			description: c.Description, 
			details: cleanText(c.Details)
		};
	};

	var codeMap = function (c) {
		return {
			abbrev: c._abbrev, 
			text: c.__text
		};
	};

	messages.MessageCollection.BugCode.map(function (code) {
		codes[code._abbrev] = code.__text;
	});

	messages.MessageCollection.BugPattern.map(function (pattern) {
		patterns[pattern._type] = {
			description: pattern.ShortDescription,
			details: cleanText(pattern.Details.__cdata)
		};
	});

	messages.MessageCollection.BugCategory.map(function (category) {
		categories[category._category] = {
			description: category.Description,
			details: cleanText(category.Details)
		};
	});

  db.bugs.insert(bugData.BugCollection.BugInstance);

  db.messages.insert(
  	[
  		{'_id': 'codes', 'messages': codes},
  		{'_id': 'patterns', 'messages': patterns},
  		{'_id': 'categories', 'messages': categories},
  	]
  );

}(db));

