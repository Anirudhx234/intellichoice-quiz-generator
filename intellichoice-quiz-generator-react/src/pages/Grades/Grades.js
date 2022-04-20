import React from 'react'
import "./gradesStyles.css"
import { useParams } from 'react-router-dom';

export default function Grades () {
    const { grade } = useParams();
    const addition = grade + "/addition"
    const subtraction = grade + "/subtraction"
    const multiplication = grade + "/multiplication"
    const division = grade + "/division"

    return (
        <>
            <ul className="topicsList">
                <div id="grades" className="row">
                    <a className="col" href={addition}><li>Addition</li></a>
                    <a className="col" href={subtraction}><li>Subtraction</li></a>
                    <a className="col" href={multiplication}><li>Multiplication</li></a>
                    <a className="col" href={division}><li>Division</li></a>
                </div>
            </ul>
            Grades Page: {grade}
        </>
    )
}