import { useState, useEffect } from "react";
import { getQuestions } from "../data/Questions";
import Question from "./Question";

function Form() {
  const allQuestions = getQuestions();
  const [questions, setQuestions] = useState([allQuestions[0]]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [section, setSection] = useState(false);

  useEffect(() => {
    console.log(currentQuestion);
    if (currentQuestion === 1) {
      if (answers[0].answer === "B2B") {
        const newQuestions = [...questions, allQuestions[1]];
        setQuestions(newQuestions);
      } else if (answers[0].answer === "B2C") {
        const newQuestions = [...questions, allQuestions[2]];
        setQuestions(newQuestions);
      } else {
        const newQuestions = [...questions, allQuestions[1], allQuestions[2]];
        setQuestions(newQuestions);
      }
    } else if (
      (currentQuestion === 2 &&
        (answers[0].answer === "B2B" || answers[0].answer === "B2C")) ||
      currentQuestion === 3
    )
      setSection(true);
    else return;
  }, [currentQuestion, answers]);

  //event handlers
  const handleAnswer = (answer, text) => {
    const newAnswer = { question: text, answer: answer };
    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleNext = () => {
    const newQuestions = [allQuestions[3], allQuestions[4]];
    setQuestions(newQuestions);
  };

  return (
    <form>
      {questions.map((question) => (
        <Question
          key={question.id}
          question={question}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestion}
        />
      ))}
      <button
        type="button"
        onClick={handleNext}
        className={
          section
            ? "btn btn-outline-primary my-2"
            : "btn btn-outline-primary my-2 disabled"
        }
      >
        Next
      </button>
    </form>
  );
}

export default Form;
