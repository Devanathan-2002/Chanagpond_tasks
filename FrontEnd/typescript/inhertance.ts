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

export default Person;