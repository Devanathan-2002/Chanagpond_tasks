import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



export const NavComp = () => {
  
  const nav=useNavigate();
  const parent={
    position:"relative"
  }
  
  const child={
    position:"absolute",
    left:"93%"
  }
  
  const Logout=()=>{
  
  
  if(window.confirm("Are sure to logout")){
    sessionStorage.clear();
    nav("/")
  }
    

  }
  return (
    <div>
        <Link to="toggle"><button className='btn btn-primary btn-sm'>toggle</button></Link>{" "}
        <Link to="hooks"><button className='btn btn-primary btn-sm'>hooks</button></Link>{" "}
        <Link to="myfavcolor"><button className='btn btn-primary btn-sm'>My Fav color</button></Link>{" "}
        <Link to="form"><button className='btn btn-primary btn-sm'>Form</button></Link>{" "}
        <Link to="productdash"><button className='btn btn-warning btn-sm' style={parent}>Product Dash</button></Link>{" "}
        <button className='btn btn-danger btn-sm' onClick={Logout} style={child}>LogOut</button>
    </div>
  )
}
