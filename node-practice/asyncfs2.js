var fs = require('fs');

var bufferobj = fs.readFile(process.argv[2], 'utf8', countLines);

function countLines(err, bufferobj) {
   var filearray = bufferobj.toString().split('\n');
   linecount = filearray.length - 1;
   console.log(linecount);
}

