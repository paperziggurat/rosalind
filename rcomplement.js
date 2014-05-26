var fs = require('fs');

if (process.argv.length < 3){
    console.log("Please specify file to be read");
    process.exit(1);
}

var fn = process.argv[2];

function program(filename) {
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) throw err;
        rcomplement(data);
    });
}

function rcomplement(dna) {
    var revdna = dna.split("").reverse().join("");
    var revcomplement = "";
    for (var i = 0; i < revdna.length; i++){
        if (revdna[i] === 'A') revcomplement = revcomplement + 'T';
        else if (revdna[i] === 'T') revcomplement = revcomplement + 'A';
        else if (revdna[i] === 'C') revcomplement = revcomplement + 'G';
        else if (revdna[i] === 'G') revcomplement = revcomplement + 'C';
        else {
            console.log("Check sequence for nucleotide error at position " + i);
        }
    }
    console.log(revcomplement);
}

program(fn);