var fs = require('fs');

var array = ['input1.txt', 'input2.txt', 'input3.txt', 'input4.txt', 'input5.txt'];

function readFile1() {
    return new Promise(function (resolve, reject) {
        fs.readFile(array[0], function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        })
    })
}

function readFile2() {
    return new Promise(function (resolve, reject) {
        fs.readFile(array[1], function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        })
    })
}

function readFile3() {
    return new Promise(function (resolve, reject) {
        fs.readFile(array[2], function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        })
    })
}

function readFile4() {
    return new Promise(function (resolve, reject) {
        fs.readFile(array[3], function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        })
    })
}

function readFile5() {
    return new Promise(function (resolve, reject) {
        fs.readFile(array[4], function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        })
    })
}

async function readArrayFiles() {
    try {        
        const data1 = await readFile1();
        console.log(data1);
        console.log("========================");
        const data2 = await readFile2();
        console.log(data2);
        console.log("========================");
        const data3 = await readFile3();
        console.log(data3);
        console.log("========================");
        const data4 = await readFile4();
        console.log(data4);
        console.log("========================");
        const data5 = await readFile5();
        console.log(data5);
        console.log("========================");
    } catch (error) {
        console.log(error);
    }
}

readArrayFiles()
