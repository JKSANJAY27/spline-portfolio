import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
        <a href="/" class="logo">Sanjay</a>
        <nav class="navbar">
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;