import React from 'react'
import { useState } from 'react';
import '../Login/loginStyles.css'

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
        <div className="login">
            <input id="email" className="loginFields" type="text" placeholder='Email' value={email} onChange={e => SetEmail(e.target.value)}/> <br />
            <input id="password" className="loginFields" type="password" placeholder='Password' value={password} onChange={e => SetPassword(e.target.value)}/> <br />
            <button className="loginButton" onClick={loginReq}>Login</button>

        </div>
    )
}