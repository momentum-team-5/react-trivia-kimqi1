/* globals fetch */
import 'tachyons'
import './App.css'
import { useEffect, useState } from 'react'
import TriviaQuestions from './components/TriviaQuestions'

function App () {
  const [triviaCat, setTriviaCat] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(response => response.json())
      .then(data => {
        return setTriviaCat(data.trivia_categories)
      })
  }, [])

  if (selectedCategory) {
    return (
      <TriviaQuestions
        category={selectedCategory}
        clearSelectedCategory={() => setSelectedCategory(null)}
      />
    )
  }
  return (
    <div className='mw7 center pa2'>
      <h2>Trivia Categories</h2>
      <ul>
        {triviaCat.map((category) => (
          <li key={category.id}>
            <div className='grow h3 mw5 ma4 br-pill pa3 blue bg-yellow category'>
              <button
                onClick={() => setSelectedCategory(category)}
                className='tc grow mw5 pl0 bw0 bg-yellow pointer blue'
              >
                {category.name}
              </button>
            </div>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
