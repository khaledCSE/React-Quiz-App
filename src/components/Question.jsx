import React from 'react';
import '../App.scss';

const Question = ({ question, answers, getAnswer, count }) => {
    return (
        <div className="card">
            <div className="question">
                <p>Question {count + 1}</p>
                <h3>{question}</h3>
            </div>
            <div className="a1" onClick={getAnswer}>
                {answers[0].option}
            </div>
            <div className="a2" onClick={getAnswer}>
                {answers[1].option}
            </div>
            <div className="a3" onClick={getAnswer}>
                {answers[2].option}
            </div>
            <div className="a4" onClick={getAnswer}>
                {answers[3].option}
            </div>
        </div>
    );
};

export default Question;
