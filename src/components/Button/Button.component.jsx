import React from 'react'
import './Button.styles.css'
import { Link } from 'react-router-dom'
const Button = () => {
    return (
        <Link to='/donate'>
            <button className="btn">
                Donate
            </button>
        </Link>
    )
}

export default Button