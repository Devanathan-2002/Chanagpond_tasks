import IEmployee from "./interface";

class Organisation implements IEmployee{
    
    empID:number;
    empNmae:string;
    empContact:number;

    constructor(id:number,name:string,contact:number){
        this.empID=id;
        this.empNmae=name;
        this.empContact=contact;
    }

    employeeDetails(): string {
        return `ID: ${this.empID} Empname: ${this.empNmae} Empcontact: ${this.empContact}`;
    }
}


let OrganisationObj=new Organisation(102,"deva",9345347362);

console.log(OrganisationObj.employeeDetails());