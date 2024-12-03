import React,{Component} from "react";

class ConditionalComp extends Component{
    constructor(){
        super();
        this.state={isCond:true}
    }


render(){
        
                // if(!this.state.isCond){
                //     return <h1>Conditon True</h1>
                // }
                // else{
                //     return <h1>Conditon False</h1>
                // }
                let msg="";
                if(this.state.isCond){
                    msg="Conditon True";
                }
                else{
                    msg="Conditon False";                
                }
                return <h1>{msg}</h1>;
        
}
}

export default ConditionalComp;
