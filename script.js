var date_object = new Date ();
var month = date_object.getMonth() +1;
var day = date_object.getDate();
var year = date_object.getFullYear();

if (month < 10) {
    month = "0" + month;
}
else { 
    month = month
}
if (day < 10) {
    day = "0" + day;
}
else {
    day = day
}

var dateMessage = "Today is " + month + "/" + day + "/"+ year;

document.getElementById("dateOutput").textContent = dateMessage;

// part 2 : Number Conversion
var numString1 = "10";
var numString2 = "15";
var numString3 = "2.50";
var numString4 = "num";

var converted1 = Number(numString1);
var converted2 = Number(numString2);
var converted3 = Number(numString3);
var converted4 = Number(numString4);

var isNaN1 = Number.isNaN(converted1);
var isInteger1 = Number.isInteger(converted1);

var isNaN2 = Number.isNaN(converted2);
var isInteger2 = Number.isInteger(converted2);

var isNaN3 = Number.isNaN(converted3);
var isInteger3 = Number.isInteger(converted3);

var isNaN4 = Number.isNaN(converted4);
var isInteger4 = Number.isInteger(converted4);

var result1 = "Original: " + numString1 + " -> Converted: " + converted1 + " -> isNaN:" + isNaN1 + " -> isInteger:" + isInteger1;
var result2 = "Original: " + numString2 + " -> Converted: " + converted2 + " -> isNaN:" + isNaN2 + " -> isInteger:" + isInteger2;
var result3 = "Original: " + numString3 + " -> Converted: " + converted3 + " -> isNaN:" + isNaN3 + " -> isInteger:" + isInteger3;
var result4 = "Original: " + numString4 + " -> Converted: " + converted4 + " -> isNaN:" + isNaN4 + " -> isInteger:" + isInteger4;
 
var allResults = result1 + "<br>" + result2  + "<br>" + result3+ "<br>" + result4 ;

document.getElementById("numberConversionOutput").innerHTML = allResults;

// part 3
var gradeA = 90;
var gradeB = 89;
var gradeC = 79;

var totalScore =  gradeA + gradeB + gradeC;
var averageScore = totalScore / 3;

var formattedAverage = averageScore.toFixed(2);

var mathMessage = "Grade A: " + gradeA + ","+ "Grade B: " + gradeB + "," + "Grade C: "+ gradeC + " -> Total: " + totalScore + "," + " -> Average: " + formattedAverage;

document.getElementById("mathOutput").innerHTML = mathMessage;

//Part 4
if (averageScore < 60) {
    var gradeMessage = "Failing";
} else {
    var gradeMessage = "Passing";
}
document.getElementById("mathOutput").innerHTML += "<br>" + gradeMessage;

if (isInteger1 === true) {
    var intMessage = "This value is an integer.";
} else {
    var intMessage = "This value is not an integer.";
}
document.getElementById("numberConversionOutput").innerHTML += "<br>" + intMessage;
