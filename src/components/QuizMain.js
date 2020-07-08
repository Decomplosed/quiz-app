import React, { Component } from 'react'
import './QuizMain.css'

export class QuizMain extends Component {
  state = {
    questions: {
      1: 'What US city is known as the "birthplace of jazz"?',
      2: 'What is the capital of Greece?',
      3: 'What planet gave birth to Superman?',
    },
  }

  render() {
    return <div className='Content'>QuizMain</div>
  }
}

export default QuizMain
