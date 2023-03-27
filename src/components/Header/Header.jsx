import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';
const Header = () => {
    return (
        <nav className='header'>
            <img className='imgTag'  src={logo} alt="" />
         <div className='navList'>
         
         <a href="/Shop">Shop</a>
         <a href="/Order">Order</a>
         <a href="/Inventory">Inventory</a>
         <a href="login">login</a>
         </div>
        </nav>
    );
};

export default Header;