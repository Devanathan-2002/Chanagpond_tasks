import React,{Component} from "react";

class TaskComp extends Component{
    render(){
        return <h3>The employee name is {this.props.fname}{this.props.lname} he is getting {this.props.salary} salary and his gender is {this.props.gender}</h3>
    }
}

export default TaskComp;