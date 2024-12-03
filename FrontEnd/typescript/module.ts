import Person from "./inhertance";

class Company extends Person{
    cname:string;
    contact:number;
    empPost:string;

    constructor(id:number,name:string,addr:string,compname:string,caddr:string,contact:number,epost:string){
        super(id,name,addr);
        this.cname=compname;
        this.contact=contact;
        this.empPost=epost;
    }
    personDetails(){
        console.log(`EmpId:${this.pid} EmpName: ${this.pname} Post: ${this.empPost} Company:${this.cname} Address:${this.paddress} Contact: ${this.contact}`)
    }
}
let compObj=new Company(201,"deva","chennai","changepond","chennai",88888,"fullstack");
compObj.personDetails();