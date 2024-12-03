import React,{Component} from "react";


class Incrementer extends Component{
    constructor(){
        super();
        this.state={count:0}

    }
    Increment=()=>{
        this.setState({count:this.state.count+1})
    }
    Decrement=()=>{
        this.setState({count:this.state.count-1})
    }
    Reset=()=>{
        this.setState({count:0})
    }
    render(){
        return(<div>
            <h1>
                Counter: {this.state.count} 
            </h1>
            <button type="button" class="btn btn-primary" onClick={()=>this.Increment()}>Increase</button>
            <button type="button" class="btn btn-primary" onClick={()=>this.Decrement()}>Decrease</button>
            <button type="button" class="btn btn-primary" onClick={()=>this.Reset()}>Reset</button>

        </div>)
    }
}

export default Incrementer;