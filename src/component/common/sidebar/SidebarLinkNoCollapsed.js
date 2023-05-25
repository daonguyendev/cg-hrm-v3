import React from 'react';

const SidebarLinkNoCollapsed = ({ href, icon, text }) => {
    return (
        <a className="nav-link" href={href}>
            <div className="sb-nav-link-icon"><i className={icon}></i></div>
            {text}
        </a>
    );
};

export default SidebarLinkNoCollapsed;