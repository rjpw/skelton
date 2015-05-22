var fs = require('fs'),
  path = require('path'),
  xml2js = require('xml2js')
  argv = require('minimist')(process.argv.slice(2));

var parseOptions = {
	normalize: true,
	trim: true,
	mergeAttrs: true,
	explicitArray: false
};

function parseXMLFile (filename) {

	var parser = new xml2js.Parser(parseOptions);
	var outputFilename = path.basename(filename, path.extname(filename)) + '.json';

	parser.addListener('end', function (result) {

		fs.writeFile(outputFilename, JSON.stringify(result, null, 4), function(err) {
	    if(err) {
	      console.log(err);
	    } else {
	      console.log("JSON saved to " + outputFilename);
	    }
		}); 

	});

	var fullpath = __dirname + '/' + filename;

	fs.readFile(fullpath, function (err, data) {
    parser.parseString(data);
	});

}

argv._.map(function (fname) {
	parseXMLFile(fname);
})



