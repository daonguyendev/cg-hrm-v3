import React from 'react';

const SidebarLinkCollapsed = ({ href, dataTarget, ariaControls, iconClass, text }) => {
    return (
        <a className="nav-link collapsed" href={href} data-toggle="collapse" data-target={dataTarget} aria-expanded="false" aria-controls={ariaControls}>
            <div className="sb-nav-link-icon"><i className={iconClass}></i></div>
            {text}
            <div className="sb-sidenav-collapse-arrow"></div>
        </a>
    );
};

export default SidebarLinkCollapsed;