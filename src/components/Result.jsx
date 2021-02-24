import React from 'react';

const Result = ({ gotRight, resetQuiz }) => {
    let color = 'green';
    if (gotRight <= 3) {
        color = 'red';
    } else if (gotRight < 10) {
        color = 'orange';
    }
    return (
        <div className="result" style={{ color }}>
            <h3>You're Done!</h3>
            <h1>{gotRight} of your answers are right.</h1>
            <button className="reset" onClick={resetQuiz}>
                Reset Quiz
            </button>
        </div>
    );
};

export default Result;
