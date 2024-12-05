import React from "react";

const ChildComp=(props)=>{
    const {name,salary,manageState}=props;
    return (
        <div>
            <h2>Employee Name: {name} and Employee salary: {salary}</h2>
            <h4 onMouseOver={manageState}>Hover me</h4>
        </div>
    );
}


export default ChildComp;