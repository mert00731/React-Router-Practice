import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

export const HelpLayout = () => {

    return(
        <div className="help-layout">
            <h2>Help</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, expedita nisi. Praesentium, adipisci placeat reprehenderit quod facilis aliquid eaque culpa nobis recusandae, sequi obcaecati. Aliquam beatae vero animi quaerat laborum.</p>
            
            <nav>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="faq">FAQ</NavLink>
            </nav>
            <Outlet/>
        </div>
    )

}