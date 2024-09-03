




// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Advans_Pakistan_Logo.svg'; // Adjust the path as needed

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.style.backgroundColor = darkMode ? 'white' : 'black';
        document.body.style.color = darkMode ? 'black' : 'white';
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
            <div className="nav-left">
                <img src={logo} alt="Logo" className="logo" />
                <button onClick={toggleMenu} className="nav-toggle">
                    {menuOpen ? 'Close' : 'Menu'}
                </button>
            </div>
            <div className={`nav-center ${menuOpen ? 'show' : ''}`}>
                <ul className="nav-links">
                    <li><a href="https://www.advanspakistan.com/about-us/who-we-are/">service</a></li>
                    <li><a href="https://www.advanspakistan.com/about-us/working-with-us/find-us/">Careers</a></li>
                    <li><a href="https://www.advanspakistan.com/about-us/working-with-us/find-us/join-us/">Cards</a></li>
                    <li><a href="https://www.advanspakistan.com/about-us/publications/">Loans</a></li>
                    <li className="dropdown">
                        <button onClick={toggleDropdown} className="dropdown-toggle">
                            Company Information
                        </button>
                        {dropdownOpen && (
                            <ul className="dropdown-menu">
                                <li><a href="https://jamapunji.pk/">jamapunji.</a></li>
                                <li><a href="https://www.advanspakistan.com/about-us/contact-us/">ContactRegistrationForm</a></li>
                                <li><a href="https://www.advanspakistan.com/about-us/publications/#c4259">Publications</a></li>
                                <li><a href="https://www.advanspakistan.com/about-us/client-protection/">Client Protection</a></li>
                            </ul>
                        )}
                    </li>
                    <li><a href="https://www.advanspakistan.com/about-us/queries-complaint-management/">Queries complaint Management</a></li>
                    <li><a href="https://www.advanspakistan.com/about-us/our-response-to-the-covid-19-crisis/">New Announcements</a></li>
                </ul>
            </div>
            <div className="nav-right">
                <button onClick={toggleDarkMode} className="mode-toggle">
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
