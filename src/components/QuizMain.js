import React, { Component } from 'react'
import Question from './Question/Question'
import Answer from './Answer/Answer'

import './QuizMain.css'

export class QuizMain extends Component {
  state = {
    questions: {
      1: 'What US city is known as the "birthplace of jazz"?',
      2: 'What is the capital of Greece?',
      3: 'What planet gave birth to Superman?',
    },
    answers: {
      1: {
        1: 'Chicago',
        2: 'New Orleans',
        3: 'New York',
      },
      2: {
        1: 'Athens',
        2: 'Patras',
        3: 'Kalamata',
      },
      3: {
        1: 'Krypton',
        2: 'Mars',
        3: 'Saturn',
      },
    },
    correctAnswers: {
      1: '2',
      2: '1',
      3: '1',
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  }

  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state

    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer,
      })
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer,
      })
    }
  }

  render() {
    const {
      questions,
      step,
      answers,
      correctAnswer,
      clickedAnswer,
    } = this.state

    return (
      <div className='Content'>
        <Question question={questions[step]} />
        <Answer
          answers={answers[step]}
          step={step}
          checkAnswer={this.checkAnswer}
          correctAnswer={correctAnswer}
          clickedAnswer={clickedAnswer}
        />
        <button className='NextStep'>Next</button>
      </div>
    )
  }
}

export default QuizMain
