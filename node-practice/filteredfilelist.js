/* prints a list of files in the given directory, filtered by extension */

var fs = require('fs');


var dirlist = fs.readdir(process.argv[2], dirlist.filter(function extFilter(err, fileName) {
 if (err) {return console.error(err);
} else {
 return (path.extname(fileName) == process.argv[3]);
}
}
));

