var fs = require("fs");
const textToJson = require("./textToJson");
const arrayToCSV = require("./arrayToCsv");

//Step -1 Read the text file 
fs.readFile("./data.txt", "utf8", function (err, data) {
    //Convert text File into Json
    const jsonArr = textToJson(data);
    //Convert json into CSV
    const csvFile = arrayToCSV(jsonArr);

    //Extract the csv into final.csv
    fs.writeFile('./final.csv', csvFile, 'utf8', function (err) {
        if (err) {
            console.log('Some error occured - file either not saved or corrupted file saved.');
        } else {
            console.log('It\'s saved!');
        }
    })
});