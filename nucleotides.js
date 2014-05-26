var fs = require('fs');

if (process.argv.length < 3){
    console.log("Please specify file to be read");
    process.exit(1);
}

var fn = process.argv[2];

function program(filename) {
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) throw err;
        count(data);
    });
}

function count(dna){
    var gCount = 0, tCount = 0, cCount = 0, aCount = 0;
    for (var i = 0; i < dna.length; i++){
        if (dna[i] === 'A') aCount++
        else if (dna[i] === 'C') cCount++
        else if (dna[i] === 'T') tCount++
        else if (dna[i] === 'G') gCount++
        else {
            console.log("Check DNA sequence for errors, nucleotide at position "  + i + " not recognized.");
        }
    }
    console.log(aCount + " " + cCount + " " + gCount + " " + tCount);
}

program(fn);




