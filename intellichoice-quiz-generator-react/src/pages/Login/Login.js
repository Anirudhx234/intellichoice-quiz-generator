import React from 'react'
import { useState } from 'react';

export default function Login () {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const axios = require("axios")

    const loginReq = () => {
        SetEmail("");
        SetPassword("");
        axios.get('/login').then((res) => {
            console.log(res);
        });
        console.log("Login Data Sent");
    }

    return (
        <>
            <input type="text" placeholder='Email' value={email} onChange={e => SetEmail(e.target.value)}/> <br />
            <input type="password" placeholder='Password' value={password} onChange={e => SetPassword(e.target.value)}/> <br />
            <button onClick={loginReq}>Login</button>

        </>
    )
}