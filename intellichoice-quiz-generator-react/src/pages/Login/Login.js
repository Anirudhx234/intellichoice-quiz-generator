import React from 'react'
import { useState } from 'react';

export default function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <input type="text" placeholder='Enter Username Here' value={username} onChange={setUsername}/>
            <input type="text" placeholder='Enter Password Here' value={password} onChange={setPassword}/>
        </>
    )
}