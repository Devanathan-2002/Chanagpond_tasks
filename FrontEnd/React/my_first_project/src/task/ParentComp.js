import React,{Component} from "react";
import ChildComp from "./ChildComp";

class ParentComp extends Component{
    constructor(){
        super();
        this.state={empName:"deva",empSal:5000}
    }
    
    changeState=()=>{
        this.setState({empName:"Deva",empSal:this.state.empSal+5000});
    }
    render(){
        let {empName,empSal}=this.state;
        let {empNameProps,empSalaryProps}=this.props;
        return(
            <div>
                <h2>Employee Name: {empName} and Employee salary: {empSal}</h2>
                <h2>Employee Name: {empNameProps} and Employee salary: {empSalaryProps}</h2>
                <button type="button" class="btn btn-info" onClick={()=>this.changeState()}>Click here</button>
                <ChildComp name={empName} salary={empSal} manageState={this.changeState}/>            
            </div>
        )
    }
}

export default ParentComp;