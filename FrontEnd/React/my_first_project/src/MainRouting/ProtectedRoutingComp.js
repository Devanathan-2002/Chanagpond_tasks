import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const ProtectedRoutingComp = ({Component}) => {
    

    const nav=useNavigate();

    useEffect(()=>{
        if(!sessionStorage.getItem("user")){
            nav("/");
        }
    },[])
    return (
        <div>
            <Component/>
        </div>
    )
}

export default ProtectedRoutingComp;
