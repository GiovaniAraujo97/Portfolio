import { useState } from "react";
import logo from '../assets/logo.jpg';
import "./nav.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
};

    return (
        <header className="header">
        <img className="logo" src={logo} alt="Logo" />
        <nav className="navbar">
            <a href="#home" className="nav-link">INICIO</a>
            <a href="#sobre" className="nav-link">SOBRE</a>
            <a href="#project" className="nav-link">PROJETOS</a>
            <a href="#contato" className="nav-link">CONTATO</a>
        </nav>
        <div class="menu-icon" onClick={toggleMenu}>
            ☰
        </div> 
        </header>
    )
};

export default Navbar;

