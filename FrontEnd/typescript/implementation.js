"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Organisation = /** @class */ (function () {
    function Organisation(id, name, contact) {
        this.empID = id;
        this.empNmae = name;
        this.empContact = contact;
    }
    Organisation.prototype.employeeDetails = function () {
        return "ID: ".concat(this.empID, " Empname: ").concat(this.empNmae, " Empcontact: ").concat(this.empContact);
    };
    return Organisation;
}());
var OrganisationObj = new Organisation(102, "deva", 9345347362);
console.log(OrganisationObj.employeeDetails());
