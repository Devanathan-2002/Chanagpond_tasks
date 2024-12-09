import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginComp() {


  const nav=useNavigate();
  const uidRef=useRef();
  const upassRef=useRef();

  const center_div={
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"900px",
      borderRadius:"10px",
  }

  const center={
    position:"relative",
    // top:"30%",
    border:"2px solid ",
    padding:"100px",
    borderRadius:"6px",
    background:"grey",
    fontWeight:"bold",
  }




  const checkUser=()=>{
    let uid=uidRef.current.value;
    let upass=upassRef.current.value;

    
    axios.get("http://localhost:8888/user").then((res)=>{
      let currentUser=res.data.filter((val,index)=>{return val.email===uid && val.password===upass})

      if (currentUser.length>0){
        window.alert("Login Success");
        sessionStorage.setItem("user",uid);
        nav("/mainDashBoard");
      }else{
        window.alert("wrong credentials");
        uidRef.current.value="";
        upassRef.current.value="";
      }

    }).catch((error)=>{})
  }
  return (
    <div className='container mt-2' style={center_div}>
            <form class="form" style={center}>
              <label for ="name">Enter your Name:</label>
              <input name="name" type='text' class="form-control mt-2 mb-2" ref={uidRef}></input>
              <label for ="password">Enter your Password:</label>
              <input name="name" type='password' class="form-control mt-2 mb-2" ref={upassRef}></input>
              <button type='button' className='btn btn-info mt-2' onClick={checkUser}>Submit</button>
            </form>
    </div>
  )
}

export default LoginComp

