// function FuncComp(){
//     return <h2>This is function component</h2>
// }

let FuncComp=(props)=>{
return (
    <div>
        <h2>This is function component</h2>
        <p>helo there</p>
        <h2>Hi i am {props.fname}, my friend name is {props.frname}</h2>
    </div>
    
)
}

export default FuncComp;