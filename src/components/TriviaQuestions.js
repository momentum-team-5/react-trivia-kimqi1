import { useState, useEffect } from 'react'
import TriviaQuestion from './TriviaQuestion'
import 'tachyons'
export default function TriviaQuestions (props) {
  const { category, clearSelectedCategory } = props
  const [questions, setQuestions] = useState([])
  // const [answers, setAnswers] = useState(null)

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10' + '&category=' + category.id)
      .then(res => res.json())
      .then(data => {
        for (const question of data.results) {
          const answers = question.incorrect_answers.slice()
          answers.push(question.correct_answer)
          // shuffle answers
          question.shuffled_answers = answers
        }

        setQuestions(data.results)
      })
  }, [category])

  /* useEffect(() => {
    const answers = incorrect_answers.slice()
    TriviaQuestion.incorrect_answers.slice()
    answers.push(answers.correct_answer)
  }, [TriviaQuestion])
*/

  return (
    <div>
      <h2>{category.name}</h2>
      <button onClick={clearSelectedCategory}>Return to all categories</button>
      <ul>
        {questions.map((name) => (
          <li key={[name.id]}>
            <div className='bg blue'>Question: <span dangerouslySetInnerHTML={{ __html: name.question }} /></div>
            <div className='bg green'>Correct Answers: <span dangerouslySetInnerHTML={{ __html: name.correct_answer }} /></div>
            <div className='bg red'>Incorrect Answers: <span dangerouslySetInnerHTML={{ __html: name.incorrect_answers }} /></div>
            <div className='bg red'>Shuffled Answers Answers: <span dangerouslySetInnerHTML={{ __html: name.shuffled_answers.join(', ') }} /></div>
          </li>
        ))}
      </ul>
    </div>
  )
}
