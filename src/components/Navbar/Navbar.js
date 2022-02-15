// Kotitehtävät
import React, {useState} from 'react';
import {MenuData} from '../MenuData';
import { Link } from 'react-router-dom';
import './Navbar.css';
import SubMenu from './SubMenu';


const Navbar = () =>{
    return(
        <nav className='Navbar'>

            <ul className='navMenu'>
                {MenuData.map((item,index) => {
                    return(
                        <li key = {index} ><SubMenu item={item}/></li>
                    )
                })}
            </ul>
            <h2 className='navbar-logo'>
                <span style={{color:'white'}}>Linux palvelimet <i class="fab fa-ubuntu"></i></span>
                </h2>
        </nav>
    )
}

export default Navbar;