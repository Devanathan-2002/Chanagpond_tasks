import React from 'react'
import { Outlet } from 'react-router-dom'
import { FooterComp } from './FooterComp'
import { NavComp } from './NavComp'

function MainDashBordComp() {
    
    
    
    return (
        <div class="container">
            <h2>MainDashBordComp</h2>

            <div class="card border-primary">
                <div class="card-header border-primary">
                    <NavComp />
                </div>
                <div class="card-body border-primary" style={{height:"auto"}}>
                    <Outlet />
                </div>
                <div class="card-footer border-primary"></div>
                <FooterComp />
            </div>

        </div>
    )
}

export default MainDashBordComp