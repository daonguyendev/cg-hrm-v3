import React from 'react';

const NavbarItem = () => {
    return (
        <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="#">Settings</a>
                    <a className="dropdown-item" href="#">Activity Log</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="login.html">Logout</a>
                </div>
            </li>
        </ul>
    );
};

export default NavbarItem;