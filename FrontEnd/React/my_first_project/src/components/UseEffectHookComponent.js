import React, { useEffect, useState } from 'react'

export const UseEffectHookComponent = () => {
    const [age,setAge]=useState(18);
    const [sal,setSal]=useState(10000);

    // case1:
    useEffect(()=>{
        setAge(age+1);
    })

    // case2:
    useEffect(()=>{
        setAge(age+1);
    },[])

    // case3:
    useEffect(()=>{
        setAge(age+1);
    },[sal]);

    
    return (
        <div>
            <h2>This is UseEffect hook components</h2>
            <p>Age is:{age}</p>
            <p>salary is:{sal}</p>
            <button type='button' onClick={()=>setSal(sal+5000)}></button>
        </div>
    )
}
