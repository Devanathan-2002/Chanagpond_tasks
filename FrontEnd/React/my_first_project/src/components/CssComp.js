import React from "react";


const CssComp=()=>{
 let circle={
    width:"100px",
    height:"100px",
    borderRadius:"50%",
    border:true?"5px solid red":"5px solid green",
    margin:"auto"
 }


    
    return (
        <div>
            <h1 style={{color:"blue",backgroundColor:"aqua"}}>
                This is component
            </h1>
            <p style={circle}>hi</p>
        </div>
    )

}
export default CssComp;