import React from 'react'
import { NavLink } from 'react-router-dom'
import LOGO from "./Free_Sample_By_Wix.jpg"
const Navbar = () => {
  return (
    <>
        <nav className='navContainer'>
            <aside className='logoblock'>
                <div><img src={LOGO} alt="" height="100px" width="100px" /></div>
            </aside>
            <aside className='listblock'>
                <ul>
                    <NavLink to="/">
                        <li>HOME</li>
                    </NavLink>
                    <NavLink to={"/viewall"}>
                        <li>View-All</li>
                    </NavLink>
                    
                </ul>
            </aside>
        </nav>
    </>
  )
}

export default Navbar
