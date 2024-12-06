import React from 'react'

const UseStateHooksComp = () => {
    const [count,setCount]=useState(0);
    const [name,setName]=useState("Deva");
    const incrementCount=()=>{
        setCount(count+1);
    }
    return (
        <div>
        <h2>This is use state hook components</h2>    
        <p>count value: <strong>{count}</strong></p>
        <button type='button' onClick={()=>incrementCount()} className='btn btn-primary'>change count</button>{" "}
        <button type='button' onClick={()=>setCount(count+2)} className='btn btn-primary'>change count</button>
        <p>My name: {name}</p>
        <button type='button' onClick={()=>setName("Devanthan")} className='btn btn-primary'>change Namee</button>
        </div>
    )
}

export default UseStateHooksComp;