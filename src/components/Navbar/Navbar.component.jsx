import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button.component'
import Dropdown from '../Dropdown/Dropdown.component'
import './Navbar.styles.css'
import Logo from '../../images/logo/happyfish-sms.webp'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {

            setDropdown(true)
        } else {
            setDropdown(true)
        }

    }
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }

    }

    return (

        <>

            <nav className="navbar">

                <Link to='/' >
                    <img className='navbar-logo' src={Logo} alt="findikipusa logo" />
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'} >

                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>

                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services <i className='fas fa-caret-down' />
                        </Link>
                        {
                            dropdown && <Dropdown />
                        }
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact us
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/about' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Donate
                        </Link>
                    </li>
                </ul>
                <Button />

            </nav>
        </>
    )
}

export default Navbar