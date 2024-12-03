import React,{Component} from "react";

class ClassComp extends Component{
    render(){
        return (
        <div>
            <h2>It is component class</h2>
            <p>Hello there</p>
            <h2>Hi i am {this.props.fname}, my friend name is {this.props.frname}</h2>
        </div>
        
    )
    }
}


export default ClassComp;
