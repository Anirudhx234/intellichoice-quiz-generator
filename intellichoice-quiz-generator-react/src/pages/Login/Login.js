import React from 'react'
import { useState } from 'react';

export default function Login () {
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const axios = require("axios")

    const loginReq = () => {
        SetEmail("");
        SetPassword("");
        axios.post('/login', {
            email: email,
            password: password

        }).then((res) => {
            console.log("Login Data Sent");
            console.log(res.data);
        });
    }

    return (
        <>
            <input type="text" placeholder='Email' value={email} onChange={e => SetEmail(e.target.value)}/> <br />
            <input type="password" placeholder='Password' value={password} onChange={e => SetPassword(e.target.value)}/> <br />
            <button onClick={loginReq}>Login</button>

        </>
    )
}