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

  return (
    <>
      <ul disabled={clickedAnswer ? true : false} className='Answers'>
        {answersMarkup}
      </ul>
      <div>
        {correctAnswer
          ? 'Correct answer!'
          : clickedAnswer
          ? 'Incorrect answer!'
          : ''}
      </div>
    </>
  )
}

export default Answer
