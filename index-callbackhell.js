var fs = require('fs');

var array = ['input1.txt', 'input2.txt', 'input3.txt', 'input4.txt', 'input5.txt'];

function readFile(inputFile, callback) {
    fs.readFile(inputFile, function (err, data) {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    })
}

function readArrayFiles() {
    readFile(array[0], function (err, data) {
        console.log(data.toString());
        console.log("=========================");
        readFile(array[1], function (err, data) {
            console.log(data.toString());
            console.log("=========================");
            readFile(array[2], function (err, data) {
                console.log(data.toString());
                console.log("=========================");
                readFile(array[3], function(err, data){
                    console.log(data.toString());
                    console.log("=========================");
                    readFile(array[4], function(err, data){
                        console.log(data.toString());
                        console.log("=========================");
                    })
                })
            })
        })
    })
}

readArrayFiles();
