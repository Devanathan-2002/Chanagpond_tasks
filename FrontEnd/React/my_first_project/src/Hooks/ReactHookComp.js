import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ReactHookComp = () => {
    return (
        <div><h2>ReactHookComp</h2>
            <div>
            <Link to="usestate"><span class="badge text-bg-info">Use State</span></Link>{" "}
            <Link to="useeffect"><span class="badge text-bg-info">Use Effect</span></Link>
            </div>
            <div>
                <Outlet />
            </div>

        </div>
    )
}

export default ReactHookComp