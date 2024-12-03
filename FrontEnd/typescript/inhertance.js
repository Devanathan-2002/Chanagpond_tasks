var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(id, name, addr, compname, caddr, contact, epost) {
        var _this = _super.call(this, id, name, addr) || this;
        _this.cname = compname;
        _this.contact = contact;
        _this.empPost = epost;
        return _this;
    }
    Company.prototype.personDetails = function () {
        console.log("EmpId:".concat(this.pid, " EmpName: ").concat(this.pname, " Post: ").concat(this.empPost, " Company:").concat(this.cname, " Address:").concat(this.paddress, " Contact: ").concat(this.contact));
    };
    return Company;
}(Person));
var compObj = new Company(201, "deva", "chennai", "changepond", "chennai", 88888, "fullstack");
compObj.personDetails();
