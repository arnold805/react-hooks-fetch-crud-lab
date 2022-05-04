import React from "react";

function QuestionItem({ question, onDeleteClick, onAnswerChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  // handleDeleteClick callback function
  function handleDeleteClick() {
    onDeleteClick(id);
  }

  // handleAnswerChange callback function
  function handleAnswerChange(event) {
    // event.target.value to get the user form input string
    onAnswerChange(id, parseInt(event.target.value));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        {/* onChange event listener tied to handleAnswerChange callback */}
        <select defaultValue={correctIndex} onChange={handleAnswerChange}>{options}</select>
      </label>
      {/* handleDeleteClick callback */}
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
