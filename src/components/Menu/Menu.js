import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Menu/Menu.css'

const setNavLinkClass = ({ isActive }) => (isActive ? 'nav-link' : 'menu-link')

export const Menu = () => {
    return (
        <>
            <NavLink className={setNavLinkClass} to="/" end>
                <Button color="inherit">Home</Button>
            </NavLink>

            <NavLink className={setNavLinkClass} to="/products">
                <Button color="inherit">Products</Button>
            </NavLink>

            <NavLink className={setNavLinkClass} to="/payment">
                <Button color="inherit">Payment</Button>
            </NavLink>

            <NavLink className={setNavLinkClass} to="/shiping">
                <Button color="inherit">Shiping</Button>
            </NavLink>

            <NavLink className={setNavLinkClass} to="/cart">
                <Button color="inherit">Cart</Button>
            </NavLink>
        </>
    )
}
