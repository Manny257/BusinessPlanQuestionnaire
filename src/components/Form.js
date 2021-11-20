import { useState, useEffect } from "react";
import { getQuestions } from "../data/Questions";
import Question from "./Question";
import Input from "./Input";
import axios from "axios";
import { useNavigate } from "react-router";

function Form() {
  //states
  const allQuestions = getQuestions();
  const [questions, setQuestions] = useState([allQuestions[0]]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(allQuestions[0].id);
  const [section, setSection] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentQuestion === 101) {
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
      (currentQuestion === 102 &&
        (answers[0].answer === "B2B" || answers[0].answer === "B2C")) ||
      currentQuestion === 103
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
    if (currentQuestion > 103) setDone(true);
    else {
      const newQuestions = [allQuestions[3], allQuestions[4]];
      setQuestions(newQuestions);
    }
  };

  const handleChange = (e) => {
    setCurrentQuestion(105);
    setValue(e.currentTarget.value);
    if (value < 0) setError(true);
    else setError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAnswer = { question: questions[1].text, answer: value };
    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);
    await axios.post("/submit-questionnaire", answers);
    navigate("/submitted");
  };
  return (
    <div className="Container">
      <form onSubmit={handleSubmit}>
        {questions.map((question) => {
          if (question.answers === "")
            return (
              <Input
                key={question.id}
                type="number"
                label={question.text}
                value={value}
                error={error}
                onChange={handleChange}
              />
            );

          return (
            <Question
              key={question.id}
              question={question}
              disabled={question.id < currentQuestion ? true : false}
              onAnswer={handleAnswer}
            />
          );
        })}

        {done ? (
          <button type="submit" className="btn btn-outline-primary my-2">
            Next
          </button>
        ) : (
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
        )}
      </form>
    </div>
  );
}

export default Form;
