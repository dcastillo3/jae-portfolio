import React from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteByPathname } from '../../routes/routesUtils';

function Header() {
    const { pathname } = useLocation();
    const { name: pageTitle } = getRouteByPathname(pathname);

    return (
        <div className="header">
            <h1 className="header-name">Jae Malabunga</h1>
            <h4 className="header-role">Film Director</h4>
            <h5 className="middle-line-text">{pageTitle}</h5>
            <div className="middle-line"></div>
        </div>
    );
};

export default Header;