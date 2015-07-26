var fs = require('fs');

var bufferobj = fs.readFileSync(process.argv[2]);

var filestr = bufferobj.toString();

function countlines() {
   var filearray = filestr.split('\n');
   return (filearray.length - 1);
}

console.log(countlines(bufferobj));


