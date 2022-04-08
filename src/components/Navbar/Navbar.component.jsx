import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button.component'
import Dropdown from '../Dropdown/Dropdown.component'
import './Navbar.styles.css'
import 

const Navbar = () => {
    return (

        <>

            <nav className="navbar">

                <Link to='/' className='navbar-logo'> Epic</Link>
            </nav>
        </>
    )
}

export default Navbar