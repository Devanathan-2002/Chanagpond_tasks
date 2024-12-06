import React from 'react'
import { Link } from 'react-router-dom'

export const NavComp = () => {
  return (
    <div>
        <Link to="toggle"><button className='btn btn-primary btn-sm'>toggle</button></Link>{" "}
        <Link to="hooks"><button className='btn btn-primary btn-sm'>hooks</button></Link>{" "}
        <Link to="myfavcolor"><button className='btn btn-primary btn-sm'>My Fav color</button></Link>{" "}
        <Link to="form"><button className='btn btn-primary btn-sm'>Form</button></Link>{" "}
        <Link to="productdash"><button className='btn btn-warning btn-sm'>Product Dash</button></Link>{" "}
    </div>
  )
}
