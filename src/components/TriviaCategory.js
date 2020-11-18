import { useState, useEffect } from 'react'

export default function TriviaCategory (props) {
  const { category, clearSelectedCategory } = props
  const [categoryQuestions, setCategoryQuestions] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=' + category.id)
      .then(res => res.json())
      .then(originalData => {
        setCategoryQuestions(originalData.results)
        console.log(originalData)
      })
  }, [category])

  return (
    <div>
      <h2>{category.Category}</h2>
      <button onClick={clearSelectedCategory}>
        Go back to question categories
      </button>

      <ul>
        {categoryQuestions.map((question) => (
          <li key={category.question}>
            <div>Question: {question.questions}</div>

          </li>
        ))}
      </ul>
    </div>
  )
}
