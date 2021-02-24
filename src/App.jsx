import React, { useState } from 'react';
import './App.scss';
import Question from './components/Question';
import Result from './components/Result';
import quiz from './seeds/quiz';

const App = () => {
    const [count, setCount] = useState(0);
    const [gotRight, setGotRight] = useState(0);
    const [completed, setCompleted] = useState(false);
    const getAnswer = (e) => {
        const ans = e.target.innerText;
        const matched = quiz[count].answers.filter((x) => x.option === ans)[0];
        matched.isCorrect && setGotRight((prevRight) => prevRight + 1);
        if (count === quiz.length - 1) {
            setCompleted(true);
        } else {
            setCount((prevCount) => prevCount + 1);
        }
    };
    const resetQuiz = () => {
        setCount(0);
        setGotRight(0);
        setCompleted(false);
    };
    return !completed ? (
        <Question
            question={quiz[count].question}
            answers={quiz[count].answers}
            getAnswer={getAnswer}
            count={count}
        />
    ) : (
        <Result gotRight={gotRight} resetQuiz={resetQuiz} />
    );
};

export default App;
