var Person = /** @class */ (function () {
    function Person(ID, name, place) {
        this.pid = 101;
        this.pname = "Deva";
        this.paddress = "Chennai";
        this.pid = ID;
        this.pname = name;
        this.paddress = place;
    }
    Person.prototype.PersonDetails = function () {
        console.log("Id:".concat(this.pid, " Name:").concat(this.pname, " Address: ").concat(this.paddress));
    };
    return Person;
}());
var PersonObj = new Person(103, "Deva", "tamilnadu");
PersonObj.PersonDetails();
var PersonObj_1 = new Person(104, "Kishore", "Andhra");
PersonObj_1.PersonDetails();
var PersonObj_2 = new Person(105, "Sanjay", "Kerala");
PersonObj_2.PersonDetails();
