import React from 'react';
import { useState } from 'react';
import './navbarStyles.css'
import { navbarItems } from './navbarItems';
import Dropdown from '../Dropdown/dropdown';


export default function Navbar () {
    return (
        <>
           <ul>
               {navbarItems.map((item) => {
                   return (
                       <li id={item.id} class={item.class}>
                           {item.submenu ? (
                               <>
                                    <a href={item.path} role="button">
                                        {item.title}
                                    </a>
                                    <Dropdown submenu={item.submenu} />
                                </>
                            ) : (
                                <a href={item.path} role="button">
                                    {item.title}
                                </a> 
                            )
                            }
                        </li>
                   )
               })}
            </ul>
        </>
    )
}