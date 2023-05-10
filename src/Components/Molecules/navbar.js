import React, {useState} from 'react'
import './navbar.css'
import Logo from '../Atoms/logo';
import LoginButton from '../Atoms/button'

import { FaBars } from "react-icons/fa";
export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    function showHamburgerMenu(){
            setShowMenu(!showMenu)
    }
    return (
        
        <div className='navbar'>
            <Logo />
            <div className='hamburger-menu'>
                <ul className={`header-list ${showMenu ? "show" : ""}`}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Services</li>
                    <li>Support</li>
                    <LoginButton  />
                </ul>
            </div>

            <FaBars className='bar-icon' onClick={showHamburgerMenu} />
            
        </div> 
    )
}