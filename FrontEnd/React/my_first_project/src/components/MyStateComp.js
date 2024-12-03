import React,{Component} from "react";

class MyStateComp extends Component{
    constructor(){
        super();
        this.state={
            empName:"sanjay",
            empSal:85000,
        }
    }
    
    ChangeStateData=()=>{
        // this.setState({empName:"Deva",empSal:this.state.empSal+5000});
        this.setState((prevState)=>({empName:"Deva",empSal:prevState.empSal+50000}))
    }
    render(){

        return(
            <div>
                <h2>
                    this is my MyStateComp
                </h2>
                <p>EmployeeName: <strong>{this.state.empName}</strong> and Salary: <strong>{this.state.empSal}</strong></p>
                <button type="button" onClick={()=>this.ChangeStateData()}>
                    Click me to change
                </button>
                

            </div>
        )
    }
}

export default MyStateComp;