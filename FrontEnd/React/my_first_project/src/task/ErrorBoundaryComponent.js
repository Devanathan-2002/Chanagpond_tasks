import React,{Component} from "react";

class ErrorBoundaryComponent extends Component{    
    constructor(){
        super();

        this.state={
            isCond:false
        }
    }
    static getDerivedStateFromError(){
        return {
            isCond:true
        }
    }
    componentDidCatch(error){
        console.log(error)
    }
    render(){
        if(this.state.isCond){
            return <div>Not a user</div>
        }    
        return this.props.children;
    }

}
export default ErrorBoundaryComponent;