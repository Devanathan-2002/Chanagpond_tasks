import React,{Component} from "react";

const MyHocComponent=(WarpperComp)=>{
    
    class Hoc extends Component{
        constructor(props){
            super(props);
            this.state={count:0}
        }
        Increase=()=>{
            this.setState((prevState)=>({count:prevState.count+1}))
        }
        render(){
            return(
                <WarpperComp count={this.state.count} Increase={this.Increase}></WarpperComp>
            )
        }
    }
    
    return Hoc;
}

export default MyHocComponent;

