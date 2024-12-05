import React,{Component} from "react";
import MyHocComponent from "../components/MyHocComponent";
class CounterComp extends Component{
    
    render(){
        return(
            <div>
                <h1>
                    COUNTER:{this.props.count}
                </h1>
                <button type="button" class="btn btn-info" onClick={this.props.Increase}>
                    Click here to increase
                </button>
                <h2 onMouseOver={this.props.Increase}>
                    Hover here to increase
                </h2>
            </div>
        )
    }
}

export default MyHocComponent(CounterComp);