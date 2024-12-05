import React from "react";
import Dosa from '../assets/Dosa.jpg'
import CommonData from "../shared/constant/ConstantData";

const MyImageComp=()=>{
    return(
        <div>
            <h2>This is image component</h2>
            <img src={Dosa} alt="Dosa" height="200px" width="200px"></img>
            <img src={CommonData.egg} alt="egg" height="200px" width="200px"></img>
            <img src={CommonData.friends} alt="friends" height="200px" width="200px"></img>
        </div>
    )


}

export default MyImageComp;