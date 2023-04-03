import React, { useState } from "react";
import { fetchQuestions } from "./API";
//Components
import QuestionCard from "./components/QuestionCard";
import "./App.css";
import { Difficulty } from "./API";

const TOTAL = 20;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [mark, setMark] = useState(0);
  const [quizOver, setQuizOver] = useState(true);

  console.log(fetchQuestions(TOTAL, Difficulty.EASY));

  const beginTrivia = async () => {};

  const seeAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>QUIZ IT!</h1>
      <button className="begin" onClick={beginTrivia}>
        Begin
      </button>
      <p className="marks">Marks</p>
      {/* <QuestionCard
        currentQuestion={number + 1}
        totalQuestions={TOTAL}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={seeAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
};

export default App;
