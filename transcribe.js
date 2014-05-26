var fs = require('fs');

if (process.argv.length < 3) {
    console.log("Please specify file to be read");
    process.exit(1);
}

var fn = process.argv[2];

function program(filename) {
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) throw err;
        transcribe(data);
    });
}

function transcribe(dna) {
    var rna = "";
    for (var i = 0; i < dna.length; i++){
        if (dna[i] === 'T') rna = rna + 'U';
        else rna = rna + dna[i];
    }
    console.log(rna);
}

program(fn);