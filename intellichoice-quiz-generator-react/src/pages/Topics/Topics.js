import React from 'react'
import { useParams } from 'react-router-dom';

export default function Topics () {
    const {grade, topic} = useParams();
    return (
        <>
            Grade: {grade}
            <br></br>
            Topic: {topic}
        </>
    );
}