import React from "react";

const UserComponent=(props)=>{
    
    if(props.fname==="sanjay"){
        throw Error("not a user");
    }
    return (
        <div>
            <h1>
                User name: {props.fname}
            </h1>
        </div>
    )
}

export default UserComponent;

