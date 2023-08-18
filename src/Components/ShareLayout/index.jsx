import React from 'react'
import { Outlet } from 'react-router-dom'
import { ComplexNavbar } from '../NavBar/NavBarComplex'

function ShareLayout() {
    return (
        <div>
            <ComplexNavbar />
            <Outlet />
        </div>
    )
}

export default ShareLayout  