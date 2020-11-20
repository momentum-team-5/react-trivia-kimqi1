import { useState, useEffect } from 'react'
import TriviaQuestion from './TriviaQuestion'

export default function TriviaQuestions (props) {
  const { category, clearSelectedCategory } = props
  const [questions, setQuestions] = useState([])
  const [answer, setAnswer] = ('')

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10')
      .then(res => res.json())
      .then(data => {
        setQuestions(data.results)
      })
  }, [category])

  return (
    <div>
      <h2>{category.name}</h2>
      <button onClick={clearSelectedCategory}>Return to all categories</button>
      <ul>
        {questions.map((name) => (
          <li key={[name.id]}>
            <div>Question: {name.question}</div>
            <div>Correct Answers: {name.correct_answer}</div>
            <div>Incorrect Answers: {name.incorrect_answers}</div>

          </li>
        ))}
      </ul>
    </div>
  )
}
