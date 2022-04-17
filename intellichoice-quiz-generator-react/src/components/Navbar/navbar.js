import React from 'react';
import { useState } from 'react';
import './navbarStyles.css'
import { navbarItems } from './navbarItems';


export default function Navbar () {
    return (
        <>
           <ul className='navbar'>
               {navbarItems.map((item) => {
                   return (
                       <li id={item.id} class={item.class}>
                           {item.submenu ? (
                               <>
                                    <a href={item.path} role="button">
                                        {item.title}
                                    </a>
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