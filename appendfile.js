const fs = require("fs");

var randomNumber = '';
for (var i = 0; i < 1000; i++)
    randomNumber += Math.floor((Math.random() * 100) + 1) + ' ';

fs.unlink("./data.txt", function (err) {
    if (err) throw err;
});

fs.appendFile("./data.txt", randomNumber, function (err) {
    if (err) throw err;
    console.log("Data inserted successfully");
});