var fs = require('fs');

var array = ['input1.txt', 'input2.txt', 'input3.txt', 'input4.txt', 'input5.txt'];

// function readFile1() {
//     fs.readFile(array[0], function (err, data) {
//         console.log(data.toString());
//         console.log("=========================");
//     });
// }

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

readFile1()
    .then((data) => {
        console.log(data);
        console.log("=====================");
        return readFile2()
    })
    .then((data) => {
        console.log(data);
        console.log("=====================");
        return readFile3()
    })
    .then((data) => {
        console.log(data);
        console.log("=====================");
        return readFile4(data)
    })
    .then((data) => {
        console.log(data);
        console.log("=====================");
        return readFile5(data)
    })
    .then((data) => {
        console.log(data);
        console.log("=====================");
    })
    .catch((err) => console.log(err));
    