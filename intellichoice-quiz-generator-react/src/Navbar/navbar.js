import React from 'react';
import './navbarStyles.css'

export default function Navbar () {
    return (
        <>
           <ul>
                <li class='left'><a href="/home">Home</a></li>
                <li class='left'><a href="/practice">Practice</a></li>
                <li class='right'><a href="/signup">Signup</a></li>
                <li class='right'><a href="/login">Login</a></li>
            </ul>
        </>
    )
}