const fs = require("fs");
var tempValue;
var tempIndex = 1;

fs.readFile('./data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    var fileData = data.split(" ");
    fileData = fileData.sort();
    for (var i = tempIndex; i < fileData.length; i = i + count) {
        tempValue = fileData[i];
        var count = 1;
        for (var j = i + 1; ; j++) {
            if (fileData[j] == tempValue)
                count++;
            else 
                break;
        }
        console.log(tempValue + " is present " + count + " times");
    }
});

