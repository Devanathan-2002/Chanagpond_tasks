import React,{Component} from "react";

class VirtualDom extends Component{
    constructor(){
        super();
        this.state={
            breakfast:[
                {id:101,name:"idly",price:"Rs:30"},
                {id:102,name:"Dosa",price:"Rs:50"},
                {id:103,name:"Vada",price:"Rs:60"},
                {id:104,name:"Upma",price:"Rs:20"},
            ],courses:["Deva","sanjay","Kishore","Tarun","Perumal"]

        }
    }
    render(){
        const {breakfast,courses}=this.state;
        return(
            <div>
                <h2>
                    This is virtual DOM
                </h2>
                <ul>
                    {breakfast.length>0 && breakfast.map((val,index)=>{
                        return <li key={val.id}>{val.name}-{val["price"]}</li>
                    })}
                </ul>
                <hr/>
                <label>Select the course:</label>
                <select class="form-select">
                    {
                        courses.length>0 && courses.map((val,index)=>{
                            return <option value={val} key={index}>{val}</option>
                        })
                    }
                </select>

            </div>
        )

    }

}
export default VirtualDom;