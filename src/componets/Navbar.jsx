import { useState } from 'react';
import './devotion.css';
import logo from '../assets/glc-logo.png';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <nav className="navbar">
    <div className="navbar-logo">
    <img src={logo} alt="Your Logo" className='logo' />  
    </div>
    <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
    </div>
    <div className="nav-toggle" onClick={toggleMenu}>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
    </div>
</nav>
  )
}
