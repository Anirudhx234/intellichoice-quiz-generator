import React from 'react'
import './practiceStyles.css'

export default function Practice () {
    return (
        <>
            <ul className="gradesList">
                <div id="practice" className="row">
                    <a type='button' className="col" href='/practice/kindergarten'>
                        <li>
                        Kindergarten
                        </li>
                    </a>
                    <a type='button'  className="col" href='/practice/first'>
                        <li>
                        Grade 1
                        </li>
                    </a>
                    <a type='button'  className="col" href='/practice/second'>
                        <li>
                        Grade 2
                        </li>
                    </a>
                </div>
                <div id="practice" className="row">
                    <a type='button'  className="col" href='/practice/third'>
                        <li>
                        Grade 3
                        </li>
                    </a>
                    <a type='button'  className="col" href='/practice/fourth'>
                        <li>
                        Grade 4
                        </li>
                    </a>
                    <a type='button'  className="col" href='/practice/fifth'>
                        <li>
                        Grade 5
                        </li>
                    </a>
                </div>
            </ul>
        </>
    )
}