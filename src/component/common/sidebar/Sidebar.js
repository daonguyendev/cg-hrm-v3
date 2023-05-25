import React from 'react';
import SidebarFooter from "./SidebarFooter";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <SidebarMenu/>
                <SidebarFooter/>
            </nav>
        </div>
        
    );
};

export default Sidebar;