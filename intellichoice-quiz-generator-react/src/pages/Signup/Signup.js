import React from 'react'
import { useState } from 'react'

export default function Signup () {
    const [first, SetFirst] = useState("");
    const [last, SetLast] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const axios = require("axios");

    const signupReq = () => {
        SetFirst("");
        SetLast("");
        SetEmail("");
        SetPassword("");
        axios.post('/signup', {
            email: email,
            password: password,
            first: first,
            last: last
        }).then((res) => {
            console.log("Signup Data Sent");
            console.log(res.data);
        });
    }
    
    
    return (
        <>
            <input type="text" placeholder='First Name' value={first} onChange={e => SetFirst(e.target.value)}/> <br />
            <input type="text" placeholder='Last Name' value={last} onChange={e => SetLast(e.target.value)}/> <br />
            <input type="text" placeholder='Email' value={email} onChange={e => SetEmail(e.target.value)}/> <br />
            <input type="password" placeholder='Password' value={password} onChange={e => SetPassword(e.target.value)}/> <br />
            <button onClick={signupReq}>Signup</button>
        </>
    )
}