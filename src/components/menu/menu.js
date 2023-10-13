import React from 'react';
import { menuRoutes } from '../../routes/routesConsts';
import MenuItem from './menuItem';

function Menu() {
    const renderMenuItems = menuRoutes.map(({ name, path }, idx) => (
        <div className="menu-item-container" key={idx}>
            <MenuItem key={idx} name={name} path={path} />
        </div>
    ));

    return (
        <div className="menu-container">
            {renderMenuItems}
        </div>
    );
};

export default Menu;