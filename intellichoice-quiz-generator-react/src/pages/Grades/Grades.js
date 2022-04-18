import React from 'react'
import { useParams } from 'react-router-dom';

export default function Grades () {
    const { grade } = useParams();
    const addition = grade + "/addition"
    const subtraction = grade + "/subtraction"
    const multiplication = grade + "/multiplication"
    const division = grade + "/division"

    return (
        <>
            <uL>
                <a href={addition}><li>Addition</li></a>
                <a href={subtraction}><li>Subtraction</li></a>
                <a href={multiplication}><li>Multiplication</li></a>
                <a href={division}><li>Division</li></a>
            </uL>
            Grades Page: {grade}
        </>
    )
}