function Question({ question, currentQuestion, onAnswer }) {
  return (
    <>
      <h2>{question.text}</h2>
      {question.answers.map((answer, i) => (
        <button
          type="button"
          key={i}
          onClick={() => onAnswer(answer, question.text)}
          className="btn btn-outline-warning mb-2 "
        >
          {answer}
        </button>
      ))}
    </>
  );
}

export default Question;
