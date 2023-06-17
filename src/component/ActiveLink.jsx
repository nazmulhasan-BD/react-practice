import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ActiveLink.css"

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({isActive}) =>
                isActive ? "active font-bold text-4xl " : "font-bold text-4xl"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;