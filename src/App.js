import React, { useState } from 'react';
import questions from './questions.json';
import Display from './Display';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const App = () => {
  const [marks, setMarks] = useState(new Array(questions.length).fill(0));
  const [quizEnded, setQuizEnded] = useState(false);
  const [quizRestarted, setQuizRestarted] = useState(false);

  const changeHandler = (value, index) => {
    setMarks(prevMarks => {
      const updatedMarks = [...prevMarks];
      updatedMarks[index] = value;
      return updatedMarks;
    });
  };

  const calculateTotalMarks = () => {
    const totalMarks = marks.reduce((a, b) => a + b, 0);
    return totalMarks + '/' + questions.length;
  };

  const endQuiz = () => {
    setQuizEnded(true);
  };

  const restartQuiz = () => {
    setQuizEnded(false);
    setQuizRestarted(true);
    setMarks(new Array(questions.length).fill(0));
  };

  if (quizRestarted) {
    return <App />;
  }

  return (
    <div className="container">
      <center>
        {questions.map((question, index) => (
          <Display key={index} question={question} index={index} changeHandler={changeHandler} />
        ))}
        {!quizEnded && <button onClick={endQuiz}>End Quiz</button>}
        {quizEnded && (
          <div>
            <p>Your score: {calculateTotalMarks()}</p>
            <button onClick={restartQuiz}>Play Again</button>
          </div>
        )}
      </center>
    </div>
  );
};

export default App;
