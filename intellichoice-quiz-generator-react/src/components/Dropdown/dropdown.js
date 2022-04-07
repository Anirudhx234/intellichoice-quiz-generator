import React from "react";

export default function Dropdown ({submenu}) {
    return (
        <>
            <ul>
                {submenu.map((item) => {
                    return (<li class={item.class}><a href={item.path}>{item.title}</a></li>)
                })}
            </ul>
        </>
    )
}