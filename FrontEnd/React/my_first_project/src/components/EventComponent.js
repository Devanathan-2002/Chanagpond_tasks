import React,{Component} from "react";

class EventHandler extends Component{
    
    greeting(){
        window.alert("Hello everyone");
    }   

    welcome(...names){
        window.alert(`hello: ${names}`);
    }
    soup=()=>{
        window.alert("Done");
    }
    render(){
        return(
        <div>
            <button type="button" onClick={()=>this.greeting()}>Call greetings</button>
            <button type="button" onClick={()=>this.welcome("Deva","sanjay")}>Call welcome</button>
            {/* <h1 onMouseOver={()=>this.soup()}>Hover me!</h1> */}
        </div>
        )
    }
}

export default EventHandler;