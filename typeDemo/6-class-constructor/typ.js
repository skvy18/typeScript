//Cohesive
var Souravk = /** @class */ (function () {
    function Souravk(firstnames, lastname, age) {
        this.firstname = firstnames;
        this.lastname = lastname;
        this.age = age;
    }
    Souravk.prototype.getFirstname = function () {
        console.log("My First Name is " + this.firstname);
    };
    Souravk.prototype.getLastname = function () {
        console.log("My last name is :" + this.lastname);
    };
    Souravk.prototype.getAge = function () {
        console.log("My age is :" + this.age);
    };
    return Souravk;
}());
var souObj = new Souravk("So", "ku", 12);
souObj.getFirstname();
souObj.getLastname();
souObj.getAge();
//souObj.firstname="Sourav";
//souObj.getFirstname();
//souObj.lastname="Kumar";
//souObj.getLastname();
