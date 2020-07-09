import React from 'react'
import './Answer.css'

const Answer = ({ answers, checkAnswer }) => {
  let answersMarkup = Object.keys(answers).map((answer, i) => (
    <li key={answer} onClick={() => checkAnswer(answer)}>
      {answers[answer]}
    </li>
  ))

  return <ul className='Answers'>{answersMarkup}</ul>
}

export default Answer
