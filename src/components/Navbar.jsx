import React, { useState } from "react";
import '../styles/Navbar.css';
import '../styles/index.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Menu = () => {
    return (
        <>
            <p><a href="#projects">Projects</a></p>
            <p><a href="https://blog.shobhitnagpal.com/">Blog</a></p>
            <p><a href="#contact">Contact</a></p>
        </>
    )
}
const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="navbar">
            <div className="navbar_logo">
                <h3><a href="#">[s]</a></h3>
            </div>

            <div className="navbar_links">
                <Menu />
            </div>

            <div className="navbar_menu">
                {toggleMenu ? <CloseIcon style={{fill: "white"}} fontSize="large" onClick={() => setToggleMenu(false)} /> : <MenuIcon style={{fill: "white"}} fontSize="large" onClick={() => setToggleMenu(true)}/>}

                {toggleMenu && (
                    <div className="navbar_menu_container">
                        <Menu />
                    </div>
                )}
            </div>
            
        </div>
    )
}

export default Navbar;
