import React from 'react';
import NavbarSearch from "./NavbarSearch";
import NavbarItem from "./NavbarItem";


const Navbar = () => {
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" href="index.html">Start Bootstrap</a>
            <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i
                className="fas fa-bars"></i></button>

            {/*Navbar Search*/}
            <NavbarSearch/>

            {/*Navbar*/}
            <NavbarItem/>
        </nav>
    );
};

export default Navbar;