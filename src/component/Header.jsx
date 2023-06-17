import React from 'react';
import {  Link, Outlet, useNavigation } from 'react-router-dom';
import "./Header.css";
import ActiveLink from './ActiveLink';

const Header = () => {
    const navigation = useNavigation();
    return (
        <div className='text-center'>
            <div className='my-container flex gap-6 mb-5 mt-4  justify-center items-center bg-orange'>
            <ActiveLink to='/home'>home</ActiveLink>
            <ActiveLink to="/meal">meal</ActiveLink>            
            </div>
            <div>
                {  navigation.state==="loading" && "please wait...." }
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;