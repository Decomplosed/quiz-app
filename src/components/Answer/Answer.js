import React from 'react'
import './Answer.css'

const Answer = ({ answers, checkAnswer, correctAnswer, clickedAnswer }) => {
  let answersMarkup = Object.keys(answers).map((answer, i) => (
    <li
      key={answer}
      className={
        correctAnswer === answer
          ? 'correct'
          : clickedAnswer === answer
          ? 'incorrect'
          : ''
      }
      onClick={() => checkAnswer(answer)}
    >
      {answers[answer]}
    </li>
  ))

  return <ul className='Answers'>{answersMarkup}</ul>
}

export default Answer
