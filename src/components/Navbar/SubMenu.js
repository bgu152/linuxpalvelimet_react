import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { NavHashLink as Link } from 'react-router-hash-link';
import { IconContext } from 'react-icons/lib';

import './Navbar.css';

const SubMenu = ({ item }) => {
    return (
            <div className='dropDown'>
                {/* Menu label with link*/}
                <Link className='SubMenuTitle' to={item.path}  >{item.title} </Link>
                <div className='dropDownContent'>
                    {item.subNav.map((subitem, index) => {
                        if(subitem.path){
                            return (
                                <Link className='DropdownLink' to={subitem.path}>{subitem.title}</Link>
                            )
                        }else{
                            return(
                                <a className='DropdownLink' href={subitem.href}>{subitem.title}</a>

                            )
                        }
                        
                    })}
                </div>
            </div>
    )
}

export default SubMenu

