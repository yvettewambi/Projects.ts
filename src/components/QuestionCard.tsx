import React from "react";
// Types

// Styles

type Props = {
  question: string;
  answers: string[];
  userAnswer: any;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  currentQuestion: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  currentQuestion,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {currentQuestion}/{totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <div>
          <button disabled={userAnswer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
