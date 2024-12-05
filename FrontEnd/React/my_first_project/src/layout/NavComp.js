import React from 'react'
import { Link } from 'react-router-dom'

export const NavComp = () => {
  return (
    <div>
        <Link to="toggle"><button className='btn btn-primary btn-sm'>toggle</button></Link>{" "}
        <Link to="hooks"><button className='btn btn-primary btn-sm'>hooks</button></Link>
    </div>
  )
}
