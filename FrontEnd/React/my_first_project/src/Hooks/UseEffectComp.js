import React from 'react'
import { Outlet } from 'react-router-dom'

function UseEffectComp() {
  return (
    <div>UseEffectComp
        <Outlet/>
    </div>
  )
}

export default UseEffectComp