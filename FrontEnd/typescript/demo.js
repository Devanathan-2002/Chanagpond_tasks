console.log("welcome kishore");
//1, string data type
var fname;
fname = "deva";
console.log("Your name: ".concat(fname));
// 2, number;
var number1 = 100, number2 = 200;
console.log(number1, number2);
// 3,boolean
var cond1 = true, cond2 = false;
console.log(cond1, cond2);
//4,array
var courses = ["html", "css", "js", "react"];
var courses1 = ["html", "css", "js", "react"];
console.log(courses, courses1);
var pinCode = [4100122, 234890, 410016];
var pinCode1 = [4100122, 234890, 410016];
console.log(pinCode, pinCode1);
//tupple: it allows us to store multiple types of data into array.
var product = [100, "Mango", true];
console.log(product);
// enum: it create variable with constant values
var days;
(function (days) {
    days[days["sun"] = 501] = "sun";
    days[days["mon"] = 502] = "mon";
    days[days["tue"] = 503] = "tue";
    days[days["wed"] = 504] = "wed";
    days[days["thru"] = 505] = "thru";
    days[days["fri"] = 506] = "fri";
    days[days["sat"] = 507] = "sat";
})(days || (days = {}));
;
var data1 = days.sun;
console.log(data1);
// union:it allows us to store multiple values in single variable;
var info = "deva";
console.log(info);
//any:when we dont know waht atype of data is going to store in variable in that case we use it.
var mix = "hello";
console.log(mix);
