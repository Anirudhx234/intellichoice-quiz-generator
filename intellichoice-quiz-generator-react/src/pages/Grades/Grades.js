import React from 'react'
import { useParams } from 'react-router-dom';

export default function Grades () {
    const { grade } = useParams();
    return (
        <div>
            Grades Page: {grade}
        </div>
    )
}