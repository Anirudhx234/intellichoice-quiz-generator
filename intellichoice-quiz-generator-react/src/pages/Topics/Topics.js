import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Addition from './Addition.js';
import Subtraction from './Subtraction.js';
import Multiplication from './Multiplication.js';
import Division from './Division.js';
import { Link } from "react-router-dom";
import $ from "jquery";
import "./topicStyles.css";

export default function Topics () {
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [i, setI] = useState(0);
    const [correct, setCorrect] = useState(false);
    const [started, setStarted] = useState(false);
    const [ascreen, setAscreen] = useState(false);
    const [question, setQuestion] = useState(0);


    var {grade, topic} = useParams();
    var name;
    const location = window.location.href;
    if (location.includes("addition")) {
        topic = Addition;
        name = "Addition";
    }
    else if (location.includes("subtraction")) {
        topic = Subtraction;
        name = "Subtraction";
    }
    else if (location.includes("multiplication")) {
        topic = Multiplication;
        name = "Multiplication";
    }
    else if (location.includes("division")) {
        topic = Division;
        name = "Division"
    }

    function create() {
        return topic(grade);
    }

    const startQuiz = param => {
        grade = param
        setQuestion(create());
        setStarted(true);
    }

    const handleSubmit = () => {
        setStarted(true);
        var answer = document.getElementById('answer').value;
        if (answer === '') {
            return;
        }
        answer = parseInt(answer);
        if (question[3] === answer) {
            setScore(score + 1);
            setCorrect(true);
        }
        else {
            setCorrect(false);
        }

        setAscreen(true);
        if (i < 9) {
            setShowScore(false);
        } else {
            setShowScore(true);
        }
        document.getElementById("answer").disabled = true;
    };

    const handleNext = () => {
        document.getElementById('answer').value = '';
        setI(i + 1);
        setQuestion(create());
        setAscreen(false);
        document.getElementById("answer").disabled = false;
        $('#answer').focus();
    }

    $(document).keyup(function (e) {
        if (e.keyCode === 13 && !ascreen) {
            $("#submit").click();
        }
    });

    return (
        <div className="container">
            {!started &&
                <div className='start-page'>
                    Welcome to the {name} quiz! There will be 10 questions in this section.
                    <br />
                    Select grade level to begin:
                    <br />
                    <div className='grade-select'>
                        <div className="grade-button" onClick={() => startQuiz('kinder')}>Kindergarten</div>
                        <div className="grade-button" onClick={() => startQuiz('first')}>First</div>
                        <div className="grade-button" onClick={() => startQuiz('second')}>Second</div>
                        <div className="grade-button" onClick={() => startQuiz('third')}>Third</div>
                        <div className="grade-button" onClick={() => startQuiz('fourth')}>Fourth</div>
                        <div className="grade-button" onClick={() => startQuiz('fifth')}>Fifth</div>
                    </div>
                </div>}
            {!showScore && started &&
                <div className='question-section'>
                    <div className='question-count'>
                        Question {i + 1}/10
                    </div>
                    <div className='question-text'>{question[0]}</div>
                    <div className='answer-section'>
                        <input type="number" id="answer" autocomplete="off" autofocus="autofocus" />
                        <div className="line" />
                        {!ascreen && <div id="submit" className="submit" onClick={() => handleSubmit()}>Submit</div>}
                    </div>
                </div>
            }
            {!showScore && started && ascreen &&
                <div>
                    {correct &&
                        <p>Correct!</p>}
                    {!correct &&
                        <p>Incorrect!</p>}
                    <div className="next-wrapper">
                        <div id="next" className="next" onClick={() => handleNext()}>Next</div>
                    </div>
                </div>}
            {showScore &&
                <div className='score-section' >
                    You scored {score} out of {10}
                    <div className="line"></div>
                    <Link>
                        <div className="restart" onClick="window.location.href=window.location.href">Take the quiz again!</div>
                    </Link>
                </div >
            }
        </div>
    );
}