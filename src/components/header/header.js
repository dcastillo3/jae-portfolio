import React from 'react';
import { useLocation } from 'react-router-dom';
import { getRouteByPathname } from '../../routes/routesUtils';
import { Menu } from '../menu';

function Header() {
    const { pathname } = useLocation();
    const { name: pageTitle } = getRouteByPathname(pathname);

    return (
        <div className="header">
            <div className="header-row">
                <div className="header-name">Vision Piece Cinema</div>
                
                <Menu />
            </div>

            <h1 className="page-title">{pageTitle}</h1>
        </div>
    );
};

export default Header;