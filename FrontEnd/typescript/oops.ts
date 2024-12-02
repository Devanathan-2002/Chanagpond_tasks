class Person{
    pid:number=101;
    pname:string="Deva";
    paddress:string="Chennai";
    
    constructor(ID:number,name:string,place:string){
        this.pid=ID;
        this.pname=name;
        this.paddress=place;
    }
    PersonDetails(){
        console.log(`Id:${this.pid} Name:${this.pname} Address: ${this.paddress}`);
    }
}

let PersonObj=new Person(103,"Deva","tamilnadu");
PersonObj.PersonDetails();
let PersonObj_1=new Person(104,"Kishore","Andhra");
PersonObj_1.PersonDetails();
let PersonObj_2=new Person(105,"Sanjay","Kerala");
PersonObj_2.PersonDetails();