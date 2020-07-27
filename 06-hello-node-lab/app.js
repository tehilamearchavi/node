
// 1.javaScript
// a.
function isPrimeNumber(n) {
    if(n <= 1) return
    let i=2;
    const sqrt = Math.sqrt(n)
    for(; i<=sqrt && n%i!==0 ; i++);
    return i > sqrt;
}

function primeNumberFromOneToThousand() {
    const NUMBER = 1000;
    const arr = []
    for(let i=0; i< NUMBER; i++)
        if(isPrimeNumber(i))
            arr.push(i)
    return arr;
}

// function main(){
//     console.log(primeNumberFromOneToThousand())
// };

// b.
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function main2() {
    const NUMBER = 100
    const arr = []
    for(let i=0; i<=5; i++)
        arr.push(getRandomInt(100))

    arr.sort()

    for(let i=0; i<arr.length;i++)
        console.log('number random:', arr[i])
}

// main2()

// 2.http
// a.

// not working api
// b.
const https = require('https');
https.get('https://api.ipify.org', (res) => {
    res.on('data', (d) => {
        console.log('IP:', d.toString())
    });

}).on('error', (e) => {
    console.error('errorr:',e);
});
// 3. web

// a.
function primeNumberFromOneToThousand2() {
    const NUMBER = 1000;
    const arr = []
    for(let i=0; i< NUMBER; i++)
        if(isPrimeNumber(i))
            arr.push(i)
    return arr;
}

function randomSixNumber() {
    const MAX = 50
    const arr = []
    for(let i=0; i<6; i++)
        arr.push(getRandomInt(50))
    return arr
}

const express = require('express')
const app = express()
let randomNumbers = null
// a.
app.get('/primes', function (req, res) {
    res.send(primeNumberFromOneToThousand().toString())
})
// b.
app.use(function(req, res, next) {
    if(!randomNumbers)
        randomNumbers = randomSixNumber()
    next()
})
app.get('/lottery', function (req, res) {
     res.send(randomNumbers)
})

// 4.
const fs = require('fs');
function readFilesInFolder() {
    const currentFolder = process.cwd()
    fs.readdir(currentFolder, (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});
}
readFilesInFolder()

app.listen(3800)




