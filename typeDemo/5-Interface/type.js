var namet = function (first, last) {
    console.log(first + last);
};
namet("hii", "byy");
var namess = function (first, last) {
    console.log(first + last);
};
// namess(12,"hii")    error
namess("gg", "ff");
var sou = function (details) {
    console.log(details.firstName);
    console.log(details.lastName);
    console.log(details.age);
};
sou({
    firstName: "Sourav",
    lastName: "Kumar",
    age: 21
});
var sou1 = function (details) {
    console.log(details.firstName);
    console.log(details.lastName);
    console.log(details.age);
};
sou1({
    firstName: "SOURAV",
    lastName: "KUMAR",
    age: 21
});
