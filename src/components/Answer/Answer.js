import React from 'react'
import './Answer.css'

const Answer = (props) => {
  let answers = Object.keys(props.answers).map((answer, i) => (
    <li key={answer}>{props.answers[answer]}</li>
  ))

  return <ul className='Answers'>{answers}</ul>
}

export default Answer
