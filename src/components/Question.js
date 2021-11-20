function Question({ question, disabled, onAnswer }) {
  return (
    <>
      <h2>{question.text}</h2>
      {question.answers.map((answer, i) => {
        return (
          <button
            type="button"
            key={i}
            onClick={() => onAnswer(answer, question.text)}
            className={
              disabled
                ? "btn btn-outline-warning disabled mb-2 "
                : "btn btn-outline-warning mb-2 "
            }
          >
            {answer}
          </button>
        );
      })}
    </>
  );
}

export default Question;
