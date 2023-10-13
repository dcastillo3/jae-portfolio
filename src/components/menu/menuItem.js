import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function MenuItem({name, path, callback}) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const isActive = pathname === path;
    const menuItemClassName = isActive ? 'menu-item-active' : 'menu-item';

    const handleMenuItemClick = path => {
        navigate(path);
        
        if(callback) callback();
    };

    return (
        <button className="menu-item-container" onClick={() => handleMenuItemClick(path)}>
            <div className={menuItemClassName}>
                {name}
            </div>
        </button>
    );
};

export default MenuItem;