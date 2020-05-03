var fs = require('fs');

var array = ['input1.txt', 'input2.txt', 'input3.txt', 'input4.txt', 'input5.txt'];

function readFile1() {
    fs.readFile(array[0], function (err, data) {
        console.log(data.toString());
        console.log("=========================");
    });
}

function readFile2() {
    fs.readFile(array[1], function (err, data) {
        console.log(data.toString());
        console.log("=========================");
    })
}

function readFile3() {
    fs.readFile(array[2], function (err, data) {
        console.log(data.toString());
        console.log("=========================");
    })
}

function readFile4() {
    fs.readFile(array[3], function (err, data) {
        console.log(data.toString());
        console.log("=========================");
    })
}

function readFile5() {
    fs.readFile(array[4], function (err, data) {
        console.log(data.toString());
        console.log("=========================");
    })
}

function readArrayFiles() {
    readFile1();
    readFile2();
    readFile3();
    readFile4();
    readFile5();
}
readArrayFiles();